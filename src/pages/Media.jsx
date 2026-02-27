import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionReveal from "../components/SectionReveal.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { projectsData } from "../data/projectsData.js";

/**
 * صفحة المعرض المحدثة (Premium Media Page)
 * تعرض فيديو أسلوب اللعب وشبكة "تطوير الألعاب" بتصميم مطابق للمرجعية
 */
export default function Media() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const videoRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [src, setSrc] = useState(projectsData[0].image);

    return (
        <div className="container-x py-10 md:py-20 flex flex-col gap-12 md:gap-24">
            {/* Header Section */}
            <SectionReveal direction="down">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="kicker text-accent">{t("nav.media")}</div>
                    <h2 className="h1 text-4xl md:text-6xl font-black">{t("media.title")}</h2>
                    <p className="p max-w-2xl text-lg text-white/70">
                        {t("media.lead")}
                    </p>
                </div>
            </SectionReveal>

            {/* Video Section */}
            <SectionReveal direction="up">
                <div className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-white/50">
                            {t("media.videoTitle")}
                        </h3>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="card overflow-hidden p-2 md:p-4 mx-auto max-w-5xl shadow-2xl transition-all duration-500 hover:shadow-accent/5">
                        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black relative group">
                            <video
                                ref={videoRef}
                                className="h-full w-full"
                                controls
                                preload="metadata"
                                src={`${import.meta.env.BASE_URL}assets/video/gameplay.mp4`}
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                            <div className="absolute inset-0 z-[-1] flex items-center justify-center text-white/20">
                                <span className="text-4xl">🎬</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionReveal>

            {/* Game Development Grid Section (Matching Screenshot) */}
            <div className="space-y-16">
                <SectionReveal direction="up">
                    <div className="text-center">
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                            {t("media.projectsTitle")}
                        </h3>
                    </div>
                </SectionReveal>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, i) => (
                        <SectionReveal key={project.id} delay={i * 0.1}>
                            <div
                                className="group cursor-pointer flex flex-col items-center"
                                onClick={() => {
                                    setSrc(project.image);
                                    setOpen(true);
                                }}
                            >
                                {/* Image Container - Rounded like screenshot */}
                                <div className="w-full aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-[#111827] border border-[#1F2937] transition-all duration-500 group-hover:scale-[1.03] group-hover:border-accent/50 shadow-2xl">
                                    <img
                                        src={project.image}
                                        alt={isAr ? project.title_ar : project.title_en}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Info Area - Centered below image */}
                                <div className="mt-8 text-center space-y-2 px-4 transition-transform duration-500 group-hover:translate-y-[-5px]">
                                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors">
                                        {isAr ? project.title_ar : project.title_en}
                                    </h4>
                                    <p className="text-sm md:text-base text-white/40 font-medium tracking-wide">
                                        {isAr ? project.desc_ar : project.desc_en}
                                    </p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox open={open} src={src} onClose={() => setOpen(false)} />
        </div>
    );
}
