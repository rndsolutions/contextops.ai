import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const languages = [
  { code: "en", countryCode: "gb", alt: "English" },
  { code: "bg", countryCode: "bg", alt: "Български" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex space-x-3 items-center px-5 py-5 sm:py-0">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`transition hover:opacity-100 ${
            currentLang === lang.code ? "opacity-100" : "opacity-30"
          }`}
          aria-label={`Switch language to ${lang.alt}`}
        >
          <Flag
            code={lang.countryCode.toUpperCase()}
            style={{ width: "30px",  borderRadius: "0px", border: "1px solid black" }}
            title={lang.alt}
          />
        </button>
      ))}
    </div>
  );
}
