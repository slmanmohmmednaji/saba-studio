import Navbar from "../components/Navbar.jsx"; // شريط التنقل العلوي
import Footer from "../components/Footer.jsx"; // تذييل الصفحة

/**
 * مكون التنسيق العام (SiteLayout)
 * يتم استخدامه لتغليف كل صفحات الموقع لضمان ظهور القائمة العلوية والتذييل في كل مكان
 */
export default function SiteLayout({ children }) {
  return (
    <div id="top" className="overflow-x-hidden">
      <Navbar />
      {/* عرض المحتوى المتغير لكل صفحة هنا */}
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
}
