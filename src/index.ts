import { VOCABULARY, type VocabularyWord } from "./vocabulary";

const JSON_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
	"CDN-Cache-Control": "no-store",
	"Cloudflare-CDN-Cache-Control": "no-store",
	"Content-Type": "application/json; charset=utf-8",
	Expires: "0",
	Pragma: "no-cache",
} as const;

const ALL_LEVELS = [1, 2, 3] as const;

function json(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: JSON_HEADERS,
	});
}

function parseLevels(value: string | null): readonly (1 | 2 | 3)[] | null {
	if (value === null || value.trim() === "") {
		return ALL_LEVELS;
	}

	const parts = value.split(",").map((part) => part.trim());
	if (
		parts.some((part) => !/^[123]$/.test(part)) ||
		parts.length === 0
	) {
		return null;
	}

	return [...new Set(parts.map(Number))] as (1 | 2 | 3)[];
}

function randomWord(levels: readonly (1 | 2 | 3)[]): VocabularyWord {
	const eligible = VOCABULARY.filter((word) => levels.includes(word.hsk));
	return eligible[Math.floor(Math.random() * eligible.length)];
}

export default {
	async fetch(request): Promise<Response> {
		const url = new URL(request.url);

		if (request.method !== "GET" && request.method !== "HEAD") {
			const response = json(
				{ error: "Method not allowed. Use GET /word." },
				405,
			);
			response.headers.set("Allow", "GET, HEAD");
			return response;
		}

		if (url.pathname === "/") {
			return json({
				name: "HSK TRMNL vocabulary backend",
				endpoint: "/word?hsk=1,2,3",
				words: VOCABULARY.length,
			});
		}

		if (url.pathname !== "/word") {
			return json({ error: "Not found. Use GET /word." }, 404);
		}

		const levels = parseLevels(url.searchParams.get("hsk"));
		if (levels === null) {
			return json(
				{
					error:
						'Invalid hsk query. Use 1, 2, 3, or a comma-separated combination such as "1,2,3".',
				},
				400,
			);
		}

		const response = json(randomWord(levels));
		if (request.method === "HEAD") {
			return new Response(null, response);
		}

		return response;
	},
} satisfies ExportedHandler<Env>;
