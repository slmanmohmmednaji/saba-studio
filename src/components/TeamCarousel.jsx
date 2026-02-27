import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TeamCarousel({ members }) {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(isAr ? scrollLeft < 0 : scrollLeft > 0);
            setCanScrollRight(isAr ? Math.abs(scrollLeft) < scrollWidth - clientWidth - 5 : scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, [isAr]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            // Approximate card width (viewport width - padding)
            const cardWidth = clientWidth * 0.7;
            const gap = 16; // 4 * 4 (gap-4)
            const step = cardWidth + gap;

            container.scrollBy({
                left: direction === "left" ? (isAr ? step : -step) : (isAr ? -step : step),
                behavior: "smooth",
            });

            setTimeout(checkScroll, 500);
        }
    };

    return (
        <div className="relative group/carousel w-full overflow-hidden">
            {/* Improved Navigation Buttons for Mobile */}
            <div className="absolute top-1/2 left-2 z-50 -translate-y-1/2 md:-left-12">
                <button
                    onClick={() => scroll("left")}
                    className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-night/90 text-accent border border-accent/30 backdrop-blur-xl transition-all shadow-xl active:scale-90 ${!canScrollLeft ? "opacity-20 pointer-events-none" : "opacity-100"}`}
                    disabled={!canScrollLeft}
                >
                    {isAr ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
                </button>
            </div>

            <div className="absolute top-1/2 right-2 z-50 -translate-y-1/2 md:-right-12">
                <button
                    onClick={() => scroll("right")}
                    className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-night/90 text-accent border border-accent/30 backdrop-blur-xl transition-all shadow-xl active:scale-90 ${!canScrollRight ? "opacity-20 pointer-events-none" : "opacity-100"}`}
                    disabled={!canScrollRight}
                >
                    {isAr ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
                </button>
            </div>

            {/* Carousel Container with specialized centering and vertical scroll support */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                style={{ touchAction: 'pan-y' }}
                className={
                    "flex gap-4 md:gap-8 overflow-x-auto pb-8 pt-4 no-scrollbar snap-x snap-mandatory " +
                    "md:justify-center md:px-0 " +
                    (members.length <= 1
                        ? "justify-center px-0"
                        : "justify-start px-[15vw]")
                }
            >
                {members.map((m, i) => (
                    <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-shrink-0 w-[70vw] md:w-[320px] snap-center"
                        style={{ touchAction: 'pan-y' }}
                    >
                        <div className="group relative flex flex-col rounded-3xl overflow-hidden bg-night/60 border border-white/5 shadow-2xl transition-all duration-500 hover:border-accent/40 hover:shadow-glow-accent/10">
                            {/* Image Container - Using object-cover to fill container */}
                            <div className="relative aspect-[3/4] overflow-hidden pointer-events-none">
                                <img
                                    src={m.img}
                                    alt={isAr ? m.name_ar : m.name_en}
                                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
                                <div className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/60 transition-colors duration-700">
                                    <div className="text-xl">✦</div>
                                    <div className="text-sm ml-4 -mt-2 opacity-50">✦</div>
                                </div>
                            </div>

                            {/* Info Area */}
                            <div className="p-6 flex flex-col items-center bg-night/80 backdrop-blur-md">
                                <h4 className="text-xl font-black text-white mb-2 text-center group-hover:text-accent transition-colors duration-300">
                                    {isAr ? m.name_ar : m.name_en}
                                </h4>
                                <div className="bg-accent/10 text-accent px-6 py-1.5 rounded-full text-sm font-black border border-accent/20">
                                    {isAr ? m.role_ar : m.role_en}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Progress Indicator (Dots) - Visible on mobile/tablet */}
            <div className="flex justify-center gap-3 mt-6 md:hidden">
                {members.map((_, i) => (
                    <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-accent/20"
                    />
                ))}
            </div>
        </div>
    );
}
