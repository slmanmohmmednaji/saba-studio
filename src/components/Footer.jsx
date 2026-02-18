import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo/saba-logo.png";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const socialLinkClass = "group relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xl text-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent";

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#0B0F14] overflow-hidden">
      {/* Decorative gradient overlay matching the reference image's warm tone */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent/5 via-transparent to-brand-500/5" />

      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right rtl:text-right ltr:text-left">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6 order-1 md:order-3">
            <div className="flex items-center gap-4 justify-end">
              <div className="text-right">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  <span className="text-accent">SABA</span> STUDIO
                </h3>
              </div>
              <img src={logo} alt="Saba Studio" className="h-12 w-12 rounded-xl border border-white/10 shadow-glow-accent/20" />
            </div>
            <p className="text-sm leading-relaxed text-ink/70 max-w-sm ml-auto">
              {t("footer.description")}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 order-2 items-center md:items-center">
            <h4 className="text-lg font-bold text-white relative inline-block pb-2 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-12 after:bg-accent">
              {t("footer.quickLinks")}
            </h4>
            <nav className="flex flex-col gap-3 items-center">
              <a href="#" className="text-muted/70 hover:text-accent transition-colors flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent/40" />
                {t("nav.home")}
              </a>
              <a href="#about" className="text-muted/70 hover:text-accent transition-colors flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent/40" />
                {t("nav.about")}
              </a>
              <a href="#media" className="text-muted/70 hover:text-accent transition-colors flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent/40" />
                {t("nav.media")}
              </a>
              <a href="#game" className="text-muted/70 hover:text-accent transition-colors flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent/40" />
                {t("nav.game")}
              </a>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-6 order-3 md:order-1 items-end md:items-start text-right md:text-left lg:text-right">
            <h4 className="text-lg font-bold text-white relative inline-block pb-2 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-12 after:bg-accent">
              {t("footer.contactTitle")}
            </h4>
            <div className="flex flex-col gap-4 items-end">
              <div className="flex items-center gap-3 order-1">
                <span className="text-ink/80 text-sm font-medium">{t("footer.location")}</span>
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FaMapMarkerAlt size={14} />
                </div>
              </div>
              <div className="flex items-center gap-3 order-2">
                <span className="text-ink/80 text-sm font-medium" dir="ltr">{t("footer.phone")}</span>
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FaPhoneAlt size={14} />
                </div>
              </div>
              <div className="flex items-center gap-3 order-3">
                <span className="text-ink/80 text-sm font-medium">{t("footer.email")}</span>
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FaEnvelope size={14} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Social Links */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-muted/50">{t("footer.followUs")}</span>
            <div className="flex gap-3">
              <a href="https://wa.me/message/KSFHHMHN2XUHL1" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/eng.salman.m97?igsh=YmV1NGF0emhqMzU0" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com/channel/UCFXbXkW1aBFdA0GzYtwfX6g?si=6bxB0tBf5pl2rvYQ" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="YouTube"><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/salman-mohammed-naji-qaid-al-magedi-8a8902339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Copyright & Tech Stack */}
          <div className="flex flex-col items-center md:items-end gap-2 text-right">
            <div className="text-sm font-bold text-muted/60">
              {t("footer.rights")}
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted/30">
              <span>Digital Experiences Crafted by</span>
              <span className="h-px w-4 bg-white/10"></span>
              <span className="text-accent underline decoration-accent/20">Saba Studio</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
