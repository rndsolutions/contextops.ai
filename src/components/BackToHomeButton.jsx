import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BackToHomeButton() {
  const { t } = useTranslation();
  return (
    <Link
      to="/"
      className="flex items-center text-sm text-blue-600 hover:underline mb-6"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {t("buttons.backToHome")}
    </Link>
  );
}
