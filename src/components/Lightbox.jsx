import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function Lightbox({ open, src, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm">
      <button
        className="absolute right-4 top-4 btn-ghost"
        onClick={onClose}
        aria-label="close"
      >
        <FiX />
      </button>
      <div className="container-x flex h-full items-center justify-center py-10">
        <img
          src={src}
          alt="preview"
          className="max-h-[80vh] w-full max-w-5xl rounded-2xl border border-white/10 object-contain shadow-glow"
        />
      </div>
    </div>
  );
}
