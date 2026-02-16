import { useTranslation } from "react-i18next";
import SectionReveal from "../components/SectionReveal.jsx";
import { teamMembers } from "../data/teamMembers.js"; // بيانات أعضاء الفريق

/**
 * صفحة "من نحن" (About Page)
 * تعرض رؤية ورسالة الاستوديو بالإضافة إلى بطاقات التعريف بأعضاء الفريق
 */
export default function About() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar"; // التحقق مما إذا كانت اللغة الحالية هي العربية

  return (
    <div className="container-x py-8 md:py-16">
      {/* قسم المقدمة */}
      <SectionReveal>
        <div className="kicker">SABA STUDIO</div>
        <h2 className="h2 mt-3 text-accent">{t("about.title")}</h2>
        <p className="p mt-4 max-w-3xl text-lg leading-relaxed text-ink/90">
          {t("about.lead")}
        </p>
      </SectionReveal>

      {/* الرؤية والرسالة - عرض جنباً إلى جنب */}
      <div className="mt-8 md:mt-16 grid gap-8 md:grid-cols-2">
        <SectionReveal delay={0.2} direction="right">
          <div className="card h-full p-8 border-brand-500/30 bg-gradient-to-br from-white/5 to-transparent hover:border-brand-500/60 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">{t("about.visionTitle")}</h3>
            <p className="text-muted leading-relaxed">
              {t("about.visionText")}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4} direction="left">
          <div className="card h-full p-8 border-accent/30 bg-gradient-to-br from-white/5 to-transparent hover:border-accent/60 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">{t("about.missionTitle")}</h3>
            <p className="text-muted leading-relaxed">
              {t("about.missionText")}
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* قسم فريق العمل */}
      <div className="mt-12 md:mt-24">
        <SectionReveal>
          <h3 className="h3 text-center mb-2">{t("about.teamTitle")}</h3>
          <p className="text-center text-muted max-w-2xl mx-auto mb-10">{t("about.teamLead")}</p>
        </SectionReveal>

        {/* عرض أعضاء الفريق بشكل شبكي (Grid) */}
        <div className="mx-auto grid max-w-6xl gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {teamMembers.map((m, i) => (
            <SectionReveal key={m.id} delay={0.1 * (i % 3)} direction="up" distance={20}>
              <div className="group card overflow-hidden border-white/5 bg-night/50 hover:border-accent/40 transition-all duration-500 hover:shadow-glow-accent hover:-translate-y-2">
                <div className="relative aspect-[3/4] w-full bg-white/5 overflow-hidden">
                  {/* أيقونة احتياطية تظهر خلف الصورة */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted z-0">
                    <span className="text-4xl opacity-20 group-hover:scale-150 transition-transform duration-700">★</span>
                  </div>
                  <img
                    src={m.img}
                    alt={isAr ? m.name_ar : m.name_en}
                    className="relative z-10 h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* تدرج ظلي لتحسين قراءة المعلومات فوق الصورة */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-night via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 z-25 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
                <div className="relative z-30 -mt-16 p-5 bg-gradient-to-t from-night to-transparent">
                  <div className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {isAr ? m.name_ar : m.name_en}
                  </div>
                  <div className="mt-1 text-sm text-muted font-medium">
                    {isAr ? m.role_ar : m.role_en}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
