import "./i18n"; // ← this loads your i18n config and it should be the first import

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OpenWebUIPage from "./App";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { HashRouter, Routes, Route } from "react-router-dom"; // switched to HashRouter so GH pages work

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<OpenWebUIPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
