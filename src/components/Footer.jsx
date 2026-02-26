import { useTranslation } from "react-i18next";
import { FaGithub, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo/saba-logo.png";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const socialLinkClass = "group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-muted transition-all duration-500 hover:border-accent/40 hover:bg-accent hover:text-night hover:scale-110 shadow-lg";

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-night overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-black" />

      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & About */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#8B4513]/20 border border-[#8B4513]/30 shadow-glow-accent/10">
                <img src={logo} alt="Saba Studio" className="h-8 w-8 object-contain" />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tighter">
                <span className="text-accent">SABA</span> STUDIO
              </h3>
            </div>
            <p className="text-base leading-relaxed text-ink/60 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/message/KSFHHMHN2XUHL1" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/eng.salman.m97?igsh=YmV1NGF0emhqMzU0" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com/channel/UCFXbXkW1aBFdA0GzYtwfX6g?si=6bxB0tBf5pl2rvYQ" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="YouTube"><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/salman-mohammed-naji-qaid-al-magedi-8a8902339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest border-b border-accent/20 pb-4 inline-block">
              {t("footer.quickLinks")}
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { name: t("nav.home"), href: "#" },
                { name: t("nav.about"), href: "#about" },
                { name: t("nav.media"), href: "#media" },
                { name: t("nav.game"), href: "#game" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="text-ink/50 hover:text-accent transition-colors flex items-center gap-3 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/20 group-hover:bg-accent group-hover:scale-150 transition-all" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest border-b border-accent/20 pb-4 inline-block">
              {t("footer.contactTitle")}
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <span className="block text-xs text-muted/50 uppercase font-black mb-1">{isAr ? "الموقع" : "Location"}</span>
                  <span className="text-ink/80 font-medium">{t("footer.location")}</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <span className="block text-xs text-muted/50 uppercase font-black mb-1">{isAr ? "الهاتف" : "Phone"}</span>
                  <span className="text-ink/80 font-medium tracking-wider" dir="ltr">{t("footer.phone")}</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <span className="block text-xs text-muted/50 uppercase font-black mb-1">{isAr ? "البريد" : "Email"}</span>
                  <span className="text-ink/80 font-medium">{t("footer.email")}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-ink/40 font-medium text-center md:text-left">
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-black text-muted/20">
            <span>Crafted By</span>
            <div className="h-px w-8 bg-white/5" />
            <span className="text-accent underline decoration-accent/20 underline-offset-8">Saba Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
