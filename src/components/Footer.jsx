import { useTranslation } from "react-i18next";
import { FaGithub, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-night/80 backdrop-blur-xl overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/20" />

      <div className="container-x flex flex-col items-center justify-center gap-10 py-16 text-center">

        {/* Contact Section */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-xl font-semibold tracking-wide text-white/90">{t("footer.contactTitle")}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl text-muted transition-all duration-300 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl text-muted transition-all duration-300 hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.2)]"
              aria-label="Instagram"
            >
              <FaInstagram className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl text-muted transition-all duration-300 hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.2)]"
              aria-label="Facebook"
            >
              <FaFacebook className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Existing Icons (GitHub & Email) - Optional: Keep or Remove? Keeping for now as per "add" request */}
        <div className="flex gap-8">
          <a
            href="https://github.com/slmanmohmmednaji"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted/50 transition-all duration-300 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:engsalmanmoh7@gmail.com"
            className="flex items-center gap-2 text-sm font-medium text-muted/50 transition-all duration-300 hover:text-white"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <div className="text-sm tracking-wide text-muted/40">
            {t("footer.rights")}
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted/20">
            <span>Crafted with passion using</span>
            <span className="h-px w-4 bg-white/10"></span>
            <span className="text-cyan-500/30">React + Vite + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
