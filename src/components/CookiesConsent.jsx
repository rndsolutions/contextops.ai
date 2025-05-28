import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CookiesConsent() {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 px-2 sm:px-6 z-50">
      <div className="max-w-4xl mx-auto rounded-lg bg-indigo-600 p-3 sm:p-4 shadow-lg text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Icon and message */}
          <div className="flex items-start sm:items-center gap-3 flex-1">
            <div className="p-2 rounded-lg bg-indigo-800 shrink-0">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m2 0a2 2 0 110 4H7a2 2 0 110-4h10zm0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v6z"
                />
              </svg>
            </div>
            <p className="text-sm sm:text-base leading-snug">
              <span className="block sm:hidden">
                {t("cookiesConsent.message")}
              </span>
              <span className="hidden sm:block">
                {t("cookiesConsent.message")}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-3 flex-shrink-0">
            <a
              href="#/privacy"
              className="px-4 py-2 bg-white text-indigo-600 text-sm font-medium rounded-md hover:bg-indigo-50 whitespace-nowrap"
            >
              {t("buttons.learnMore")}
            </a>
            <button
              type="button"
              className="p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Dismiss"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
