import { defaultLang, ui } from "./ui";

export function useTranslations(lang: string) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang as keyof typeof ui][key] || ui[defaultLang][key];
  };
}
