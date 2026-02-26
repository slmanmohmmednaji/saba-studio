import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./i18n/index.js";
import SiteLayout from "./layout/SiteLayout.jsx";

// استيراد صفحات الموقع باستخدام التحميل الكسول (Lazy Loading) لتحسين سرعة الفتح الأولية
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Game = lazy(() => import("./pages/Game.jsx"));
const Media = lazy(() => import("./pages/Media.jsx"));

// مكون بسيط يظهر أثناء تحميل الصفحة
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-night">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent"></div>
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <SiteLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </HashRouter>
  );
}
