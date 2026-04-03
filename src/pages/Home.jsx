import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CinematicHero from "../components/CinematicHero.jsx";
import SectionReveal from "../components/SectionReveal.jsx";
import About from "./About.jsx";
import Game from "./Game.jsx";
import Media from "./Media.jsx";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-0 pb-0">
      <CinematicHero />

      {/* Featured Game Section (Main Tab Content) */}
      <section className="relative z-10 py-16 lg:py-24">
        <SectionReveal>
          <div className="container-x">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">

              {/* Card Section: Character Portrait - Image Only */}
              <div className="order-2 relative w-full lg:w-5/12 flex justify-center group perspective">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>

                <div className="relative w-full max-w-[350px] sm:max-w-[400px] flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out z-10">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/character/musleh.png`}
                    alt="Character Logo"
                    className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_20px_50px_rgba(45,212,191,0.15)]"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x600/111827/2dd4bf?text=Musleh";
                    }}
                  />
                </div>
              </div>

              {/* Text Section - Beautifully Formatted */}
              <div className="order-1 w-full lg:w-6/12 space-y-6 flex flex-col justify-center text-center lg:text-start lg:rtl:text-right">
                <div className="flex justify-center lg:justify-start">
                  <div className="kicker text-teal-400 font-bold tracking-[0.2em] text-xs uppercase inline-block bg-teal-400/10 px-4 py-1.5 rounded-full border border-teal-400/20">
                    {t("nav.game")}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                    <span className="block mb-1 drop-shadow-md">{t("home.gameTitle")}</span>
                    <span className="block text-teal-400 opacity-90 drop-shadow-sm">{t("home.gameSubtitle")}</span>
                  </h2>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-lg mx-auto lg:mx-0 font-medium border-l-0 lg:border-l-2 lg:rtl:border-r-2 lg:rtl:border-l-0 border-teal-400/30 pl-0 lg:pl-4 lg:rtl:pr-4 lg:rtl:pl-0">
                  {t("home.intro")}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                  <a href="#game" className="bg-teal-500 hover:bg-teal-400 text-night font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95 text-sm uppercase tracking-wider text-center">
                    {t("common.meetMusleh")}
                  </a>
                  <a href="#media" className="bg-transparent hover:bg-white/5 text-white border-2 border-white/10 hover:border-teal-400/50 font-bold px-8 py-4 rounded-xl transition-all active:scale-95 text-sm uppercase tracking-wider text-center">
                    {t("nav.media")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10">
        <About />
      </section>

      {/* Media Section */}
      <section id="media" className="relative z-10 bg-night/50">
        <Media />
      </section>

      {/* Game Section */}
      <section id="game" className="relative z-10">
        <Game />
      </section>
    </div>
  );
}
