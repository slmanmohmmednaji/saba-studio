import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n/index.js";
import SiteLayout from "./layout/SiteLayout.jsx";

// استيراد صفحات الموقع المختلفة
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Game from "./pages/Game.jsx";
import Media from "./pages/Media.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
