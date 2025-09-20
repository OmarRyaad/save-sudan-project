import { DribbbleIcon, Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import MainLogo from "../../../Images/MainLogo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();

  // Debug: Log footer namespace to verify translations
  console.log(
    "Footer translations:",
    i18n.getResourceBundle(i18n.language, "translation")?.footer
  );

  return (
    <footer
      dir={
        t("dir") !== "dir" ? t("dir") : i18n.language === "ar" ? "rtl" : "ltr"
      }
      className="px-6 py-10 md:px-11 bg-white"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo & Contact */}
        <div className="flex flex-col md:max-w-sm">
          <img
            src={MainLogo}
            alt={
              t("header.logo_alt") !== "header.logo_alt"
                ? t("header.logo_alt")
                : i18n.language === "ar"
                ? "الشعار السعودي"
                : "Saudi Logo"
            }
            className="w-20 mb-4 -mt-6 md:-mt-12"
          />

          <h3 className="font-bold">
            {t("footer.contact.title") !== "footer.contact.title"
              ? t("footer.contact.title")
              : i18n.language === "ar"
              ? "اتصل بنا"
              : "Contact Us"}
          </h3>
          <p className="pt-4 text-gray-400">
            {t("footer.contact.phone") !== "footer.contact.phone"
              ? t("footer.contact.phone")
              : i18n.language === "ar"
              ? "الهاتف: 123 400 123+"
              : "Phone: +123 400 123"}
          </p>
          <p className="pt-4 text-gray-400">
            {t("footer.contact.description1") !== "footer.contact.description1"
              ? t("footer.contact.description1")
              : i18n.language === "ar"
              ? "حملة إنسانية تهدف إلي إرسال قوافل إغاثية لدعم المتضررين"
              : "A humanitarian campaign aimed at sending relief convoys to support those affected"}
          </p>
          <p className="text-gray-400">
            {t("footer.contact.description2") !== "footer.contact.description2"
              ? t("footer.contact.description2")
              : i18n.language === "ar"
              ? "في السودان عبر الغذاء والدواء والمستلزمات الأساسية"
              : "in Sudan through food, medicine, and essential supplies"}
          </p>
          <p className="pt-4">
            {t("footer.contact.email") !== "footer.contact.email"
              ? t("footer.contact.email")
              : "Email: Content@gmail.com"}
          </p>

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
          <h3 className="font-bold">
            {t("footer.discover.title") !== "footer.discover.title"
              ? t("footer.discover.title")
              : i18n.language === "ar"
              ? "اكتشف"
              : "Discover"}
          </h3>
          <p className="text-gray-400">
            {t("footer.discover.home") !== "footer.discover.home"
              ? t("footer.discover.home")
              : i18n.language === "ar"
              ? "الرئيسية"
              : "Home"}
          </p>
          <p className="text-gray-400">
            {t("footer.discover.about") !== "footer.discover.about"
              ? t("footer.discover.about")
              : i18n.language === "ar"
              ? "عن الحملة"
              : "About the Campaign"}
          </p>
          <p className="text-gray-400">
            {t("footer.discover.timeline") !== "footer.discover.timeline"
              ? t("footer.discover.timeline")
              : i18n.language === "ar"
              ? "الخط الزمني"
              : "Timeline"}
          </p>
          <p className="text-gray-400">
            {t("footer.discover.videos") !== "footer.discover.videos"
              ? t("footer.discover.videos")
              : i18n.language === "ar"
              ? "الفيديوهات"
              : "Videos"}
          </p>
          <p className="text-gray-400">
            {t("footer.discover.articles") !== "footer.discover.articles"
              ? t("footer.discover.articles")
              : i18n.language === "ar"
              ? "المقالات"
              : "Articles"}
          </p>
          <p className="text-gray-400">
            {t("footer.discover.partners") !== "footer.discover.partners"
              ? t("footer.discover.partners")
              : i18n.language === "ar"
              ? "الشركاء"
              : "Partners"}
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold">
            {t("footer.legal.title") !== "footer.legal.title"
              ? t("footer.legal.title")
              : i18n.language === "ar"
              ? "القانونية"
              : "Legal"}
          </h3>
          <p className="text-gray-400">
            {t("footer.legal.privacy") !== "footer.legal.privacy"
              ? t("footer.legal.privacy")
              : i18n.language === "ar"
              ? "سياسة الخصوصية"
              : "Privacy Policy"}
          </p>
          <p className="text-gray-400">
            {t("footer.legal.terms") !== "footer.legal.terms"
              ? t("footer.legal.terms")
              : i18n.language === "ar"
              ? "الشروط والأحكام"
              : "Terms and Conditions"}
          </p>
          <p className="text-gray-400">
            {t("footer.legal.returns") !== "footer.legal.returns"
              ? t("footer.legal.returns")
              : i18n.language === "ar"
              ? "سياسة الإرجاع"
              : "Return Policy"}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-8 pt-6 border-t border-gray-300 text-sm text-gray-600 gap-4">
        <p
          className="text-center md:text-left"
          style={{ textAlign: t("textAlign") }}
        >
          {t("footer.bottomLinks") !== "footer.bottomLinks"
            ? t("footer.bottomLinks")
            : i18n.language === "ar"
            ? "سياسة الخصوصية | سياسة الإرجاع"
            : "Privacy Policy | Return Policy"}
        </p>
        <p
          className="text-center md:text-left"
          style={{ textAlign: t("textAlign") }}
        >
          {t("footer.copyright") !== "footer.copyright"
            ? t("footer.copyright")
            : i18n.language === "ar"
            ? "جميع الحقوق محفوظة .COPYRIGHT 2025@"
            : "All Rights Reserved © 2025"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
