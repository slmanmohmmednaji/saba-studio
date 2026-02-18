import { useTranslation } from "react-i18next";
import SectionReveal from "../components/SectionReveal.jsx";
import TeamCarousel from "../components/TeamCarousel.jsx";
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
          <p className="text-center text-muted max-w-2xl mx-auto mb-16">{t("about.teamLead")}</p>
        </SectionReveal>

        {/* عرض أعضاء الفريق بشكل شريط متحرك (Carousel) */}
        <div className="max-w-7xl mx-auto space-y-20">

          {/* فريق الكتابة */}
          <div className="space-y-6 flex flex-col items-center">
            <h4 className="text-2xl font-bold text-accent border-b border-white/5 pb-2">
              {t("team.writer")}
            </h4>
            <TeamCarousel members={teamMembers.filter(m => m.role_en === "Writer")} />
          </div>

          {/* المصممون */}
          <div className="space-y-6 flex flex-col items-center">
            <h4 className="text-2xl font-bold text-accent border-b border-white/5 pb-2">
              {t("team.designers")}
            </h4>
            <TeamCarousel members={teamMembers.filter(m => m.role_en === "Designer")} />
          </div>

          {/* الرسامون */}
          <div className="space-y-6 flex flex-col items-center">
            <h4 className="text-2xl font-bold text-accent border-b border-white/5 pb-2">
              {t("team.artists")}
            </h4>
            <TeamCarousel members={teamMembers.filter(m => ["Character Artist", "Background Artist", "3D Artist"].includes(m.role_en))} />
          </div>

          {/* الفريق التقني */}
          <div className="space-y-6 flex flex-col items-center">
            <h4 className="text-2xl font-bold text-accent border-b border-white/5 pb-2">
              {t("team.tech")}
            </h4>
            <TeamCarousel members={teamMembers.filter(m => m.role_en === "Programmer")} />
          </div>

        </div>
      </div>
    </div>
  );
}
