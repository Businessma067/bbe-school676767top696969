/**
 * Edited languages (en/de/uk) use the checked dictionary.
 * Every other language is translated on the fly in the browser:
 * on-device Chrome Translator when the model is already installed,
 * otherwise a keyless Google translate request. Nothing is pre-generated.
 */

export const DICTIONARY_LANGS = ["en", "de", "uk"] as const;
export type DictionaryLang = (typeof DICTIONARY_LANGS)[number];

export type AutoLanguage = {
  code: string;
  label: string;
  short: string;
  /** BCP-47 tag for Chrome's on-device Translator. */
  chrome: string;
  /** Target code for the keyless translate endpoint. */
  google: string;
};

export const AUTO_LANGUAGES = [
  { code: "ru", label: "Русский", short: "RU", chrome: "ru", google: "ru" },
  { code: "pl", label: "Polski", short: "PL", chrome: "pl", google: "pl" },
  { code: "cs", label: "Čeština", short: "CS", chrome: "cs", google: "cs" },
  { code: "sk", label: "Slovenčina", short: "SK", chrome: "sk", google: "sk" },
  { code: "hu", label: "Magyar", short: "HU", chrome: "hu", google: "hu" },
  { code: "ro", label: "Română", short: "RO", chrome: "ro", google: "ro" },
  { code: "bg", label: "Български", short: "BG", chrome: "bg", google: "bg" },
  { code: "hr", label: "Hrvatski", short: "HR", chrome: "hr", google: "hr" },
  { code: "sr", label: "Српски", short: "SR", chrome: "sr", google: "sr" },
  { code: "bs", label: "Bosanski", short: "BS", chrome: "bs", google: "bs" },
  { code: "sl", label: "Slovenščina", short: "SL", chrome: "sl", google: "sl" },
  { code: "sq", label: "Shqip", short: "SQ", chrome: "sq", google: "sq" },
  { code: "mk", label: "Македонски", short: "MK", chrome: "mk", google: "mk" },
  { code: "el", label: "Ελληνικά", short: "EL", chrome: "el", google: "el" },
  { code: "tr", label: "Türkçe", short: "TR", chrome: "tr", google: "tr" },
  { code: "it", label: "Italiano", short: "IT", chrome: "it", google: "it" },
  { code: "es", label: "Español", short: "ES", chrome: "es", google: "es" },
  { code: "fr", label: "Français", short: "FR", chrome: "fr", google: "fr" },
  { code: "pt", label: "Português", short: "PT", chrome: "pt", google: "pt" },
  { code: "nl", label: "Nederlands", short: "NL", chrome: "nl", google: "nl" },
  { code: "sv", label: "Svenska", short: "SV", chrome: "sv", google: "sv" },
  { code: "da", label: "Dansk", short: "DA", chrome: "da", google: "da" },
  { code: "fi", label: "Suomi", short: "FI", chrome: "fi", google: "fi" },
  { code: "nb", label: "Norsk", short: "NB", chrome: "nb", google: "no" },
  { code: "lt", label: "Lietuvių", short: "LT", chrome: "lt", google: "lt" },
  { code: "lv", label: "Latviešu", short: "LV", chrome: "lv", google: "lv" },
  { code: "et", label: "Eesti", short: "ET", chrome: "et", google: "et" },
  { code: "ar", label: "العربية", short: "AR", chrome: "ar", google: "ar" },
  { code: "he", label: "עברית", short: "HE", chrome: "he", google: "he" },
  { code: "fa", label: "فارسی", short: "FA", chrome: "fa", google: "fa" },
  { code: "hi", label: "हिन्दी", short: "HI", chrome: "hi", google: "hi" },
  { code: "zh", label: "中文", short: "ZH", chrome: "zh-Hans", google: "zh-CN" },
  { code: "ja", label: "日本語", short: "JA", chrome: "ja", google: "ja" },
  { code: "ko", label: "한국어", short: "KO", chrome: "ko", google: "ko" },
  { code: "vi", label: "Tiếng Việt", short: "VI", chrome: "vi", google: "vi" },
  { code: "id", label: "Bahasa Indonesia", short: "ID", chrome: "id", google: "id" },
  { code: "th", label: "ไทย", short: "TH", chrome: "th", google: "th" },
  { code: "ka", label: "ქართული", short: "KA", chrome: "ka", google: "ka" },
  { code: "hy", label: "Հայերեն", short: "HY", chrome: "hy", google: "hy" },
  { code: "az", label: "Azərbaycan", short: "AZ", chrome: "az", google: "az" },
  { code: "kk", label: "Қазақ", short: "KK", chrome: "kk", google: "kk" },
  { code: "uz", label: "Oʻzbek", short: "UZ", chrome: "uz", google: "uz" },
  { code: "ms", label: "Bahasa Melayu", short: "MS", chrome: "ms", google: "ms" },
  { code: "tl", label: "Filipino", short: "TL", chrome: "fil", google: "tl" },
  { code: "bn", label: "বাংলা", short: "BN", chrome: "bn", google: "bn" },
  { code: "ur", label: "اردو", short: "UR", chrome: "ur", google: "ur" },
  { code: "sw", label: "Kiswahili", short: "SW", chrome: "sw", google: "sw" },
] as const satisfies readonly AutoLanguage[];

export type AutoLang = (typeof AUTO_LANGUAGES)[number]["code"];
export type Lang = DictionaryLang | AutoLang;

const AUTO_BY_CODE = new Map(AUTO_LANGUAGES.map((lang) => [lang.code, lang]));
const KNOWN = new Set<string>([...DICTIONARY_LANGS, ...AUTO_LANGUAGES.map((lang) => lang.code)]);

export function isDictionaryLang(lang: string | null | undefined): lang is "de" | "uk" {
  return lang === "de" || lang === "uk";
}

export function isAutoLang(lang: string | null | undefined): lang is AutoLang {
  return typeof lang === "string" && AUTO_BY_CODE.has(lang as AutoLang);
}

/** Scripts that read right to left. The page direction follows the chosen language. */
export const RTL_LANGS = new Set<Lang>(["ar", "he", "fa", "ur"]);

export function isKnownLang(lang: string | null | undefined): lang is Lang {
  return !!lang && KNOWN.has(lang);
}

export function getAutoLanguage(code: string): (typeof AUTO_LANGUAGES)[number] | undefined {
  return AUTO_BY_CODE.get(code as AutoLang);
}

export const LANGUAGES: { code: Lang; label: string; short: string; auto: boolean }[] = [
  { code: "en", label: "English", short: "EN", auto: false },
  { code: "de", label: "Deutsch", short: "DE", auto: false },
  { code: "uk", label: "Українська", short: "UA", auto: false },
  ...AUTO_LANGUAGES.map((lang) => ({
    code: lang.code,
    label: lang.label,
    short: lang.short,
    auto: true,
  })),
];
