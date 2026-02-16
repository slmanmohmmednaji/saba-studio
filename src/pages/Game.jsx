import { useTranslation } from "react-i18next";
import SectionReveal from "../components/SectionReveal.jsx";
import { gameData } from "../data/gameData.js"; // استيراد بيانات اللعبة التقنية والفنية

/**
 * صفحة اللعبة (Game Page)
 * تعرض تفاصيل "الجندي الخفي" من حيث القصة، المميزات، والتقنيات المستخدمة
 */
export default function Game() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // استخراج البيانات بناءً على اللغة المختارة
  const features = isAr ? gameData.features_ar : gameData.features_en;
  const tech = isAr ? gameData.tech_ar : gameData.tech_en;

  return (
    <div className="container-x py-8 md:py-12">
      {/* عنوان الصفحة ووصف موجز */}
      <SectionReveal>
        <div className="kicker">GAME</div>
        <h2 className="h2 mt-3">{t("game.title")}</h2>
        <p className="p mt-2 max-w-2xl">{t("game.lead")}</p>
      </SectionReveal>

      {/* تفاصيل القصة وأزرار التحميل */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* صندوق القصة */}
        <SectionReveal direction="right" delay={0.2} distance={40}>
          <div className="card p-8 lg:col-span-2 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40 transition-all duration-500 h-full">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-4">{t("game.storyTitle")}</div>
            <p className="text-lg leading-relaxed text-ink/90 font-medium">{t("game.storyText")}</p>
          </div>
        </SectionReveal>

        {/* صندوق تحميل النسخة التجريبية (Demo) */}
        <SectionReveal direction="left" delay={0.4} distance={40}>
          <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-transparent border-brand-500/20 hover:border-brand-500/40 relative overflow-hidden group transition-all duration-700 h-full">
            <div className="absolute -inset-24 bg-brand-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-500/10 transition-colors duration-1000" />

            <div className="relative z-10">
              <div className="text-sm font-black uppercase tracking-[0.2em] text-muted mb-4">{t("common.downloadDemo")}</div>
              <p className="text-sm text-muted/80 leading-relaxed italic">
                {isAr ? "النسخة التجريبية ستكون متاحة قريباً للتحميل بشكل حصري." : "The demo version will be available for download soon exclusively."}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a className="btn-primary flex-1 px-8 py-3 animate-pulse-slow font-bold tracking-wider" href="#" onClick={(e) => e.preventDefault()}>Demo</a>
                <a className="btn-ghost flex-1 border-white/10 px-8 py-3 hover:border-accent/30 font-bold" href="#" onClick={(e) => e.preventDefault()}>Download</a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* قسم الشخصية الرئيسية */}
      <div className="mt-8 md:mt-12">
        <SectionReveal direction="up" delay={0.5}>
          <div className="card p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40 transition-all duration-500">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-8">
              {t("docs.sections.character.title")}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-ink/5 border border-transparent hover:border-accent/10 transition-all">
                  <span className="block text-[10px] text-muted uppercase tracking-[0.2em] font-black mb-1">{isAr ? "الاسم" : "NAME"}</span>
                  <p className="text-xl font-bold text-ink">{t("docs.sections.character.name")}</p>
                </div>
                <div className="p-4 rounded-xl bg-ink/5 border border-transparent hover:border-accent/10 transition-all">
                  <span className="block text-[10px] text-muted uppercase tracking-[0.2em] font-black mb-1">{isAr ? "العمر" : "AGE"}</span>
                  <p className="text-xl font-bold text-ink">{t("docs.sections.character.age")}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-ink/5 border border-transparent hover:border-accent/10 transition-all h-full">
                  <span className="block text-[10px] text-accent/70 uppercase tracking-[0.2em] font-black mb-2">{isAr ? "الدافع والصراع" : "MOTIVE & CONFLICT"}</span>
                  <p className="text-sm text-ink/80 leading-relaxed font-medium mb-4">{t("docs.sections.character.motive")}</p>
                  <p className="text-xs text-muted leading-relaxed italic border-t border-ink/5 pt-4">{t("docs.sections.character.conflict")}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* الخلفية السردية وعالم اللعبة */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <SectionReveal direction="right" delay={0.6}>
          <div className="card p-8 h-full bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40 transition-all duration-500">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-6">{t("docs.sections.narrative.title")}</div>
            <ul className="space-y-3">
              {t("docs.sections.narrative.points", { returnObjects: true }).map((point, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-xl bg-ink/5 text-sm text-ink/90 leading-relaxed border border-transparent hover:border-accent/10 transition-all">
                  <span className="text-accent font-black mt-0.5">0{i + 1}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>

        <SectionReveal direction="left" delay={0.7}>
          <div className="card p-8 h-full bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40 transition-all duration-500 flex flex-col">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-6">{t("docs.sections.world.title")}</div>
            <div className="flex-grow flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-ink/5 border border-accent/5">
                <p className="text-xl font-black text-ink mb-2">{t("docs.sections.world.style")}</p>
                <p className="text-sm text-muted leading-relaxed font-medium">{t("docs.sections.world.description")}</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-xs text-muted italic tracking-widest uppercase">
                {isAr ? "بيئة تفاعلية غامرة" : "Immersive Interactive Environment"}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* الرؤية والرسالة (من التوثيق الأصلي) */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <SectionReveal direction="up" delay={0.8}>
          <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-transparent border-brand-500/20 hover:border-brand-500/40">
            <div className="text-sm font-black text-brand-500 uppercase tracking-[0.2em] mb-4">{isAr ? "التوجه الفني" : "ART DIRECTION"}</div>
            <p className="text-sm text-ink/80 leading-relaxed">{t("docs.sections.art.description")}</p>
          </div>
        </SectionReveal>

        <SectionReveal direction="up" delay={0.9}>
          <div className="card p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-4">{isAr ? "التوجه الصوتي" : "AUDIO DIRECTION"}</div>
            <p className="text-sm text-ink/80 leading-relaxed">{t("docs.sections.audio.description")}</p>
          </div>
        </SectionReveal>
      </div>

      {/* تفاصيل اللعب والميكانيكيات */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {['gameplay', 'mechanics', 'themes'].map((key, i) => (
          <SectionReveal key={key} direction="up" delay={1.0 + (i * 0.1)}>
            <div className="card p-8 h-full bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40 transition-all duration-500">
              <div className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-6">{t(`docs.sections.${key}.title`)}</div>
              <ul className="space-y-3">
                {t(`docs.sections.${key}.items`, { returnObjects: true }).map((item, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-ink/5 text-xs text-ink/90 font-bold border border-transparent hover:border-accent/10 transition-all">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* شبكة المميزات والتقنيات الأساسية */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 text-left rtl:text-right">
        {/* قائمة المميزات */}
        <SectionReveal direction="right" delay={1.2}>
          <div className="card p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-8">{t("game.featuresTitle")}</div>
            <div className="grid grid-cols-1 gap-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-ink/5 border border-transparent hover:border-accent/20 transition-all">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm font-bold text-ink">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* قائمة التقنيات */}
        <SectionReveal direction="left" delay={1.3}>
          <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-transparent border-brand-500/20 hover:border-brand-500/40">
            <div className="text-sm font-black text-brand-500 uppercase tracking-[0.2em] mb-8">{t("game.techTitle")}</div>
            <div className="grid grid-cols-2 gap-3">
              {tech.map((x, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-xs font-black text-brand-500/50">#</span>
                  <span className="text-xs font-black text-ink/80">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* الجمهور المستهدف ونقاط التميز */}
      <div className="mt-8 md:mt-12 mb-12 md:mb-20">
        <SectionReveal direction="up" delay={1.4}>
          <div className="card p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-8 font-ar">{t("docs.sections.audience.title")}</div>
            <div className="grid grid-cols-1 gap-4">
              {t("docs.sections.audience.items", { returnObjects: true }).map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-ink/5 border border-transparent hover:border-accent/20 transition-all flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <span className="text-xs font-black tracking-tighter">0{i + 1}</span>
                  </div>
                  <span className="text-sm font-bold text-ink/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal direction="up" delay={1.5}>
          <div className="card p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40 h-full flex flex-col">
            <div className="text-sm font-black text-accent uppercase tracking-[0.2em] mb-8">{t("docs.sections.usp.title")}</div>
            <div className="space-y-4 flex-grow">
              {t("docs.sections.usp.items", { returnObjects: true }).map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <span className="text-xl font-black">★</span>
                  </div>
                  <span className="text-md font-extrabold text-ink group-hover:text-accent transition-colors">{item}</span>
                </div>
              ))}
              <div className="mt-8 p-6 rounded-3xl bg-accent/5 border border-accent/10 flex flex-col items-center justify-center text-center">
                <div className="text-[10px] font-black text-accent/50 uppercase tracking-[0.4em] mb-2">{t("docs.sections.progression.title")}</div>
                <p className="text-sm font-bold text-ink/80 italic leading-relaxed">
                  "{t("docs.sections.progression.description")}"
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
