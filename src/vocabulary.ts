/**
 * Classic HSK 2.0 Levels 1–3 vocabulary.
 *
 * The 600 records intentionally retain distinct readings and senses for
 * polyphonic/homographic syllabus entries instead of deduplicating by Hanzi.
 * See THIRD_PARTY_NOTICES.md for data provenance and licensing.
 */
export interface VocabularyWord {
	traditional: string;
	pinyin: string;
	english: string;
	hsk: 1 | 2 | 3;
}

export const VOCABULARY: readonly VocabularyWord[] = [
	{
		"traditional": "愛",
		"pinyin": "ài",
		"english": "to love",
		"hsk": 1
	},
	{
		"traditional": "八",
		"pinyin": "bā",
		"english": "eight",
		"hsk": 1
	},
	{
		"traditional": "爸爸",
		"pinyin": "bà ba",
		"english": "father",
		"hsk": 1
	},
	{
		"traditional": "杯子",
		"pinyin": "bēi zi",
		"english": "cup; glass; mug",
		"hsk": 1
	},
	{
		"traditional": "北京",
		"pinyin": "Běi jīng",
		"english": "Beijing",
		"hsk": 1
	},
	{
		"traditional": "本",
		"pinyin": "běn",
		"english": "classifier for books; root; origin",
		"hsk": 1
	},
	{
		"traditional": "不客氣",
		"pinyin": "bù kè qi",
		"english": "you're welcome; impolite; rude",
		"hsk": 1
	},
	{
		"traditional": "不",
		"pinyin": "bù",
		"english": "not; no",
		"hsk": 1
	},
	{
		"traditional": "菜",
		"pinyin": "cài",
		"english": "vegetable",
		"hsk": 1
	},
	{
		"traditional": "茶",
		"pinyin": "chá",
		"english": "tea",
		"hsk": 1
	},
	{
		"traditional": "吃",
		"pinyin": "chī",
		"english": "to eat",
		"hsk": 1
	},
	{
		"traditional": "出租車",
		"pinyin": "chū zū chē",
		"english": "taxi",
		"hsk": 1
	},
	{
		"traditional": "打電話",
		"pinyin": "dǎ diàn huà",
		"english": "to make a telephone call",
		"hsk": 1
	},
	{
		"traditional": "大",
		"pinyin": "dà",
		"english": "big",
		"hsk": 1
	},
	{
		"traditional": "的",
		"pinyin": "de",
		"english": "of",
		"hsk": 1
	},
	{
		"traditional": "點",
		"pinyin": "diǎn",
		"english": "o’clock; spot; dot",
		"hsk": 1
	},
	{
		"traditional": "電腦",
		"pinyin": "diàn nǎo",
		"english": "computer",
		"hsk": 1
	},
	{
		"traditional": "電視",
		"pinyin": "diàn shì",
		"english": "TV",
		"hsk": 1
	},
	{
		"traditional": "電影",
		"pinyin": "diàn yǐng",
		"english": "film; movie",
		"hsk": 1
	},
	{
		"traditional": "東西",
		"pinyin": "dōng xi",
		"english": "thing",
		"hsk": 1
	},
	{
		"traditional": "都",
		"pinyin": "dōu",
		"english": "both; all",
		"hsk": 1
	},
	{
		"traditional": "讀",
		"pinyin": "dú",
		"english": "read aloud",
		"hsk": 1
	},
	{
		"traditional": "對不起",
		"pinyin": "duì bu qǐ",
		"english": "sorry",
		"hsk": 1
	},
	{
		"traditional": "多",
		"pinyin": "duō",
		"english": "much/many; how [+adjective]",
		"hsk": 1
	},
	{
		"traditional": "多少",
		"pinyin": "duō shao",
		"english": "how much/many?",
		"hsk": 1
	},
	{
		"traditional": "兒子",
		"pinyin": "ér zi",
		"english": "son",
		"hsk": 1
	},
	{
		"traditional": "二",
		"pinyin": "èr",
		"english": "two",
		"hsk": 1
	},
	{
		"traditional": "飯館",
		"pinyin": "fàn guǎn",
		"english": "restaurant",
		"hsk": 1
	},
	{
		"traditional": "飛機",
		"pinyin": "fēi jī",
		"english": "plane",
		"hsk": 1
	},
	{
		"traditional": "分鐘",
		"pinyin": "fēn zhōng",
		"english": "minute",
		"hsk": 1
	},
	{
		"traditional": "高興",
		"pinyin": "gāo xìng",
		"english": "pleased; happy",
		"hsk": 1
	},
	{
		"traditional": "個",
		"pinyin": "gè",
		"english": "individual; [general measure word]",
		"hsk": 1
	},
	{
		"traditional": "工作",
		"pinyin": "gōng zuò",
		"english": "job; work",
		"hsk": 1
	},
	{
		"traditional": "狗",
		"pinyin": "gǒu",
		"english": "dog",
		"hsk": 1
	},
	{
		"traditional": "漢語",
		"pinyin": "Hàn yǔ",
		"english": "Standard Chinese language",
		"hsk": 1
	},
	{
		"traditional": "好",
		"pinyin": "hǎo",
		"english": "good",
		"hsk": 1
	},
	{
		"traditional": "喝",
		"pinyin": "hē",
		"english": "to drink",
		"hsk": 1
	},
	{
		"traditional": "和",
		"pinyin": "hé",
		"english": "and",
		"hsk": 1
	},
	{
		"traditional": "很",
		"pinyin": "hěn",
		"english": "very",
		"hsk": 1
	},
	{
		"traditional": "後面",
		"pinyin": "hòu mian",
		"english": "rear; back; behind",
		"hsk": 1
	},
	{
		"traditional": "回",
		"pinyin": "huí",
		"english": "to return",
		"hsk": 1
	},
	{
		"traditional": "會",
		"pinyin": "huì",
		"english": "to know how to; can; meeting",
		"hsk": 1
	},
	{
		"traditional": "火車站",
		"pinyin": "huǒ chē zhàn",
		"english": "railway station",
		"hsk": 1
	},
	{
		"traditional": "幾",
		"pinyin": "jǐ",
		"english": "how much/many? [expecting a small number]",
		"hsk": 1
	},
	{
		"traditional": "家",
		"pinyin": "jiā",
		"english": "family; home",
		"hsk": 1
	},
	{
		"traditional": "叫",
		"pinyin": "jiào",
		"english": "to call; to be named",
		"hsk": 1
	},
	{
		"traditional": "今天",
		"pinyin": "jīn tiān",
		"english": "today",
		"hsk": 1
	},
	{
		"traditional": "九",
		"pinyin": "jiǔ",
		"english": "nine",
		"hsk": 1
	},
	{
		"traditional": "開",
		"pinyin": "kāi",
		"english": "to switch on; open",
		"hsk": 1
	},
	{
		"traditional": "看",
		"pinyin": "kàn",
		"english": "to see; to read; to watch; to look at",
		"hsk": 1
	},
	{
		"traditional": "看見",
		"pinyin": "kàn jiàn",
		"english": "see",
		"hsk": 1
	},
	{
		"traditional": "塊",
		"pinyin": "kuài",
		"english": "lump; piece",
		"hsk": 1
	},
	{
		"traditional": "來",
		"pinyin": "lái",
		"english": "to come",
		"hsk": 1
	},
	{
		"traditional": "老師",
		"pinyin": "lǎo shī",
		"english": "teacher",
		"hsk": 1
	},
	{
		"traditional": "了",
		"pinyin": "le",
		"english": "[makes an exclamation]",
		"hsk": 1
	},
	{
		"traditional": "冷",
		"pinyin": "lěng",
		"english": "cold",
		"hsk": 1
	},
	{
		"traditional": "裡",
		"pinyin": "lǐ",
		"english": "inside; in",
		"hsk": 1
	},
	{
		"traditional": "零",
		"pinyin": "líng",
		"english": "zero",
		"hsk": 1
	},
	{
		"traditional": "六",
		"pinyin": "liù",
		"english": "six",
		"hsk": 1
	},
	{
		"traditional": "媽媽",
		"pinyin": "mā ma",
		"english": "mother",
		"hsk": 1
	},
	{
		"traditional": "嗎",
		"pinyin": "ma",
		"english": "[makes a yes; no question]",
		"hsk": 1
	},
	{
		"traditional": "買",
		"pinyin": "mǎi",
		"english": "buy",
		"hsk": 1
	},
	{
		"traditional": "貓",
		"pinyin": "māo",
		"english": "cat",
		"hsk": 1
	},
	{
		"traditional": "沒",
		"pinyin": "méi",
		"english": "(negative prefix for verbs); have not; not",
		"hsk": 1
	},
	{
		"traditional": "沒關係",
		"pinyin": "méi guān xi",
		"english": "no problem",
		"hsk": 1
	},
	{
		"traditional": "米飯",
		"pinyin": "mǐ fàn",
		"english": "rice [cooked; boiled]",
		"hsk": 1
	},
	{
		"traditional": "明天",
		"pinyin": "míng tiān",
		"english": "tomorrow",
		"hsk": 1
	},
	{
		"traditional": "名字",
		"pinyin": "míng zi",
		"english": "given name",
		"hsk": 1
	},
	{
		"traditional": "哪",
		"pinyin": "nǎ",
		"english": "which?",
		"hsk": 1
	},
	{
		"traditional": "那",
		"pinyin": "nà",
		"english": "that",
		"hsk": 1
	},
	{
		"traditional": "呢",
		"pinyin": "ne",
		"english": "[returns; forwards a question]",
		"hsk": 1
	},
	{
		"traditional": "能",
		"pinyin": "néng",
		"english": "to be able to; can",
		"hsk": 1
	},
	{
		"traditional": "你",
		"pinyin": "nǐ",
		"english": "you",
		"hsk": 1
	},
	{
		"traditional": "年",
		"pinyin": "nián",
		"english": "year",
		"hsk": 1
	},
	{
		"traditional": "女兒",
		"pinyin": "nǚ ér",
		"english": "daughter",
		"hsk": 1
	},
	{
		"traditional": "朋友",
		"pinyin": "péng you",
		"english": "friend",
		"hsk": 1
	},
	{
		"traditional": "漂亮",
		"pinyin": "piào liang",
		"english": "beautiful",
		"hsk": 1
	},
	{
		"traditional": "蘋果",
		"pinyin": "píng guǒ",
		"english": "apple",
		"hsk": 1
	},
	{
		"traditional": "七",
		"pinyin": "qī",
		"english": "seven",
		"hsk": 1
	},
	{
		"traditional": "錢",
		"pinyin": "qián",
		"english": "money",
		"hsk": 1
	},
	{
		"traditional": "前面",
		"pinyin": "qián miàn",
		"english": "front",
		"hsk": 1
	},
	{
		"traditional": "請",
		"pinyin": "qǐng",
		"english": "to invite; please",
		"hsk": 1
	},
	{
		"traditional": "去",
		"pinyin": "qù",
		"english": "to go",
		"hsk": 1
	},
	{
		"traditional": "熱",
		"pinyin": "rè",
		"english": "hot",
		"hsk": 1
	},
	{
		"traditional": "人",
		"pinyin": "rén",
		"english": "person; people",
		"hsk": 1
	},
	{
		"traditional": "認識",
		"pinyin": "rèn shi",
		"english": "to know [be familiar with]",
		"hsk": 1
	},
	{
		"traditional": "日",
		"pinyin": "rì",
		"english": "day [date]; sun",
		"hsk": 1
	},
	{
		"traditional": "三",
		"pinyin": "sān",
		"english": "three",
		"hsk": 1
	},
	{
		"traditional": "商店",
		"pinyin": "shāng diàn",
		"english": "shop",
		"hsk": 1
	},
	{
		"traditional": "上",
		"pinyin": "shàng",
		"english": "up; above",
		"hsk": 1
	},
	{
		"traditional": "上午",
		"pinyin": "shàng wǔ",
		"english": "morning",
		"hsk": 1
	},
	{
		"traditional": "少",
		"pinyin": "shǎo",
		"english": "few",
		"hsk": 1
	},
	{
		"traditional": "誰",
		"pinyin": "shéi",
		"english": "who?",
		"hsk": 1
	},
	{
		"traditional": "什麼",
		"pinyin": "shén me",
		"english": "what?",
		"hsk": 1
	},
	{
		"traditional": "十",
		"pinyin": "shí",
		"english": "ten",
		"hsk": 1
	},
	{
		"traditional": "時候",
		"pinyin": "shí hou",
		"english": "[duration of] time",
		"hsk": 1
	},
	{
		"traditional": "是",
		"pinyin": "shì",
		"english": "to be",
		"hsk": 1
	},
	{
		"traditional": "書",
		"pinyin": "shū",
		"english": "book",
		"hsk": 1
	},
	{
		"traditional": "水",
		"pinyin": "shuǐ",
		"english": "water",
		"hsk": 1
	},
	{
		"traditional": "水果",
		"pinyin": "shuǐ guǒ",
		"english": "fruit",
		"hsk": 1
	},
	{
		"traditional": "睡覺",
		"pinyin": "shuì jiào",
		"english": "to go to bed; to sleep",
		"hsk": 1
	},
	{
		"traditional": "說話",
		"pinyin": "shuō huà",
		"english": "speak",
		"hsk": 1
	},
	{
		"traditional": "四",
		"pinyin": "sì",
		"english": "four",
		"hsk": 1
	},
	{
		"traditional": "歲",
		"pinyin": "suì",
		"english": "year (of crop harvests)",
		"hsk": 1
	},
	{
		"traditional": "他",
		"pinyin": "tā",
		"english": "he; him",
		"hsk": 1
	},
	{
		"traditional": "她",
		"pinyin": "tā",
		"english": "she; her",
		"hsk": 1
	},
	{
		"traditional": "太",
		"pinyin": "tài",
		"english": "very",
		"hsk": 1
	},
	{
		"traditional": "天氣",
		"pinyin": "tiān qì",
		"english": "weather",
		"hsk": 1
	},
	{
		"traditional": "聽",
		"pinyin": "tīng",
		"english": "to listen; hear",
		"hsk": 1
	},
	{
		"traditional": "同學",
		"pinyin": "tóng xué",
		"english": "schoolmate; classmate",
		"hsk": 1
	},
	{
		"traditional": "喂",
		"pinyin": "wèi",
		"english": "hello",
		"hsk": 1
	},
	{
		"traditional": "我",
		"pinyin": "wǒ",
		"english": "I; me",
		"hsk": 1
	},
	{
		"traditional": "我們",
		"pinyin": "wǒ men",
		"english": "we; us",
		"hsk": 1
	},
	{
		"traditional": "五",
		"pinyin": "wǔ",
		"english": "five",
		"hsk": 1
	},
	{
		"traditional": "喜歡",
		"pinyin": "xǐ huan",
		"english": "to like",
		"hsk": 1
	},
	{
		"traditional": "下",
		"pinyin": "xià",
		"english": "down; below",
		"hsk": 1
	},
	{
		"traditional": "下午",
		"pinyin": "xià wǔ",
		"english": "afternoon",
		"hsk": 1
	},
	{
		"traditional": "下雨",
		"pinyin": "xià yǔ",
		"english": "rain",
		"hsk": 1
	},
	{
		"traditional": "先生",
		"pinyin": "xiān sheng",
		"english": "Mr; Sir",
		"hsk": 1
	},
	{
		"traditional": "現在",
		"pinyin": "xiàn zài",
		"english": "now",
		"hsk": 1
	},
	{
		"traditional": "想",
		"pinyin": "xiǎng",
		"english": "to want; to think",
		"hsk": 1
	},
	{
		"traditional": "小",
		"pinyin": "xiǎo",
		"english": "small",
		"hsk": 1
	},
	{
		"traditional": "小姐",
		"pinyin": "xiǎo jie",
		"english": "Miss; young woman",
		"hsk": 1
	},
	{
		"traditional": "些",
		"pinyin": "xiē",
		"english": "some",
		"hsk": 1
	},
	{
		"traditional": "寫",
		"pinyin": "xiě",
		"english": "to write",
		"hsk": 1
	},
	{
		"traditional": "謝謝",
		"pinyin": "xiè xie",
		"english": "thank you",
		"hsk": 1
	},
	{
		"traditional": "星期",
		"pinyin": "xīng qī",
		"english": "week",
		"hsk": 1
	},
	{
		"traditional": "學生",
		"pinyin": "xué sheng",
		"english": "student",
		"hsk": 1
	},
	{
		"traditional": "學習",
		"pinyin": "xué xí",
		"english": "to learn; to study",
		"hsk": 1
	},
	{
		"traditional": "學校",
		"pinyin": "xué xiào",
		"english": "school",
		"hsk": 1
	},
	{
		"traditional": "一",
		"pinyin": "yī",
		"english": "one; once; first; structural word between two of the same verb; as soon as; throughout",
		"hsk": 1
	},
	{
		"traditional": "衣服",
		"pinyin": "yī fu",
		"english": "clothes",
		"hsk": 1
	},
	{
		"traditional": "醫生",
		"pinyin": "yī shēng",
		"english": "doctor; physician",
		"hsk": 1
	},
	{
		"traditional": "醫院",
		"pinyin": "yī yuàn",
		"english": "hospital",
		"hsk": 1
	},
	{
		"traditional": "椅子",
		"pinyin": "yǐ zi",
		"english": "chair",
		"hsk": 1
	},
	{
		"traditional": "有",
		"pinyin": "yǒu",
		"english": "to have",
		"hsk": 1
	},
	{
		"traditional": "月",
		"pinyin": "yuè",
		"english": "month; moon",
		"hsk": 1
	},
	{
		"traditional": "在",
		"pinyin": "zài",
		"english": "in; at; on",
		"hsk": 1
	},
	{
		"traditional": "再見",
		"pinyin": "zài jiàn",
		"english": "goodbye",
		"hsk": 1
	},
	{
		"traditional": "怎麼",
		"pinyin": "zěn me",
		"english": "how?",
		"hsk": 1
	},
	{
		"traditional": "怎麼樣",
		"pinyin": "zěn me yàng",
		"english": "how about it",
		"hsk": 1
	},
	{
		"traditional": "這",
		"pinyin": "zhè",
		"english": "this",
		"hsk": 1
	},
	{
		"traditional": "中國",
		"pinyin": "Zhōng guó",
		"english": "China",
		"hsk": 1
	},
	{
		"traditional": "中午",
		"pinyin": "zhōng wǔ",
		"english": "midday",
		"hsk": 1
	},
	{
		"traditional": "住",
		"pinyin": "zhù",
		"english": "to live; stay (a number of nights)",
		"hsk": 1
	},
	{
		"traditional": "桌子",
		"pinyin": "zhuō zi",
		"english": "table",
		"hsk": 1
	},
	{
		"traditional": "字",
		"pinyin": "zì",
		"english": "(Chinese) character",
		"hsk": 1
	},
	{
		"traditional": "昨天",
		"pinyin": "zuó tiān",
		"english": "yesterday",
		"hsk": 1
	},
	{
		"traditional": "坐",
		"pinyin": "zuò",
		"english": "to sit",
		"hsk": 1
	},
	{
		"traditional": "做",
		"pinyin": "zuò",
		"english": "to do; to be; become (an occupation)",
		"hsk": 1
	},
	{
		"traditional": "吧",
		"pinyin": "ba",
		"english": "sentence-final particle for suggestions or uncertainty",
		"hsk": 2
	},
	{
		"traditional": "白",
		"pinyin": "bái",
		"english": "white",
		"hsk": 2
	},
	{
		"traditional": "百",
		"pinyin": "bǎi",
		"english": "hundred",
		"hsk": 2
	},
	{
		"traditional": "幫助",
		"pinyin": "bāng zhù",
		"english": "to help",
		"hsk": 2
	},
	{
		"traditional": "報紙",
		"pinyin": "bào zhǐ",
		"english": "newspaper",
		"hsk": 2
	},
	{
		"traditional": "比",
		"pinyin": "bǐ",
		"english": "to compare",
		"hsk": 2
	},
	{
		"traditional": "別",
		"pinyin": "bié",
		"english": "do not; other; to separate",
		"hsk": 2
	},
	{
		"traditional": "長",
		"pinyin": "cháng",
		"english": "long",
		"hsk": 2
	},
	{
		"traditional": "唱歌",
		"pinyin": "chàng gē",
		"english": "to sing; singing",
		"hsk": 2
	},
	{
		"traditional": "出",
		"pinyin": "chū",
		"english": "to go out",
		"hsk": 2
	},
	{
		"traditional": "穿",
		"pinyin": "chuān",
		"english": "to wear; to put on",
		"hsk": 2
	},
	{
		"traditional": "船",
		"pinyin": "chuán",
		"english": "boat; ship; ferry",
		"hsk": 2
	},
	{
		"traditional": "次",
		"pinyin": "cì",
		"english": "time",
		"hsk": 2
	},
	{
		"traditional": "從",
		"pinyin": "cóng",
		"english": "from; follow; comply with",
		"hsk": 2
	},
	{
		"traditional": "錯",
		"pinyin": "cuò",
		"english": "wrong",
		"hsk": 2
	},
	{
		"traditional": "打籃球",
		"pinyin": "dá lán qiú",
		"english": "Play basketball",
		"hsk": 2
	},
	{
		"traditional": "大家",
		"pinyin": "dà jiā",
		"english": "everybody",
		"hsk": 2
	},
	{
		"traditional": "但是",
		"pinyin": "dàn shì",
		"english": "but; however",
		"hsk": 2
	},
	{
		"traditional": "到",
		"pinyin": "dào",
		"english": "to arrive; to get to",
		"hsk": 2
	},
	{
		"traditional": "得",
		"pinyin": "de",
		"english": "[particle to connect verb to adverb]",
		"hsk": 2
	},
	{
		"traditional": "得",
		"pinyin": "děi",
		"english": "to have to; must; ought to",
		"hsk": 2
	},
	{
		"traditional": "弟弟",
		"pinyin": "dì di",
		"english": "younger brother",
		"hsk": 2
	},
	{
		"traditional": "第一",
		"pinyin": "dì yī",
		"english": "firstly",
		"hsk": 2
	},
	{
		"traditional": "懂",
		"pinyin": "dǒng",
		"english": "to understand",
		"hsk": 2
	},
	{
		"traditional": "房間",
		"pinyin": "fáng jiān",
		"english": "room",
		"hsk": 2
	},
	{
		"traditional": "非常",
		"pinyin": "fēi cháng",
		"english": "extremely",
		"hsk": 2
	},
	{
		"traditional": "服務員",
		"pinyin": "fú wù yuán",
		"english": "waiter/waitress; attendant",
		"hsk": 2
	},
	{
		"traditional": "高",
		"pinyin": "gāo",
		"english": "high; tall",
		"hsk": 2
	},
	{
		"traditional": "告訴",
		"pinyin": "gào su",
		"english": "to tell",
		"hsk": 2
	},
	{
		"traditional": "哥哥",
		"pinyin": "gē ge",
		"english": "elder brother",
		"hsk": 2
	},
	{
		"traditional": "給",
		"pinyin": "gěi",
		"english": "to give",
		"hsk": 2
	},
	{
		"traditional": "公共汽車",
		"pinyin": "gōng gòng qì chē",
		"english": "bus",
		"hsk": 2
	},
	{
		"traditional": "公斤",
		"pinyin": "gōng jīn",
		"english": "kilogram",
		"hsk": 2
	},
	{
		"traditional": "公司",
		"pinyin": "gōng sī",
		"english": "company; office",
		"hsk": 2
	},
	{
		"traditional": "貴",
		"pinyin": "guì",
		"english": "expensive",
		"hsk": 2
	},
	{
		"traditional": "還",
		"pinyin": "hái",
		"english": "still; also; yet",
		"hsk": 2
	},
	{
		"traditional": "孩子",
		"pinyin": "hái zi",
		"english": "child; children",
		"hsk": 2
	},
	{
		"traditional": "好吃",
		"pinyin": "hǎo chī",
		"english": "delicious",
		"hsk": 2
	},
	{
		"traditional": "號",
		"pinyin": "hào",
		"english": "number; date (day of the month)",
		"hsk": 2
	},
	{
		"traditional": "黑",
		"pinyin": "hēi",
		"english": "black",
		"hsk": 2
	},
	{
		"traditional": "紅",
		"pinyin": "hóng",
		"english": "red",
		"hsk": 2
	},
	{
		"traditional": "歡迎",
		"pinyin": "huān yíng",
		"english": "to welcome",
		"hsk": 2
	},
	{
		"traditional": "還",
		"pinyin": "huán",
		"english": "to return",
		"hsk": 2
	},
	{
		"traditional": "回答",
		"pinyin": "huí dá",
		"english": "reply",
		"hsk": 2
	},
	{
		"traditional": "機場",
		"pinyin": "jī chǎng",
		"english": "airport",
		"hsk": 2
	},
	{
		"traditional": "雞蛋",
		"pinyin": "jī dàn",
		"english": "(chicken) egg",
		"hsk": 2
	},
	{
		"traditional": "件",
		"pinyin": "jiàn",
		"english": "item; [measure word for items of clothing]",
		"hsk": 2
	},
	{
		"traditional": "教室",
		"pinyin": "jiào shì",
		"english": "classroom",
		"hsk": 2
	},
	{
		"traditional": "姐姐",
		"pinyin": "jiě jie",
		"english": "elder sister",
		"hsk": 2
	},
	{
		"traditional": "介紹",
		"pinyin": "jiè shào",
		"english": "introduce",
		"hsk": 2
	},
	{
		"traditional": "進",
		"pinyin": "jìn",
		"english": "to enter",
		"hsk": 2
	},
	{
		"traditional": "近",
		"pinyin": "jìn",
		"english": "near; close by",
		"hsk": 2
	},
	{
		"traditional": "就",
		"pinyin": "jiù",
		"english": "simply",
		"hsk": 2
	},
	{
		"traditional": "覺得",
		"pinyin": "jué de",
		"english": "to think; feel",
		"hsk": 2
	},
	{
		"traditional": "咖啡",
		"pinyin": "kā fēi",
		"english": "coffee",
		"hsk": 2
	},
	{
		"traditional": "開始",
		"pinyin": "kāi shǐ",
		"english": "to begin",
		"hsk": 2
	},
	{
		"traditional": "考試",
		"pinyin": "kǎo shì",
		"english": "examination",
		"hsk": 2
	},
	{
		"traditional": "可能",
		"pinyin": "kě néng",
		"english": "perhaps; possibly",
		"hsk": 2
	},
	{
		"traditional": "可以",
		"pinyin": "kě yǐ",
		"english": "can; may",
		"hsk": 2
	},
	{
		"traditional": "課",
		"pinyin": "kè",
		"english": "lesson",
		"hsk": 2
	},
	{
		"traditional": "快",
		"pinyin": "kuài",
		"english": "fast; quick",
		"hsk": 2
	},
	{
		"traditional": "快樂",
		"pinyin": "kuài lè",
		"english": "happy",
		"hsk": 2
	},
	{
		"traditional": "累",
		"pinyin": "lèi",
		"english": "tired",
		"hsk": 2
	},
	{
		"traditional": "離",
		"pinyin": "lí",
		"english": "to be distant from; to leave",
		"hsk": 2
	},
	{
		"traditional": "兩",
		"pinyin": "liǎng",
		"english": "two (of something)",
		"hsk": 2
	},
	{
		"traditional": "路",
		"pinyin": "lù",
		"english": "road; route; bus number",
		"hsk": 2
	},
	{
		"traditional": "旅遊",
		"pinyin": "lǚ yóu",
		"english": "tourism",
		"hsk": 2
	},
	{
		"traditional": "賣",
		"pinyin": "mài",
		"english": "to sell",
		"hsk": 2
	},
	{
		"traditional": "慢",
		"pinyin": "màn",
		"english": "slow",
		"hsk": 2
	},
	{
		"traditional": "忙",
		"pinyin": "máng",
		"english": "busy",
		"hsk": 2
	},
	{
		"traditional": "每",
		"pinyin": "měi",
		"english": "every; each",
		"hsk": 2
	},
	{
		"traditional": "妹妹",
		"pinyin": "mèi mei",
		"english": "younger sister",
		"hsk": 2
	},
	{
		"traditional": "門",
		"pinyin": "mén",
		"english": "door",
		"hsk": 2
	},
	{
		"traditional": "男人",
		"pinyin": "nán rén",
		"english": "a man; a male; men",
		"hsk": 2
	},
	{
		"traditional": "您",
		"pinyin": "nín",
		"english": "you [polite form]",
		"hsk": 2
	},
	{
		"traditional": "牛奶",
		"pinyin": "niú nǎi",
		"english": "milk",
		"hsk": 2
	},
	{
		"traditional": "女人",
		"pinyin": "nǚ rén",
		"english": "woman",
		"hsk": 2
	},
	{
		"traditional": "旁邊",
		"pinyin": "páng biān",
		"english": "next to",
		"hsk": 2
	},
	{
		"traditional": "跑步",
		"pinyin": "pǎo bù",
		"english": "running; jogging",
		"hsk": 2
	},
	{
		"traditional": "便宜",
		"pinyin": "pián yi",
		"english": "cheap",
		"hsk": 2
	},
	{
		"traditional": "票",
		"pinyin": "piào",
		"english": "ticket",
		"hsk": 2
	},
	{
		"traditional": "妻子",
		"pinyin": "qī zi",
		"english": "wife",
		"hsk": 2
	},
	{
		"traditional": "起床",
		"pinyin": "qǐ chuáng",
		"english": "get up (out of bed)",
		"hsk": 2
	},
	{
		"traditional": "千",
		"pinyin": "qiān",
		"english": "thousand",
		"hsk": 2
	},
	{
		"traditional": "晴",
		"pinyin": "qíng",
		"english": "fine; sunny",
		"hsk": 2
	},
	{
		"traditional": "去年",
		"pinyin": "qù nián",
		"english": "last year",
		"hsk": 2
	},
	{
		"traditional": "讓",
		"pinyin": "ràng",
		"english": "to let; allow",
		"hsk": 2
	},
	{
		"traditional": "上班",
		"pinyin": "shàng bān",
		"english": "start work",
		"hsk": 2
	},
	{
		"traditional": "身體",
		"pinyin": "shēn tǐ",
		"english": "body; health",
		"hsk": 2
	},
	{
		"traditional": "生病",
		"pinyin": "shēng bìng",
		"english": "ill; sick; unwell",
		"hsk": 2
	},
	{
		"traditional": "生日",
		"pinyin": "shēng rì",
		"english": "birthday",
		"hsk": 2
	},
	{
		"traditional": "時間",
		"pinyin": "shí jiān",
		"english": "time",
		"hsk": 2
	},
	{
		"traditional": "事情",
		"pinyin": "shì qing",
		"english": "matter; affair; thing",
		"hsk": 2
	},
	{
		"traditional": "手錶",
		"pinyin": "shǒu biǎo",
		"english": "watch",
		"hsk": 2
	},
	{
		"traditional": "手機",
		"pinyin": "shǒu jī",
		"english": "mobile phone",
		"hsk": 2
	},
	{
		"traditional": "送",
		"pinyin": "sòng",
		"english": "to give (present); deliver; see someone off",
		"hsk": 2
	},
	{
		"traditional": "所以",
		"pinyin": "suǒ yǐ",
		"english": "therefore; as a result; so",
		"hsk": 2
	},
	{
		"traditional": "它",
		"pinyin": "tā",
		"english": "it",
		"hsk": 2
	},
	{
		"traditional": "踢",
		"pinyin": "tī",
		"english": "to kick; to play (e.g. soccer)",
		"hsk": 2
	},
	{
		"traditional": "題",
		"pinyin": "tí",
		"english": "question",
		"hsk": 2
	},
	{
		"traditional": "跳舞",
		"pinyin": "tiào wǔ",
		"english": "to dance",
		"hsk": 2
	},
	{
		"traditional": "外",
		"pinyin": "wài",
		"english": "outside",
		"hsk": 2
	},
	{
		"traditional": "完",
		"pinyin": "wán",
		"english": "to finish; [+ verb indicates completion]",
		"hsk": 2
	},
	{
		"traditional": "玩",
		"pinyin": "wán",
		"english": "to play",
		"hsk": 2
	},
	{
		"traditional": "晚上",
		"pinyin": "wǎn shang",
		"english": "evening",
		"hsk": 2
	},
	{
		"traditional": "為",
		"pinyin": "wèi",
		"english": "for; because of",
		"hsk": 2
	},
	{
		"traditional": "問",
		"pinyin": "wèn",
		"english": "to ask",
		"hsk": 2
	},
	{
		"traditional": "問題",
		"pinyin": "wèn tí",
		"english": "problem",
		"hsk": 2
	},
	{
		"traditional": "西瓜",
		"pinyin": "xī guā",
		"english": "watermelon",
		"hsk": 2
	},
	{
		"traditional": "希望",
		"pinyin": "xī wàng",
		"english": "hope; wish",
		"hsk": 2
	},
	{
		"traditional": "洗",
		"pinyin": "xǐ",
		"english": "to wash",
		"hsk": 2
	},
	{
		"traditional": "向",
		"pinyin": "xiàng",
		"english": "towards",
		"hsk": 2
	},
	{
		"traditional": "小時",
		"pinyin": "xiǎo shí",
		"english": "hour",
		"hsk": 2
	},
	{
		"traditional": "笑",
		"pinyin": "xiào",
		"english": "to laugh; smile",
		"hsk": 2
	},
	{
		"traditional": "新",
		"pinyin": "xīn",
		"english": "new",
		"hsk": 2
	},
	{
		"traditional": "姓",
		"pinyin": "xìng",
		"english": "surname",
		"hsk": 2
	},
	{
		"traditional": "休息",
		"pinyin": "xiū xi",
		"english": "to rest",
		"hsk": 2
	},
	{
		"traditional": "雪",
		"pinyin": "xuě",
		"english": "snow",
		"hsk": 2
	},
	{
		"traditional": "顏色",
		"pinyin": "yán sè",
		"english": "colour",
		"hsk": 2
	},
	{
		"traditional": "眼睛",
		"pinyin": "yǎn jing",
		"english": "eye",
		"hsk": 2
	},
	{
		"traditional": "羊肉",
		"pinyin": "yáng ròu",
		"english": "mutton",
		"hsk": 2
	},
	{
		"traditional": "藥",
		"pinyin": "yào",
		"english": "medicine",
		"hsk": 2
	},
	{
		"traditional": "要",
		"pinyin": "yào",
		"english": "want; be going to; ask for; demand",
		"hsk": 2
	},
	{
		"traditional": "也",
		"pinyin": "yě",
		"english": "too; also",
		"hsk": 2
	},
	{
		"traditional": "已經",
		"pinyin": "yǐ jīng",
		"english": "already",
		"hsk": 2
	},
	{
		"traditional": "一起",
		"pinyin": "yī qǐ",
		"english": "in the same place; together; with",
		"hsk": 2
	},
	{
		"traditional": "意思",
		"pinyin": "yì si",
		"english": "meaning",
		"hsk": 2
	},
	{
		"traditional": "陰",
		"pinyin": "yīn",
		"english": "cloudy",
		"hsk": 2
	},
	{
		"traditional": "因為",
		"pinyin": "yīn wèi",
		"english": "because; owing to; on account of",
		"hsk": 2
	},
	{
		"traditional": "游泳",
		"pinyin": "yóu yǒng",
		"english": "swimming",
		"hsk": 2
	},
	{
		"traditional": "右邊",
		"pinyin": "yòu bian",
		"english": "on the right",
		"hsk": 2
	},
	{
		"traditional": "魚",
		"pinyin": "yú",
		"english": "fish",
		"hsk": 2
	},
	{
		"traditional": "元",
		"pinyin": "yuán",
		"english": "yuan [unit of Chinese currency]; dollar",
		"hsk": 2
	},
	{
		"traditional": "遠",
		"pinyin": "yuǎn",
		"english": "far",
		"hsk": 2
	},
	{
		"traditional": "運動",
		"pinyin": "yùn dòng",
		"english": "sport",
		"hsk": 2
	},
	{
		"traditional": "再",
		"pinyin": "zài",
		"english": "again",
		"hsk": 2
	},
	{
		"traditional": "早上",
		"pinyin": "zǎo shang",
		"english": "early morning",
		"hsk": 2
	},
	{
		"traditional": "張",
		"pinyin": "zhāng",
		"english": "to open up; to spread; [measure word for table, picture, paper etc]",
		"hsk": 2
	},
	{
		"traditional": "長",
		"pinyin": "zhǎng",
		"english": "to grow",
		"hsk": 2
	},
	{
		"traditional": "丈夫",
		"pinyin": "zhàng fu",
		"english": "husband",
		"hsk": 2
	},
	{
		"traditional": "找",
		"pinyin": "zhǎo",
		"english": "to find; to look for",
		"hsk": 2
	},
	{
		"traditional": "著",
		"pinyin": "zhe",
		"english": "-ing",
		"hsk": 2
	},
	{
		"traditional": "真",
		"pinyin": "zhēn",
		"english": "real; so (+adjective)",
		"hsk": 2
	},
	{
		"traditional": "正在",
		"pinyin": "zhèng zài",
		"english": "to be in the process of",
		"hsk": 2
	},
	{
		"traditional": "知道",
		"pinyin": "zhī dào",
		"english": "to know; to be aware of; also pron. [zhī dao]",
		"hsk": 2
	},
	{
		"traditional": "準備",
		"pinyin": "zhǔn bèi",
		"english": "to prepare",
		"hsk": 2
	},
	{
		"traditional": "自行車",
		"pinyin": "zì xíng chē",
		"english": "bicycle",
		"hsk": 2
	},
	{
		"traditional": "走",
		"pinyin": "zǒu",
		"english": "go; walk",
		"hsk": 2
	},
	{
		"traditional": "最",
		"pinyin": "zuì",
		"english": "most",
		"hsk": 2
	},
	{
		"traditional": "左邊",
		"pinyin": "zuǒ bian",
		"english": "on the left",
		"hsk": 2
	},
	{
		"traditional": "阿姨",
		"pinyin": "ā yí",
		"english": "auntie [mother's younger sister]",
		"hsk": 3
	},
	{
		"traditional": "啊",
		"pinyin": "a",
		"english": "ah",
		"hsk": 3
	},
	{
		"traditional": "矮",
		"pinyin": "ǎi",
		"english": "short [height]",
		"hsk": 3
	},
	{
		"traditional": "愛好",
		"pinyin": "ài hào",
		"english": "interests; hobbies",
		"hsk": 3
	},
	{
		"traditional": "安靜",
		"pinyin": "ān jìng",
		"english": "to be quiet",
		"hsk": 3
	},
	{
		"traditional": "把",
		"pinyin": "bǎ",
		"english": "grasp; [measure word for knives]",
		"hsk": 3
	},
	{
		"traditional": "搬",
		"pinyin": "bān",
		"english": "to move",
		"hsk": 3
	},
	{
		"traditional": "班",
		"pinyin": "bān",
		"english": "class",
		"hsk": 3
	},
	{
		"traditional": "半",
		"pinyin": "bàn",
		"english": "half",
		"hsk": 3
	},
	{
		"traditional": "辦法",
		"pinyin": "bàn fǎ",
		"english": "way; method; solution",
		"hsk": 3
	},
	{
		"traditional": "辦公室",
		"pinyin": "bàn gōng shì",
		"english": "office",
		"hsk": 3
	},
	{
		"traditional": "幫忙",
		"pinyin": "bāng máng",
		"english": "lend a hand",
		"hsk": 3
	},
	{
		"traditional": "包",
		"pinyin": "bāo",
		"english": "a packet of; package",
		"hsk": 3
	},
	{
		"traditional": "飽",
		"pinyin": "bǎo",
		"english": "full up; eaten to one’s satisfaction",
		"hsk": 3
	},
	{
		"traditional": "北方",
		"pinyin": "běi fāng",
		"english": "the north",
		"hsk": 3
	},
	{
		"traditional": "被",
		"pinyin": "bèi",
		"english": "quilt; by (somebody/something)",
		"hsk": 3
	},
	{
		"traditional": "鼻子",
		"pinyin": "bí zi",
		"english": "nose",
		"hsk": 3
	},
	{
		"traditional": "比較",
		"pinyin": "bǐ jiào",
		"english": "compare",
		"hsk": 3
	},
	{
		"traditional": "比賽",
		"pinyin": "bǐ sài",
		"english": "competition; match",
		"hsk": 3
	},
	{
		"traditional": "必須",
		"pinyin": "bì xū",
		"english": "must",
		"hsk": 3
	},
	{
		"traditional": "變化",
		"pinyin": "biàn huà",
		"english": "change",
		"hsk": 3
	},
	{
		"traditional": "表示",
		"pinyin": "biǎo shì",
		"english": "to express; to show; to say",
		"hsk": 3
	},
	{
		"traditional": "表演",
		"pinyin": "biǎo yǎn",
		"english": "play; show; performance",
		"hsk": 3
	},
	{
		"traditional": "別人",
		"pinyin": "bié ren",
		"english": "other people",
		"hsk": 3
	},
	{
		"traditional": "賓館",
		"pinyin": "bīn guǎn",
		"english": "guesthouse",
		"hsk": 3
	},
	{
		"traditional": "冰箱",
		"pinyin": "bīng xiāng",
		"english": "fridge",
		"hsk": 3
	},
	{
		"traditional": "才",
		"pinyin": "cái",
		"english": "a moment ago; just now; (preceded by a clause of condition or reason) not until",
		"hsk": 3
	},
	{
		"traditional": "菜單",
		"pinyin": "cài dān",
		"english": "menu",
		"hsk": 3
	},
	{
		"traditional": "參加",
		"pinyin": "cān jiā",
		"english": "to take part",
		"hsk": 3
	},
	{
		"traditional": "草",
		"pinyin": "cǎo",
		"english": "grass",
		"hsk": 3
	},
	{
		"traditional": "層",
		"pinyin": "céng",
		"english": "storey",
		"hsk": 3
	},
	{
		"traditional": "差",
		"pinyin": "chà",
		"english": "lack; lacking",
		"hsk": 3
	},
	{
		"traditional": "超市",
		"pinyin": "chāo shì",
		"english": "supermarket",
		"hsk": 3
	},
	{
		"traditional": "襯衫",
		"pinyin": "chèn shān",
		"english": "shirt",
		"hsk": 3
	},
	{
		"traditional": "成績",
		"pinyin": "chéng jì",
		"english": "results; marks; achievement",
		"hsk": 3
	},
	{
		"traditional": "城市",
		"pinyin": "chéng shì",
		"english": "city",
		"hsk": 3
	},
	{
		"traditional": "遲到",
		"pinyin": "chí dào",
		"english": "arrive late",
		"hsk": 3
	},
	{
		"traditional": "出現",
		"pinyin": "chū xiàn",
		"english": "to appear; to arise; to emerge",
		"hsk": 3
	},
	{
		"traditional": "除了",
		"pinyin": "chú le",
		"english": "apart from (\"chule...yiwai\" construction)",
		"hsk": 3
	},
	{
		"traditional": "廚房",
		"pinyin": "chú fáng",
		"english": "kitchen",
		"hsk": 3
	},
	{
		"traditional": "春",
		"pinyin": "chūn",
		"english": "spring",
		"hsk": 3
	},
	{
		"traditional": "詞語",
		"pinyin": "cí yǔ",
		"english": "word (general term including monosyllables through to short phrases); term (e.g. technical term); expression",
		"hsk": 3
	},
	{
		"traditional": "聰明",
		"pinyin": "cōng ming",
		"english": "clever; intelligent",
		"hsk": 3
	},
	{
		"traditional": "打掃",
		"pinyin": "dǎ sǎo",
		"english": "to clean",
		"hsk": 3
	},
	{
		"traditional": "打算",
		"pinyin": "dǎ suàn",
		"english": "plan; intention",
		"hsk": 3
	},
	{
		"traditional": "帶",
		"pinyin": "dài",
		"english": "carry",
		"hsk": 3
	},
	{
		"traditional": "擔心",
		"pinyin": "dān xīn",
		"english": "worry",
		"hsk": 3
	},
	{
		"traditional": "蛋糕",
		"pinyin": "dàn gāo",
		"english": "cake",
		"hsk": 3
	},
	{
		"traditional": "當然",
		"pinyin": "dāng rán",
		"english": "of course",
		"hsk": 3
	},
	{
		"traditional": "地",
		"pinyin": "de",
		"english": "...ly [particle to connect adverb to verb]",
		"hsk": 3
	},
	{
		"traditional": "燈",
		"pinyin": "dēng",
		"english": "lamp",
		"hsk": 3
	},
	{
		"traditional": "低",
		"pinyin": "dī",
		"english": "low; beneath; to lower (one's head)",
		"hsk": 3
	},
	{
		"traditional": "地方",
		"pinyin": "dì fang",
		"english": "place",
		"hsk": 3
	},
	{
		"traditional": "地鐵",
		"pinyin": "dì tiě",
		"english": "underground train; tube; metro",
		"hsk": 3
	},
	{
		"traditional": "地圖",
		"pinyin": "dì tú",
		"english": "map",
		"hsk": 3
	},
	{
		"traditional": "電梯",
		"pinyin": "diàn tī",
		"english": "lift; elevator",
		"hsk": 3
	},
	{
		"traditional": "電子",
		"pinyin": "diàn zǐ",
		"english": "electronic; electron (particle physics)",
		"hsk": 3
	},
	{
		"traditional": "冬",
		"pinyin": "dōng",
		"english": "winter",
		"hsk": 3
	},
	{
		"traditional": "東",
		"pinyin": "dōng",
		"english": "east",
		"hsk": 3
	},
	{
		"traditional": "動物",
		"pinyin": "dòng wù",
		"english": "animals",
		"hsk": 3
	},
	{
		"traditional": "短",
		"pinyin": "duǎn",
		"english": "short",
		"hsk": 3
	},
	{
		"traditional": "段",
		"pinyin": "duàn",
		"english": "section; paragraph; [measure word for stories, pieces of music, recordings etc.]",
		"hsk": 3
	},
	{
		"traditional": "鍛鍊",
		"pinyin": "duàn liàn",
		"english": "to engage in physical exercise",
		"hsk": 3
	},
	{
		"traditional": "多麼",
		"pinyin": "duō me",
		"english": "how ...",
		"hsk": 3
	},
	{
		"traditional": "餓",
		"pinyin": "è",
		"english": "hungry",
		"hsk": 3
	},
	{
		"traditional": "而且",
		"pinyin": "ér qiě",
		"english": "(not only ...) but also; moreover; in addition",
		"hsk": 3
	},
	{
		"traditional": "耳朵",
		"pinyin": "ěr duo",
		"english": "ears",
		"hsk": 3
	},
	{
		"traditional": "發燒",
		"pinyin": "fā shāo",
		"english": "fever; have a fever",
		"hsk": 3
	},
	{
		"traditional": "發現",
		"pinyin": "fā xiàn",
		"english": "discover",
		"hsk": 3
	},
	{
		"traditional": "方便",
		"pinyin": "fāng biàn",
		"english": "convenient",
		"hsk": 3
	},
	{
		"traditional": "放",
		"pinyin": "fàng",
		"english": "to put; set free",
		"hsk": 3
	},
	{
		"traditional": "放心",
		"pinyin": "fàng xīn",
		"english": "relax; feel relieved",
		"hsk": 3
	},
	{
		"traditional": "分",
		"pinyin": "fēn",
		"english": "minute",
		"hsk": 3
	},
	{
		"traditional": "附近",
		"pinyin": "fù jìn",
		"english": "nearby",
		"hsk": 3
	},
	{
		"traditional": "複習",
		"pinyin": "fù xí",
		"english": "revise",
		"hsk": 3
	},
	{
		"traditional": "乾淨",
		"pinyin": "gān jìng",
		"english": "clean",
		"hsk": 3
	},
	{
		"traditional": "敢",
		"pinyin": "gǎn",
		"english": "to dare; daring; (polite) may I venture",
		"hsk": 3
	},
	{
		"traditional": "感冒",
		"pinyin": "gǎn mào",
		"english": "to catch a cold",
		"hsk": 3
	},
	{
		"traditional": "剛才",
		"pinyin": "gāng cái",
		"english": "just now",
		"hsk": 3
	},
	{
		"traditional": "根據",
		"pinyin": "gēn jù",
		"english": "according to",
		"hsk": 3
	},
	{
		"traditional": "跟",
		"pinyin": "gēn",
		"english": "with",
		"hsk": 3
	},
	{
		"traditional": "更",
		"pinyin": "gèng",
		"english": "even more",
		"hsk": 3
	},
	{
		"traditional": "公園",
		"pinyin": "gōng yuán",
		"english": "park",
		"hsk": 3
	},
	{
		"traditional": "故事",
		"pinyin": "gù shi",
		"english": "story; tale; plot",
		"hsk": 3
	},
	{
		"traditional": "刮",
		"pinyin": "guā",
		"english": "to blow (of the wind)",
		"hsk": 3
	},
	{
		"traditional": "關",
		"pinyin": "guān",
		"english": "to close",
		"hsk": 3
	},
	{
		"traditional": "關係",
		"pinyin": "guān xì",
		"english": "relationship; connection",
		"hsk": 3
	},
	{
		"traditional": "關心",
		"pinyin": "guān xīn",
		"english": "care about",
		"hsk": 3
	},
	{
		"traditional": "關於",
		"pinyin": "guān yú",
		"english": "about",
		"hsk": 3
	},
	{
		"traditional": "國家",
		"pinyin": "guó jiā",
		"english": "country",
		"hsk": 3
	},
	{
		"traditional": "果汁",
		"pinyin": "guǒ zhī",
		"english": "fruit juice",
		"hsk": 3
	},
	{
		"traditional": "過去",
		"pinyin": "guò qu",
		"english": "(in the) past",
		"hsk": 3
	},
	{
		"traditional": "還是",
		"pinyin": "hái shi",
		"english": "or; still; nevertheless",
		"hsk": 3
	},
	{
		"traditional": "害怕",
		"pinyin": "hài pà",
		"english": "afraid",
		"hsk": 3
	},
	{
		"traditional": "河",
		"pinyin": "hé",
		"english": "river",
		"hsk": 3
	},
	{
		"traditional": "黑板",
		"pinyin": "hēi bǎn",
		"english": "blackboard",
		"hsk": 3
	},
	{
		"traditional": "護照",
		"pinyin": "hù zhào",
		"english": "passport",
		"hsk": 3
	},
	{
		"traditional": "花",
		"pinyin": "huā",
		"english": "flower; blossom",
		"hsk": 3
	},
	{
		"traditional": "花",
		"pinyin": "huā",
		"english": "to spend (time or money)",
		"hsk": 3
	},
	{
		"traditional": "花園",
		"pinyin": "huā yuán",
		"english": "garden",
		"hsk": 3
	},
	{
		"traditional": "畫",
		"pinyin": "huà",
		"english": "to draw; paint (pictures)",
		"hsk": 3
	},
	{
		"traditional": "壞",
		"pinyin": "huài",
		"english": "bad",
		"hsk": 3
	},
	{
		"traditional": "環境",
		"pinyin": "huán jìng",
		"english": "environment",
		"hsk": 3
	},
	{
		"traditional": "換",
		"pinyin": "huàn",
		"english": "to change (to another one)",
		"hsk": 3
	},
	{
		"traditional": "黃",
		"pinyin": "huáng",
		"english": "yellow",
		"hsk": 3
	},
	{
		"traditional": "會議",
		"pinyin": "huì yì",
		"english": "meeting",
		"hsk": 3
	},
	{
		"traditional": "或者",
		"pinyin": "huò zhě",
		"english": "perhaps",
		"hsk": 3
	},
	{
		"traditional": "機會",
		"pinyin": "jī huì",
		"english": "opportunity",
		"hsk": 3
	},
	{
		"traditional": "幾乎",
		"pinyin": "jī hū",
		"english": "almost",
		"hsk": 3
	},
	{
		"traditional": "極",
		"pinyin": "jí",
		"english": "extreme",
		"hsk": 3
	},
	{
		"traditional": "記得",
		"pinyin": "jì de",
		"english": "to remember",
		"hsk": 3
	},
	{
		"traditional": "季節",
		"pinyin": "jì jié",
		"english": "season",
		"hsk": 3
	},
	{
		"traditional": "檢查",
		"pinyin": "jiǎn chá",
		"english": "inspect",
		"hsk": 3
	},
	{
		"traditional": "簡單",
		"pinyin": "jiǎn dān",
		"english": "simple",
		"hsk": 3
	},
	{
		"traditional": "見面",
		"pinyin": "jiàn miàn",
		"english": "to meet",
		"hsk": 3
	},
	{
		"traditional": "健康",
		"pinyin": "jiàn kāng",
		"english": "healthy; health",
		"hsk": 3
	},
	{
		"traditional": "講",
		"pinyin": "jiǎng",
		"english": "speak",
		"hsk": 3
	},
	{
		"traditional": "教",
		"pinyin": "jiāo",
		"english": "to teach",
		"hsk": 3
	},
	{
		"traditional": "腳",
		"pinyin": "jiǎo",
		"english": "foot",
		"hsk": 3
	},
	{
		"traditional": "角",
		"pinyin": "jiǎo",
		"english": "horn; corner; jiao (written) [unit of currency = 0.1 yuan]",
		"hsk": 3
	},
	{
		"traditional": "接",
		"pinyin": "jiē",
		"english": "connect",
		"hsk": 3
	},
	{
		"traditional": "街道",
		"pinyin": "jiē dào",
		"english": "road",
		"hsk": 3
	},
	{
		"traditional": "節目",
		"pinyin": "jié mù",
		"english": "programme",
		"hsk": 3
	},
	{
		"traditional": "節日",
		"pinyin": "jié rì",
		"english": "festival",
		"hsk": 3
	},
	{
		"traditional": "結婚",
		"pinyin": "jié hūn",
		"english": "marry",
		"hsk": 3
	},
	{
		"traditional": "結束",
		"pinyin": "jié shù",
		"english": "finish",
		"hsk": 3
	},
	{
		"traditional": "解決",
		"pinyin": "jiě jué",
		"english": "to resolve; solve",
		"hsk": 3
	},
	{
		"traditional": "借",
		"pinyin": "jiè",
		"english": "to lend",
		"hsk": 3
	},
	{
		"traditional": "經常",
		"pinyin": "jīng cháng",
		"english": "often; regularly",
		"hsk": 3
	},
	{
		"traditional": "經過",
		"pinyin": "jīng guò",
		"english": "pass through",
		"hsk": 3
	},
	{
		"traditional": "經理",
		"pinyin": "jīng lǐ",
		"english": "manager",
		"hsk": 3
	},
	{
		"traditional": "久",
		"pinyin": "jiǔ",
		"english": "long time",
		"hsk": 3
	},
	{
		"traditional": "舊",
		"pinyin": "jiù",
		"english": "old; former",
		"hsk": 3
	},
	{
		"traditional": "舉行",
		"pinyin": "jǔ xíng",
		"english": "to hold (a meeting; ceremony etc)",
		"hsk": 3
	},
	{
		"traditional": "句子",
		"pinyin": "jù zi",
		"english": "sentence",
		"hsk": 3
	},
	{
		"traditional": "決定",
		"pinyin": "jué dìng",
		"english": "decide",
		"hsk": 3
	},
	{
		"traditional": "渴",
		"pinyin": "kě",
		"english": "thirsty",
		"hsk": 3
	},
	{
		"traditional": "可愛",
		"pinyin": "kě ài",
		"english": "lovely; loveable",
		"hsk": 3
	},
	{
		"traditional": "刻",
		"pinyin": "kè",
		"english": "quarter (of an hour); to carve",
		"hsk": 3
	},
	{
		"traditional": "客人",
		"pinyin": "kè rén",
		"english": "guest",
		"hsk": 3
	},
	{
		"traditional": "空調",
		"pinyin": "kōng tiáo",
		"english": "air-conditioning",
		"hsk": 3
	},
	{
		"traditional": "口",
		"pinyin": "kǒu",
		"english": "mouth; [measure word for family members]",
		"hsk": 3
	},
	{
		"traditional": "哭",
		"pinyin": "kū",
		"english": "cry",
		"hsk": 3
	},
	{
		"traditional": "褲子",
		"pinyin": "kù zi",
		"english": "trousers",
		"hsk": 3
	},
	{
		"traditional": "筷子",
		"pinyin": "kuài zi",
		"english": "chopsticks",
		"hsk": 3
	},
	{
		"traditional": "藍",
		"pinyin": "lán",
		"english": "blue",
		"hsk": 3
	},
	{
		"traditional": "老",
		"pinyin": "lǎo",
		"english": "old; aged",
		"hsk": 3
	},
	{
		"traditional": "離開",
		"pinyin": "lí kāi",
		"english": "leave",
		"hsk": 3
	},
	{
		"traditional": "禮物",
		"pinyin": "lǐ wù",
		"english": "gift; present",
		"hsk": 3
	},
	{
		"traditional": "歷史",
		"pinyin": "lì shǐ",
		"english": "history",
		"hsk": 3
	},
	{
		"traditional": "臉",
		"pinyin": "liǎn",
		"english": "face",
		"hsk": 3
	},
	{
		"traditional": "練習",
		"pinyin": "liàn xí",
		"english": "to practise",
		"hsk": 3
	},
	{
		"traditional": "輛",
		"pinyin": "liàng",
		"english": "[measure word for vehicles]",
		"hsk": 3
	},
	{
		"traditional": "瞭解",
		"pinyin": "liǎo jiě",
		"english": "understand",
		"hsk": 3
	},
	{
		"traditional": "鄰居",
		"pinyin": "lín jū",
		"english": "neighbour",
		"hsk": 3
	},
	{
		"traditional": "樓",
		"pinyin": "lóu",
		"english": "multi-storied building",
		"hsk": 3
	},
	{
		"traditional": "綠",
		"pinyin": "lǜ",
		"english": "green",
		"hsk": 3
	},
	{
		"traditional": "馬",
		"pinyin": "mǎ",
		"english": "horse",
		"hsk": 3
	},
	{
		"traditional": "馬上",
		"pinyin": "mǎ shàng",
		"english": "immediately",
		"hsk": 3
	},
	{
		"traditional": "滿意",
		"pinyin": "mǎn yì",
		"english": "pleased; satisfied",
		"hsk": 3
	},
	{
		"traditional": "帽子",
		"pinyin": "mào zi",
		"english": "hat",
		"hsk": 3
	},
	{
		"traditional": "米",
		"pinyin": "mǐ",
		"english": "rice; metre",
		"hsk": 3
	},
	{
		"traditional": "麵包",
		"pinyin": "miàn bāo",
		"english": "bread",
		"hsk": 3
	},
	{
		"traditional": "麵條",
		"pinyin": "miàn tiáo",
		"english": "noodles",
		"hsk": 3
	},
	{
		"traditional": "明白",
		"pinyin": "míng bai",
		"english": "to understand",
		"hsk": 3
	},
	{
		"traditional": "拿",
		"pinyin": "ná",
		"english": "to take",
		"hsk": 3
	},
	{
		"traditional": "奶奶",
		"pinyin": "nǎi nai",
		"english": "grandmother [father's mother]",
		"hsk": 3
	},
	{
		"traditional": "南",
		"pinyin": "nán",
		"english": "south",
		"hsk": 3
	},
	{
		"traditional": "難",
		"pinyin": "nán",
		"english": "hard; difficult",
		"hsk": 3
	},
	{
		"traditional": "難過",
		"pinyin": "nán guò",
		"english": "have a hard time",
		"hsk": 3
	},
	{
		"traditional": "年級",
		"pinyin": "nián jí",
		"english": "(school) year/grade",
		"hsk": 3
	},
	{
		"traditional": "年輕",
		"pinyin": "nián qīng",
		"english": "young",
		"hsk": 3
	},
	{
		"traditional": "鳥",
		"pinyin": "niǎo",
		"english": "bird",
		"hsk": 3
	},
	{
		"traditional": "努力",
		"pinyin": "nǔ lì",
		"english": "hardworking",
		"hsk": 3
	},
	{
		"traditional": "爬山",
		"pinyin": "pá shān",
		"english": "to climb hills/mountains",
		"hsk": 3
	},
	{
		"traditional": "盤子",
		"pinyin": "pán zi",
		"english": "tray",
		"hsk": 3
	},
	{
		"traditional": "胖",
		"pinyin": "pàng",
		"english": "fat",
		"hsk": 3
	},
	{
		"traditional": "啤酒",
		"pinyin": "pí jiǔ",
		"english": "beer",
		"hsk": 3
	},
	{
		"traditional": "葡萄",
		"pinyin": "pú tao",
		"english": "grape",
		"hsk": 3
	},
	{
		"traditional": "普通話",
		"pinyin": "pǔ tōng huà",
		"english": "Mandarin (common language); Putonghua (common speech of the Chinese language); ordinary speech",
		"hsk": 3
	},
	{
		"traditional": "騎",
		"pinyin": "qí",
		"english": "to ride (a bicycle, horse)",
		"hsk": 3
	},
	{
		"traditional": "其實",
		"pinyin": "qí shí",
		"english": "in fact",
		"hsk": 3
	},
	{
		"traditional": "其他",
		"pinyin": "qí tā",
		"english": "other",
		"hsk": 3
	},
	{
		"traditional": "奇怪",
		"pinyin": "qí guài",
		"english": "strange",
		"hsk": 3
	},
	{
		"traditional": "鉛筆",
		"pinyin": "qiān bǐ",
		"english": "pencil",
		"hsk": 3
	},
	{
		"traditional": "清楚",
		"pinyin": "qīng chu",
		"english": "clear",
		"hsk": 3
	},
	{
		"traditional": "秋",
		"pinyin": "qiū",
		"english": "autumn",
		"hsk": 3
	},
	{
		"traditional": "裙子",
		"pinyin": "qún zi",
		"english": "skirt",
		"hsk": 3
	},
	{
		"traditional": "然後",
		"pinyin": "rán hòu",
		"english": "and then; after that",
		"hsk": 3
	},
	{
		"traditional": "熱情",
		"pinyin": "rè qíng",
		"english": "enthusiastic",
		"hsk": 3
	},
	{
		"traditional": "認為",
		"pinyin": "rèn wéi",
		"english": "to think that; consider",
		"hsk": 3
	},
	{
		"traditional": "認真",
		"pinyin": "rèn zhēn",
		"english": "earnest",
		"hsk": 3
	},
	{
		"traditional": "容易",
		"pinyin": "róng yì",
		"english": "easy",
		"hsk": 3
	},
	{
		"traditional": "如果",
		"pinyin": "rú guǒ",
		"english": "if",
		"hsk": 3
	},
	{
		"traditional": "傘",
		"pinyin": "sǎn",
		"english": "umbrella",
		"hsk": 3
	},
	{
		"traditional": "上網",
		"pinyin": "shàng wǎng",
		"english": "get on the internet",
		"hsk": 3
	},
	{
		"traditional": "生氣",
		"pinyin": "shēng qì",
		"english": "to get angry",
		"hsk": 3
	},
	{
		"traditional": "聲音",
		"pinyin": "shēng yīn",
		"english": "sound",
		"hsk": 3
	},
	{
		"traditional": "使",
		"pinyin": "shǐ",
		"english": "to make; to cause; to enable",
		"hsk": 3
	},
	{
		"traditional": "世界",
		"pinyin": "shì jiè",
		"english": "world",
		"hsk": 3
	},
	{
		"traditional": "瘦",
		"pinyin": "shòu",
		"english": "thin",
		"hsk": 3
	},
	{
		"traditional": "舒服",
		"pinyin": "shū fu",
		"english": "comfortable",
		"hsk": 3
	},
	{
		"traditional": "叔叔",
		"pinyin": "shū shu",
		"english": "uncle [father's younger brother]",
		"hsk": 3
	},
	{
		"traditional": "樹",
		"pinyin": "shù",
		"english": "tree",
		"hsk": 3
	},
	{
		"traditional": "數學",
		"pinyin": "shù xué",
		"english": "maths",
		"hsk": 3
	},
	{
		"traditional": "刷",
		"pinyin": "shuā",
		"english": "to brush; to paint; to daub",
		"hsk": 3
	},
	{
		"traditional": "雙",
		"pinyin": "shuāng",
		"english": "a pair of",
		"hsk": 3
	},
	{
		"traditional": "水平",
		"pinyin": "shuǐ píng",
		"english": "level",
		"hsk": 3
	},
	{
		"traditional": "司機",
		"pinyin": "sī jī",
		"english": "driver",
		"hsk": 3
	},
	{
		"traditional": "雖然",
		"pinyin": "suī rán",
		"english": "although; even though; even if",
		"hsk": 3
	},
	{
		"traditional": "太陽",
		"pinyin": "tài yáng",
		"english": "sun",
		"hsk": 3
	},
	{
		"traditional": "糖",
		"pinyin": "táng",
		"english": "sugar; sweets; candy",
		"hsk": 3
	},
	{
		"traditional": "特別",
		"pinyin": "tè bié",
		"english": "special; especially",
		"hsk": 3
	},
	{
		"traditional": "疼",
		"pinyin": "téng",
		"english": "pain",
		"hsk": 3
	},
	{
		"traditional": "提高",
		"pinyin": "tí gāo",
		"english": "raise",
		"hsk": 3
	},
	{
		"traditional": "體育",
		"pinyin": "tǐ yù",
		"english": "physical education",
		"hsk": 3
	},
	{
		"traditional": "甜",
		"pinyin": "tián",
		"english": "sweet",
		"hsk": 3
	},
	{
		"traditional": "條",
		"pinyin": "tiáo",
		"english": "[measure word for long pieces (hair, branch, trousers etc.)]",
		"hsk": 3
	},
	{
		"traditional": "同事",
		"pinyin": "tóng shì",
		"english": "colleague",
		"hsk": 3
	},
	{
		"traditional": "同意",
		"pinyin": "tóng yì",
		"english": "to agree",
		"hsk": 3
	},
	{
		"traditional": "頭髮",
		"pinyin": "tóu fa",
		"english": "hair",
		"hsk": 3
	},
	{
		"traditional": "突然",
		"pinyin": "tū rán",
		"english": "suddenly",
		"hsk": 3
	},
	{
		"traditional": "圖書館",
		"pinyin": "tú shū guǎn",
		"english": "library",
		"hsk": 3
	},
	{
		"traditional": "腿",
		"pinyin": "tuǐ",
		"english": "leg",
		"hsk": 3
	},
	{
		"traditional": "完成",
		"pinyin": "wán chéng",
		"english": "complete",
		"hsk": 3
	},
	{
		"traditional": "碗",
		"pinyin": "wǎn",
		"english": "a bowl of",
		"hsk": 3
	},
	{
		"traditional": "萬",
		"pinyin": "wàn",
		"english": "ten thousand",
		"hsk": 3
	},
	{
		"traditional": "忘記",
		"pinyin": "wàng jì",
		"english": "forget",
		"hsk": 3
	},
	{
		"traditional": "為了",
		"pinyin": "wèi le",
		"english": "in order to",
		"hsk": 3
	},
	{
		"traditional": "為什麼",
		"pinyin": "wèi shén me",
		"english": "why?",
		"hsk": 3
	},
	{
		"traditional": "位",
		"pinyin": "wèi",
		"english": "position",
		"hsk": 3
	},
	{
		"traditional": "文化",
		"pinyin": "wén huà",
		"english": "culture",
		"hsk": 3
	},
	{
		"traditional": "西",
		"pinyin": "xī",
		"english": "west",
		"hsk": 3
	},
	{
		"traditional": "習慣",
		"pinyin": "xí guàn",
		"english": "be used to",
		"hsk": 3
	},
	{
		"traditional": "洗手間",
		"pinyin": "xǐ shǒu jiān",
		"english": "toilets; washroom",
		"hsk": 3
	},
	{
		"traditional": "洗澡",
		"pinyin": "xǐ zǎo",
		"english": "have a shower; bath",
		"hsk": 3
	},
	{
		"traditional": "夏",
		"pinyin": "xià",
		"english": "summer",
		"hsk": 3
	},
	{
		"traditional": "先",
		"pinyin": "xiān",
		"english": "first",
		"hsk": 3
	},
	{
		"traditional": "香蕉",
		"pinyin": "xiāng jiāo",
		"english": "banana",
		"hsk": 3
	},
	{
		"traditional": "相同",
		"pinyin": "xiāng tóng",
		"english": "identical; same",
		"hsk": 3
	},
	{
		"traditional": "相信",
		"pinyin": "xiāng xìn",
		"english": "to believe",
		"hsk": 3
	},
	{
		"traditional": "像",
		"pinyin": "xiàng",
		"english": "likeness; resemble; look as if",
		"hsk": 3
	},
	{
		"traditional": "小心",
		"pinyin": "xiǎo xīn",
		"english": "take care",
		"hsk": 3
	},
	{
		"traditional": "校長",
		"pinyin": "xiào zhǎng",
		"english": "head teacher; principal",
		"hsk": 3
	},
	{
		"traditional": "鞋",
		"pinyin": "xié",
		"english": "shoe",
		"hsk": 3
	},
	{
		"traditional": "新聞",
		"pinyin": "xīn wén",
		"english": "news",
		"hsk": 3
	},
	{
		"traditional": "新鮮",
		"pinyin": "xīn xiān",
		"english": "fresh",
		"hsk": 3
	},
	{
		"traditional": "信",
		"pinyin": "xìn",
		"english": "letter; mail; to trust",
		"hsk": 3
	},
	{
		"traditional": "行李箱",
		"pinyin": "xíng li xiāng",
		"english": "trunk [luggage]",
		"hsk": 3
	},
	{
		"traditional": "興趣",
		"pinyin": "xìng qù",
		"english": "interest (desire to know about sth); interest (thing in which one is interested); hobby",
		"hsk": 3
	},
	{
		"traditional": "熊貓",
		"pinyin": "xióng māo",
		"english": "panda",
		"hsk": 3
	},
	{
		"traditional": "需要",
		"pinyin": "xū yào",
		"english": "need",
		"hsk": 3
	},
	{
		"traditional": "選擇",
		"pinyin": "xuǎn zé",
		"english": "choice",
		"hsk": 3
	},
	{
		"traditional": "眼鏡",
		"pinyin": "yǎn jìng",
		"english": "spectacles; eyeglasses",
		"hsk": 3
	},
	{
		"traditional": "要求",
		"pinyin": "yāo qiú",
		"english": "requirement",
		"hsk": 3
	},
	{
		"traditional": "爺爺",
		"pinyin": "yé ye",
		"english": "grandfather [father's father]",
		"hsk": 3
	},
	{
		"traditional": "一定",
		"pinyin": "yī dìng",
		"english": "definitely",
		"hsk": 3
	},
	{
		"traditional": "一共",
		"pinyin": "yī gòng",
		"english": "altogether",
		"hsk": 3
	},
	{
		"traditional": "一會兒",
		"pinyin": "yī huì r",
		"english": "a while; also pr. [yī huǐ r]",
		"hsk": 3
	},
	{
		"traditional": "一樣",
		"pinyin": "yī yàng",
		"english": "same; identical",
		"hsk": 3
	},
	{
		"traditional": "以後",
		"pinyin": "yǐ hòu",
		"english": "after; later; afterwards",
		"hsk": 3
	},
	{
		"traditional": "以前",
		"pinyin": "yǐ qián",
		"english": "before",
		"hsk": 3
	},
	{
		"traditional": "以為",
		"pinyin": "yǐ wéi",
		"english": "to believe; to think; to consider",
		"hsk": 3
	},
	{
		"traditional": "一般",
		"pinyin": "yī bān",
		"english": "ordinary",
		"hsk": 3
	},
	{
		"traditional": "一邊",
		"pinyin": "yī biān",
		"english": "on the one hand …",
		"hsk": 3
	},
	{
		"traditional": "一直",
		"pinyin": "yī zhí",
		"english": "straight on; always",
		"hsk": 3
	},
	{
		"traditional": "音樂",
		"pinyin": "yīn yuè",
		"english": "music",
		"hsk": 3
	},
	{
		"traditional": "銀行",
		"pinyin": "yín háng",
		"english": "bank",
		"hsk": 3
	},
	{
		"traditional": "應該",
		"pinyin": "yīng gāi",
		"english": "should",
		"hsk": 3
	},
	{
		"traditional": "影響",
		"pinyin": "yǐng xiǎng",
		"english": "influence; to affect",
		"hsk": 3
	},
	{
		"traditional": "用",
		"pinyin": "yòng",
		"english": "to use",
		"hsk": 3
	},
	{
		"traditional": "遊戲",
		"pinyin": "yóu xì",
		"english": "game",
		"hsk": 3
	},
	{
		"traditional": "有名",
		"pinyin": "yǒu míng",
		"english": "famous",
		"hsk": 3
	},
	{
		"traditional": "又",
		"pinyin": "yòu",
		"english": "again",
		"hsk": 3
	},
	{
		"traditional": "遇到",
		"pinyin": "yù dào",
		"english": "to meet",
		"hsk": 3
	},
	{
		"traditional": "願意",
		"pinyin": "yuàn yì",
		"english": "willing",
		"hsk": 3
	},
	{
		"traditional": "越",
		"pinyin": "yuè",
		"english": "the more...the more….",
		"hsk": 3
	},
	{
		"traditional": "月亮",
		"pinyin": "yuè liang",
		"english": "moon",
		"hsk": 3
	},
	{
		"traditional": "雲",
		"pinyin": "yún",
		"english": "cloud",
		"hsk": 3
	},
	{
		"traditional": "站",
		"pinyin": "zhàn",
		"english": "stand",
		"hsk": 3
	},
	{
		"traditional": "著急",
		"pinyin": "zháo jí",
		"english": "anxious",
		"hsk": 3
	},
	{
		"traditional": "照顧",
		"pinyin": "zhào gu",
		"english": "to look after",
		"hsk": 3
	},
	{
		"traditional": "照片",
		"pinyin": "zhào piàn",
		"english": "photograph",
		"hsk": 3
	},
	{
		"traditional": "照相機",
		"pinyin": "zhào xiàng jī",
		"english": "camera",
		"hsk": 3
	},
	{
		"traditional": "隻",
		"pinyin": "zhī",
		"english": "classifier for birds, animals, and one of a pair",
		"hsk": 3
	},
	{
		"traditional": "只",
		"pinyin": "zhǐ",
		"english": "only; merely",
		"hsk": 3
	},
	{
		"traditional": "終於",
		"pinyin": "zhōng yú",
		"english": "at last",
		"hsk": 3
	},
	{
		"traditional": "中間",
		"pinyin": "zhōng jiān",
		"english": "middle",
		"hsk": 3
	},
	{
		"traditional": "種",
		"pinyin": "zhǒng",
		"english": "kind; type; species",
		"hsk": 3
	},
	{
		"traditional": "重要",
		"pinyin": "zhòng yào",
		"english": "important",
		"hsk": 3
	},
	{
		"traditional": "週末",
		"pinyin": "zhōu mò",
		"english": "weekend",
		"hsk": 3
	},
	{
		"traditional": "主要",
		"pinyin": "zhǔ yào",
		"english": "mainly",
		"hsk": 3
	},
	{
		"traditional": "祝",
		"pinyin": "zhù",
		"english": "to wish; to express good wishes; to pray",
		"hsk": 3
	},
	{
		"traditional": "注意",
		"pinyin": "zhù yì",
		"english": "take note of",
		"hsk": 3
	},
	{
		"traditional": "字典",
		"pinyin": "zì diǎn",
		"english": "dictionary; character dictionary",
		"hsk": 3
	},
	{
		"traditional": "自己",
		"pinyin": "zì jǐ",
		"english": "self; oneself",
		"hsk": 3
	},
	{
		"traditional": "總是",
		"pinyin": "zǒng shì",
		"english": "always",
		"hsk": 3
	},
	{
		"traditional": "最近",
		"pinyin": "zuì jìn",
		"english": "recently",
		"hsk": 3
	},
	{
		"traditional": "作業",
		"pinyin": "zuò yè",
		"english": "homework",
		"hsk": 3
	},
	{
		"traditional": "作用",
		"pinyin": "zuò yòng",
		"english": "to act on; to affect; action",
		"hsk": 3
	}
];
