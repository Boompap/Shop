"use client";

import { useEffect, useState } from "react";

type Language = "el" | "en";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("el");

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  return (
    <div className="languageToggle" aria-label="Language">
      <button
        type="button"
        aria-pressed={language === "el"}
        data-active={language === "el" ? "true" : "false"}
        onClick={() => setLanguage("el")}
      >
        <img className="languageFlag" src="/rizos/flag-greece.png" alt="" />
        <span>EL</span>
      </button>
      <button
        type="button"
        aria-pressed={language === "en"}
        data-active={language === "en" ? "true" : "false"}
        onClick={() => setLanguage("en")}
      >
        <img className="languageFlag" src="/rizos/flag-uk.png" alt="" />
        <span>EN</span>
      </button>
    </div>
  );
}
