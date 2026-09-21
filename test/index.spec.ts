import { SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";
import { VOCABULARY, type VocabularyWord } from "../src/vocabulary";

const SIMPLIFIED_ONLY =
	/[爱边宾车单当点电东动对儿发飞个关过还后欢会机间见节进开课来两妈门难鸟气钱让认时书树说听万为问无习现乡写学样药爷业阴鱼远这钟种]/u;
const TONE_MARK = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/u;
const NEUTRAL_ONLY = new Set(["a", "ba", "de", "le", "ma", "ne", "zhe"]);

describe("vocabulary data", () => {
	it("contains all 600 classic HSK 1–3 entries", () => {
		expect(VOCABULARY).toHaveLength(600);
		expect(VOCABULARY.filter((word) => word.hsk === 1)).toHaveLength(150);
		expect(VOCABULARY.filter((word) => word.hsk === 2)).toHaveLength(150);
		expect(VOCABULARY.filter((word) => word.hsk === 3)).toHaveLength(300);
	});

	it("contains only complete, Traditional Chinese records", () => {
		for (const word of VOCABULARY) {
			expect(word.traditional).not.toMatch(SIMPLIFIED_ONLY);
			expect(word.pinyin.trim()).not.toBe("");
			expect(
				TONE_MARK.test(word.pinyin) || NEUTRAL_ONLY.has(word.pinyin),
			).toBe(true);
			expect(word.english.trim()).not.toBe("");
			expect([1, 2, 3]).toContain(word.hsk);
		}

		expect(new Set(VOCABULARY.map((word) => JSON.stringify(word))).size).toBe(
			600,
		);
	});

	it("keeps polyphonic entries aligned instead of merging them", () => {
		expect(VOCABULARY).toContainEqual({
			traditional: "還",
			pinyin: "hái",
			english: "still; also; yet",
			hsk: 2,
		});
		expect(VOCABULARY).toContainEqual({
			traditional: "還",
			pinyin: "huán",
			english: "to return",
			hsk: 2,
		});
		expect(VOCABULARY).toContainEqual({
			traditional: "隻",
			pinyin: "zhī",
			english: "classifier for birds, animals, and one of a pair",
			hsk: 3,
		});
		expect(VOCABULARY).toContainEqual({
			traditional: "只",
			pinyin: "zhǐ",
			english: "only; merely",
			hsk: 3,
		});
	});
});

describe("GET /word", () => {
	it("returns a random word from all levels by default", async () => {
		const response = await SELF.fetch("https://example.com/word");
		const word = await response.json<VocabularyWord>();

		expect(response.status).toBe(200);
		expect(VOCABULARY).toContainEqual(word);
		expect(response.headers.get("cache-control")).toContain("no-store");
		expect(response.headers.get("cdn-cache-control")).toBe("no-store");
		expect(response.headers.get("cloudflare-cdn-cache-control")).toBe(
			"no-store",
		);
	});

	it.each(["1", "2", "3", "1,2", "2,3", "1,2,3", "3,1,1"])(
		"restricts results for ?hsk=%s",
		async (query) => {
			const allowed = [...new Set(query.split(",").map(Number))];
			for (let attempt = 0; attempt < 12; attempt += 1) {
				const response = await SELF.fetch(
					`https://example.com/word?hsk=${query}`,
				);
				const word = await response.json<VocabularyWord>();
				expect(allowed).toContain(word.hsk);
			}
		},
	);

	it.each(["0", "4", "1,4", "one", "1,,2"])(
		"rejects invalid ?hsk=%s",
		async (query) => {
			const response = await SELF.fetch(
				`https://example.com/word?hsk=${query}`,
			);
			expect(response.status).toBe(400);
			expect(await response.json()).toHaveProperty("error");
		},
	);

	it("returns an empty body for HEAD", async () => {
		const response = await SELF.fetch("https://example.com/word?hsk=2", {
			method: "HEAD",
		});
		expect(response.status).toBe(200);
		expect(await response.text()).toBe("");
		expect(response.headers.get("cache-control")).toContain("no-store");
	});

	it("returns useful errors for unsupported routes and methods", async () => {
		expect((await SELF.fetch("https://example.com/nope")).status).toBe(404);
		expect(
			(
				await SELF.fetch("https://example.com/word", { method: "POST" })
			).status,
		).toBe(405);
	});
});
