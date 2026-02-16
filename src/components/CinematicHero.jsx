import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPlay, FaMapMarkerAlt, FaArrowDown } from "react-icons/fa";
import gsap from "gsap";

export default function CinematicHero() {
  const { t } = useTranslation();
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-kicker", { y: 5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
      gsap.fromTo(".hero-title", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, delay: 0.1, ease: "power4.out" });
      gsap.fromTo(".hero-sub", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, delay: 0.25, ease: "power3.out" });
      gsap.fromTo(".hero-ctas", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.35, ease: "power3.out" });
      gsap.fromTo(".hero-location", { y: 5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power3.out" });
      gsap.fromTo(".hero-arrow", { y: -5, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: "bounce.out" });
      gsap.fromTo(".hero-orb", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, delay: 0.15, ease: "power3.out" });

      gsap.to(".hero-orb", {
        filter: "drop-shadow(0 0 60px rgba(21, 17, 21, 0.35))",
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(".hero-arrow", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden">
      <div className="container-x py-12 md:py-20 flex-1 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="kicker hero-kicker">{t("home.title")}</div>
          <h1 className="h1 hero-title mt-6 max-w-4xl mx-auto">
            {t("home.headline")}
            <span className="block text-accent mt-8 md:mt-10">{t("home.subtitle")}</span>
          </h1>
          <p className="p hero-sub mt-6 max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            {t("home.intro")}
          </p>
          <div className="hero-ctas mt-8 mb-8 md:mt-12 md:mb-12 flex flex-wrap justify-center gap-4 relative z-20">
            <Link className="btn-primary px-8 py-4 text-base group" to="/game">
              {t("common.downloadDemo")}
            </Link>
            <Link
              className="btn-ghost px-8 py-4 text-base group"
              to="/media"
              state={{ autoplay: true }}
            >
              <FaPlay className="text-xs transition-transform duration-300 group-hover:scale-125" />
              {t("common.watchGameplay")}
            </Link>
          </div>



          <div className="hero-location flex flex-col items-center gap-2 mt-auto text-muted/60">
            <FaMapMarkerAlt className="text-lg" />
            <span className="text-sm font-medium tracking-widest uppercase">Yemen</span>
          </div>

          <div className="hero-arrow mt-8 text-[#0088CC] text-2xl">
            <FaArrowDown />
          </div>
          <div className="relative mt-4 w-full max-w-4xl pointer-events-none">
            <div className="hero-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />
            <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-brand-500/30 blur-[80px]" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grain" />
    </section>
  );
}
