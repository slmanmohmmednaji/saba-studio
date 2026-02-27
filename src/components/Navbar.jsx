import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import logo from "../assets/logo/saba-logo.png";
import { cn } from "../utils/cn.js";

const linkBase = "text-sm font-semibold text-ink/80 hover:text-ink transition";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const linkClass = ({ isActive }) =>
    cn(
      "text-sm font-bold tracking-wide transition-colors duration-300",
      isActive ? "text-accent" : "text-white/80 hover:text-accent"
    );

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-0">
      <header className="mx-auto max-w-5xl rounded-full border border-white/10 bg-night/70 backdrop-blur-2xl shadow-2xl transition-all duration-500">
        <div className="flex h-14 md:h-16 items-center justify-between px-6 md:px-8">
          {/* Left Section: Logo */}
          <div className="flex flex-1 justify-start">
            <NavLink to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#8B4513]/20 border border-[#8B4513]/30 group-hover:scale-105 transition-transform overflow-hidden shadow-glow-accent/10">
                <img src={logo} alt="logo" className="h-7 w-7 object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-black tracking-tighter text-white">
                  <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">SABA</span>{" "}
                  <span className="text-white/90">STUDIO</span>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Center Section: Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            <a href="#" className={linkClass({ isActive: false })}>
              {t("nav.home")}
            </a>
            <a href="#about" className={linkClass({ isActive: false })}>
              {t("nav.about")}
            </a>
            <a href="#media" className={linkClass({ isActive: false })}>
              {t("nav.media")}
            </a>
            <a href="#game" className={linkClass({ isActive: false })}>
              {t("nav.game")}
            </a>
          </nav>

          {/* Right Section: Buttons */}
          <div className="flex flex-1 items-center justify-end gap-3 md:gap-4">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 text-2xl text-white md:hidden hover:text-accent transition-colors"
              aria-label="Toggle Navigation"
            >
              <FiMenu />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-50 flex justify-end md:hidden transition-[visibility] duration-300",
            isOpen ? "visible" : "invisible"
          )}
        >
          {/* Backdrop */}
          <div
            className={cn(
              "absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500",
              isOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={closeMenu}
          />

          {/* Drawer Content */}
          <div
            className={cn(
              "relative z-10 h-full w-full bg-night/95 backdrop-blur-3xl border-l border-white/5 shadow-2xl transition-transform duration-500 ease-out flex flex-col",
              isOpen ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"
            )}
          >
            {/* Background Texture matching identity */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
              <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#8B4513]/10 rounded-full blur-[100px]" />
            </div>

            {/* Menu Header - Elegant & Tidy */}
            <div className="flex h-20 items-center justify-between px-6 border-b border-white/5 bg-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                  <img src={logo} alt="logo" className="h-7 w-7 object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent/60 font-black">Saba</span>
                  <span className="text-lg font-black tracking-tighter text-white">STUDIO</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hover:bg-white/10 rounded-xl transition-colors">
                  <LanguageSwitcher />
                </div>
                <div className="h-6 w-px bg-white/10 mx-1" />
                <button
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center text-3xl text-white/40 hover:text-accent hover:bg-accent/10 rounded-xl transition-all active:scale-95"
                  aria-label="Close"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Menu Links - Centered & Pill-shaped */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-5 px-8 pb-10">
              {[
                { label: t("nav.home"), href: "#", isActive: true },
                { label: t("nav.about"), href: "#about" },
                { label: t("nav.media"), href: "#media" },
                { label: t("nav.game"), href: "#game" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "w-full max-w-[300px] py-4 rounded-full text-lg font-black transition-all duration-300 text-center tracking-wide border",
                    link.isActive
                      ? "bg-accent/20 text-accent border-accent/30 shadow-glow-accent/5 scale-[1.05]"
                      : "text-white/60 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10"
                  )}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom Footer Info (Subtle) */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-center">
              <div className="text-[10px] uppercase tracking-[0.4em] text-white/10 font-black">Saba Studio © 2026</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
