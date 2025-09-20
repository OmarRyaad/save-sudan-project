import { DribbbleIcon, Facebook, Instagram, Linkedin } from "lucide-react";
import MainLogo from "../../../Images/MainLogo.png";

const Footer = () => {
  return (
    <footer dir="rtl" className="px-6 py-10 md:px-11 bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo & Contact */}
        <div className="flex flex-col md:max-w-sm">
          <img
            src={MainLogo}
            alt="Logo"
            className="w-20 mb-4 -mt-6 md:-mt-12"
          />

          <h3 className="font-bold">اتصل بنا</h3>
          <p className="pt-4 text-gray-400">الهاتف: 123 400 123+</p>
          <p className="pt-4 text-gray-400">
            حملة إنسانية تهدف إلي إرسال قوافل إغاثية لدعم المتضررين
          </p>
          <p className="text-gray-400">
            في السودان عبر الغذاء والدواء والمستلزمات الأساسية
          </p>
          <p className="pt-4">Email: Content@gmail.com</p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="bg-gray-300 p-2 rounded-lg">
              <Instagram size={18} />
            </div>
            <div className="bg-gray-300 p-2 rounded-lg">
              <Linkedin size={18} />
            </div>
            <div className="bg-gray-300 p-2 rounded-lg">
              <DribbbleIcon size={18} />
            </div>
            <div className="bg-gray-300 p-2 rounded-lg">
              <Facebook size={18} />
            </div>
          </div>
        </div>

        {/* Discover Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold">اكتشف</h3>
          <p className="text-gray-400">الرئيسية</p>
          <p className="text-gray-400">عن الحملة</p>
          <p className="text-gray-400">الخط الزمني</p>
          <p className="text-gray-400">الفيديوهات</p>
          <p className="text-gray-400">المقالات</p>
          <p className="text-gray-400">الشركاء</p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold">القانونية</h3>
          <p className="text-gray-400">سياسة الخصوصية</p>
          <p className="text-gray-400">الشروط والأحكام</p>
          <p className="text-gray-400">سياسة الإرجاع</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-300 text-sm text-gray-600 gap-4">
        <p>جميع الحقوق محفوظة .COPYRIGHT 2025@</p>
        <p className="text-center md:text-right">
          سياسة الخصوصية | سياسة الإرجاع
        </p>
      </div>
    </footer>
  );
};

export default Footer;
