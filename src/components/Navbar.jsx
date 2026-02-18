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
      "text-base font-extrabold tracking-wide transition-colors duration-300",
      isActive ? "text-accent" : "text-white hover:text-accent"
    );

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-night/80 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between relative">
        {/* Left Section: Logo */}
        <div className="flex flex-1 justify-start">
          <NavLink to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <img src={logo} alt={t("home.title")} className="h-10 w-10 rounded-lg group-hover:scale-105 transition-transform" />
            <div className="leading-tight">
              <div className="text-xl md:text-2xl font-black tracking-tight text-white transition-colors">
                <span className="text-accent">SABA</span> STUDIO
              </div>
            </div>
          </NavLink>
        </div>

        {/* Center Section: Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
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
        <div className="flex flex-1 items-center justify-end gap-4">
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center p-2 text-3xl text-ink md:hidden hover:text-accent transition-colors"
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
            "relative z-10 h-full w-full bg-night border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out",
            isOpen ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"
          )}
        >
          {/* Menu Header - Matches New Reference Image (X and AR on left, Logo on right/center) */}
          <div className="flex h-20 items-center justify-between px-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <button
                onClick={closeMenu}
                className="flex items-center justify-center text-3xl text-ink/70 hover:text-accent transition-colors"
                aria-label="Close"
              >
                <FiX />
              </button>
              <LanguageSwitcher />
            </div>

            <div className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              <img src={logo} alt="logo" className="h-8 w-8 rounded-lg" />
              <div className="flex items-center">
                <span className="text-accent">SABA</span>
                <span className="ml-1">STUDIO</span>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <nav className="mt-12 flex flex-col items-start gap-8 px-8">
            <a href="#" className={linkClass({ isActive: false })} onClick={closeMenu}>
              {t("nav.home")}
            </a>
            <a href="#about" className={linkClass({ isActive: false })} onClick={closeMenu}>
              {t("nav.about")}
            </a>
            <a href="#media" className={linkClass({ isActive: false })} onClick={closeMenu}>
              {t("nav.media")}
            </a>
            <a href="#game" className={linkClass({ isActive: false })} onClick={closeMenu}>
              {t("nav.game")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
