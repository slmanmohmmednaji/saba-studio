import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ open, src, onClose }) {
  // قفل التمرير في الخلفية عند فتح الصورة
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
          onClick={onClose} // إغلاق عند الضغط على الخلفية
        >
          {/* زر الإغلاق */}
          <button
            className="absolute right-6 top-24 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            aria-label="close"
          >
            <FiX size={24} />
          </button>

          {/* حاوية الصورة */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط على الصورة نفسها
          >
            <img
              src={src}
              alt="preview"
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl selection:bg-transparent touch-pinch-zoom"
            />
          </motion.div>

          {/* نص توضيحي بسيط في الأسفل */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium tracking-widest uppercase pointer-events-none">
            Tap anywhere to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
