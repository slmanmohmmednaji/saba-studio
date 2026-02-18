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
      <section className="relative z-10 py-16">
        <SectionReveal>
          <div className="container-x">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-brand-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative card overflow-hidden aspect-video flex items-center justify-center p-0">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/screenshots/shot-01.png`}
                    alt="The Invisible Soldier"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <div className="kicker text-accent mt-6">{t("nav.game")}</div>
                <h2 className="h1 text-4xl md:text-5xl">{t("game.title")}</h2>
                <p className="p text-lg leading-relaxed">
                  {t("home.intro")}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#game" className="btn-primary px-6 py-2">
                    {t("common.learnMore")}
                  </a>
                  <a href="#media" className="btn-ghost px-6 py-2">
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
