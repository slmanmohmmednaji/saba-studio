import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import SectionReveal from "../components/SectionReveal.jsx";
import Lightbox from "../components/Lightbox.jsx"; // مكون عرض الصور بحجم كبير

// قائمة الصور المتاحة في المعرض
// ... (shots remain the same)
const shots = [
    "/src/assets/screenshots/shot-01.png",
    "/src/assets/screenshots/shot-02.png",
    "/src/assets/screenshots/shot-03.png",
    "/src/assets/screenshots/shot-04.png",
    "/src/assets/screenshots/shot-05.png",
    "/src/assets/screenshots/shot-06.png"
];

/**
 * صفحة المعرض (Media Page)
 * تعرض فيديو أسلوب اللعب وشبكة من صور اللعبة مع إمكانية تكبيرها
 */
export default function Media() {
    const { t } = useTranslation();
    const location = useLocation();
    const videoRef = useRef(null);
    const [open, setOpen] = useState(false); // التحكم في فتح/إغلاق نافذة عرض الصور
    const [src, setSrc] = useState(shots[0]); // الصورة المختارة حالياً

    useEffect(() => {
        // إذا تم الانتقال إلى هذه الصفحة مع طلب التشغيل التلقائي
        if (location.state?.autoplay && videoRef.current) {
            // انتظار بسيط لضمان تحميل المتصفح للمشغل وتفاعله
            const timer = setTimeout(() => {
                videoRef.current.play().catch(err => {
                    console.log("Autoplay was prevented by browser:", err);
                    // في حال منع المتصفح التشغيل (بسبب سياسات الأمان)، يمكن جعله صامتاً للبدء
                    videoRef.current.muted = true;
                    videoRef.current.play();
                });
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [location.state]);

    return (
        <div className="container-x py-6 md:py-12 flex flex-col gap-10 md:gap-24">
            {/* رأس الصفحة */}
            <SectionReveal direction="down" distance={10}>
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="kicker text-accent">{t("nav.media")}</div>
                    <h2 className="h1 text-4xl md:text-6xl">{t("media.title")}</h2>
                    <p className="p max-w-2xl text-lg opacity-80">
                        {t("media.lead")}
                    </p>
                </div>
            </SectionReveal>

            {/* قسم الفيديو (Gameplay Trailer) */}
            <SectionReveal direction="up" duration={1.2}>
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <h3 className="h2 text-2xl uppercase tracking-widest opacity-50">{t("media.videoTitle")}</h3>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="card overflow-hidden p-4 mx-auto max-w-5xl hover:shadow-glow-accent/10 transition-shadow duration-700">
                        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black relative group">
                            {/* مشغل الفيديو */}
                            <video
                                ref={videoRef}
                                className="h-full w-full"
                                controls
                                preload="metadata"
                                src="/src/assets/video/gameplay.mp4"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                            {/* رسالة بديلة في حال عدم توفر الفيديو */}
                            <div className="flex h-full w-full items-center justify-center text-muted bg-surface/20">
                                <div className="text-center">
                                    <div className="text-4xl mb-4 opacity-20 group-hover:scale-110 transition-transform duration-500">🎬</div>
                                    <p className="text-sm italic">Video content coming soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionReveal>

            {/* قسم معرض الصور (Screenshot Gallery) */}
            <div className="space-y-8">
                <SectionReveal direction="up" delay={0.2}>
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <h3 className="h2 text-2xl uppercase tracking-widest opacity-50">{t("media.galleryTitle")}</h3>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>
                </SectionReveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {shots.map((s, i) => (
                        <SectionReveal key={s} delay={0.05 * (i % 3)} direction="up" distance={10}>
                            <button
                                className="card overflow-hidden text-left transition hover:translate-y-[-4px] hover:shadow-glow-accent group relative block w-full"
                                onClick={() => {
                                    setSrc(s);  // تحديد الصورة
                                    setOpen(true); // فتح النافذة
                                }}
                            >
                                <div className="aspect-video bg-white/5 relative overflow-hidden">
                                    <img src={s} alt="shot" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                                </div>
                            </button>
                        </SectionReveal>
                    ))}
                </div>
            </div>

            {/* النافذة المنبثقة لعرض الصور (Lightbox) */}
            <Lightbox open={open} src={src} onClose={() => setOpen(false)} />
        </div>
    );
}
