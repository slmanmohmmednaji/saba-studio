import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// تسجيل إضافات GSAP المطلوبة للتحكم في الحركات عند التمرير
gsap.registerPlugin(ScrollTrigger);

/**
 * مكون ظهور الأقسام (SectionReveal)
 * يستخدم مكتبة GSAP لإضافة حركات انسيابية عند تمرير الصفحة ووصول العنصر للمجال المرئي
 */
export default function SectionReveal({
  children,
  delay = 0,         // تأخير الحركة بالثواني
  direction = "up",  // اتجاه الحركة (up, down, left, right)
  duration = 0.9,    // مدة استمرار الحركة بالثواني
  distance = 30      // المسافة التي يقطعها العنصر أثناء دخوله
}) {
  const el = useRef(null);

  useLayoutEffect(() => {
    // التحقق مما إذا كان الجهاز جوالاً لتقليل مسافة الحركة
    const isMobile = window.innerWidth < 768;
    const finalDistance = isMobile ? Math.min(distance, 10) : distance;

    // إنشاء سياق (context) لـ GSAP لضمان تنظيف الحركات عند إزالة المكون
    const ctx = gsap.context(() => {
      // تحديد إحداثيات البداية بناءً على الاتجاه المختار
      const vars = {
        opacity: 0,
        x: direction === "left" ? finalDistance : direction === "right" ? -finalDistance : 0,
        y: direction === "up" ? finalDistance : direction === "down" ? -finalDistance : 0,
      };

      // تنفيذ الحركة من إحداثيات البداية إلى الموقع الطبيعي
      gsap.fromTo(
        el.current,
        vars,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out", // نوع الانسيابية (Slight ease out)
          scrollTrigger: {
            trigger: el.current,
            start: "top 90%", // تبدأ الحركة عندما يصل أعلى العنصر لـ 90% من ارتفاع الشاشة
            toggleActions: "play none none none" // تشغيل الحركة لمرة واحدة فقط
          }
        }
      );
    });

    return () => ctx.revert(); // تنظيف الحركة والذاكرة
  }, [delay, direction, duration, distance]);

  return (
    <div ref={el}>
      {children}
    </div>
  );
}
