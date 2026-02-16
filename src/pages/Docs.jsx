import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaUser, FaBook, FaGlobe, FaGamepad,
  FaCogs, FaChartLine, FaTheaterMasks,
  FaPalette, FaVolumeUp, FaUsers, FaStar
} from "react-icons/fa";
import SectionReveal from "../components/SectionReveal.jsx";

/**
 * صفحة التوثيق المطورة (Premium Cinematic Documentation)
 * تصميم غامر يعتمد على التمرير الرأسي والبطاقات السينمائية
 */
const sectionIcons = {
  character: FaUser,
  narrative: FaBook,
  world: FaGlobe,
  gameplay: FaGamepad,
  mechanics: FaCogs,
  progression: FaChartLine,
  themes: FaTheaterMasks,
  art: FaPalette,
  audio: FaVolumeUp,
  audience: FaUsers,
  usp: FaStar
};

export default function Docs() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // تصفية الأقسام المطلوبة فقط (حذف المعلومات العامة والفكرة الأساسية)
  const sections = Object.keys(sectionIcons);

  return (
    <div className="min-h-screen bg-ink text-white pt-24 md:pt-32 pb-16 md:pb-24 overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="container-x relative z-10">
        {/* Cinematic Header */}
        <SectionReveal>
          <div className="text-center mb-12 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="kicker mx-auto !text-accent opacity-80"
            >
              {isAr ? "دليل الجندي" : "SOLDIER'S GUIDE"}
            </motion.div>
            <h1 className="h1 mt-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-tight">
              {t("docs.title")}
            </h1>
            <p className="p mt-6 max-w-3xl mx-auto text-xl opacity-60 leading-relaxed font-light">
              {t("docs.lead")}
            </p>
          </div>
        </SectionReveal>

        {/* Documentation Sections - Vertical Immersive Stack */}
        <div className="space-y-12 md:space-y-20">
          {sections.map((key, index) => {
            const Icon = sectionIcons[key];
            const isCharacter = key === 'character';

            return (
              <SectionReveal key={key} direction={index % 2 === 0 ? "right" : "left"}>
                <div className={`
                  group relative overflow-hidden rounded-[2.5rem] 
                  border border-white/10 bg-white/5 backdrop-blur-3xl
                  transition-all duration-700 hover:border-accent/40
                  shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]
                  ${isCharacter ? 'p-10 md:p-16' : 'p-8 md:p-12'}
                `}>
                  {/* Decorative Glow */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 md:items-center mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent text-3xl shadow-inner border border-white/5">
                        <Icon />
                      </div>
                      <div>
                        <h2 className="h2 !mb-0 text-white group-hover:text-accent transition-colors">
                          {t(`docs.sections.${key}.title`)}
                        </h2>
                        {t(`docs.sections.${key}.description`, { defaultValue: "" }) && (
                          <p className="text-accent/60 mt-2 font-medium tracking-wide uppercase text-sm">
                            {t(`docs.sections.${key}.description`)}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Detailed Rendering for Specific Sections */}
                      {isCharacter && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 bg-white/5 p-8 rounded-3xl border border-white/5">
                          <div className="space-y-2">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-black">{isAr ? "الاسم" : "NAME"}</span>
                            <p className="text-2xl font-bold text-white">{t("docs.sections.character.name")}</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-black">{isAr ? "العمر" : "AGE"}</span>
                            <p className="text-2xl font-bold text-white">{t("docs.sections.character.age")}</p>
                          </div>
                          <div className="col-span-full space-y-2">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-black">{isAr ? "الدافع" : "MOTIVE"}</span>
                            <p className="text-lg text-white/80 leading-relaxed italic">{t("docs.sections.character.motive")}</p>
                          </div>
                          <div className="col-span-full space-y-2">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-black">{isAr ? "الصراع الداخلي" : "INTERNAL CONFLICT"}</span>
                            <p className="text-lg text-white/80 leading-relaxed">{t("docs.sections.character.conflict")}</p>
                          </div>
                        </div>
                      )}

                      {/* Narrative Points */}
                      {key === 'narrative' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {(t("docs.sections.narrative.points", { returnObjects: true }) || []).map((point, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-accent/5 hover:border-accent/20 transition-all group/point">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0 group-hover/point:scale-150 transition-transform" />
                              <p className="text-white/70 leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* World Design */}
                      {key === 'world' && (
                        <div className="mt-4 space-y-4">
                          <p className="text-2xl md:text-3xl font-light text-white leading-snug">
                            {t("docs.sections.world.style")}
                          </p>
                          <div className="h-px w-20 bg-accent/40" />
                          <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
                            {t("docs.sections.world.description")}
                          </p>
                        </div>
                      )}

                      {/* List Sections */}
                      {['gameplay', 'mechanics', 'themes', 'audience', 'usp'].includes(key) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {(t(`docs.sections.${key}.items`, { returnObjects: true }) || []).map((item, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ y: -5 }}
                              className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white/80 hover:text-white transition-all flex items-center gap-4"
                            >
                              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-black text-xs">
                                {i + 1}
                              </div>
                              <span className="font-medium text-sm md:text-base">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* General Descriptive Sections */}
                      {['progression', 'art', 'audio'].includes(key) && (
                        <div className="relative p-1 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl">
                          <div className="bg-ink p-8 rounded-[1.4rem] border border-white/5">
                            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                              {t(`docs.sections.${key}.description`)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Footer Note */}
        <SectionReveal>
          <div className="mt-16 md:mt-32 text-center p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
            <h3 className="h3 text-white mb-4">
              {isAr ? "هل أنت مستعد لمواجهة المجهول؟" : "Ready to face the unknown?"}
            </h3>
            <p className="text-white/40 max-w-xl mx-auto">
              {isAr
                ? "انطلق في رحلة مصلح النفسية واكتشف الجوانب الخفية في مدينة تحاول التعافي."
                : "Embark on Muslih's psychological journey and discover the hidden layers of a city trying to recover."}
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
