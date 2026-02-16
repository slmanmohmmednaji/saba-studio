import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // تنسيقات Tailwind الأساسية
import App from "./App.jsx"; // المكون الرئيسي للتطبيق

/**
 * نقطة انطلاق تطبيق React
 * تقوم بربط الكود بعنصر الـ HTML الذي يحمل المعرف "root"
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
