import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, Languages } from "lucide-react";
import MainLogo from "../../../Images/MainLogo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  // Choose icon based on language (swapped: en uses Languages, ar uses Globe)
  const LanguageIcon = i18n.language?.startsWith("en") ? Languages : Globe;

  // Navigation links
  const links = [
    { id: 0, label: t("header.links.home") },
    { id: 1, label: t("header.links.about") },
    { id: 2, label: t("header.links.timeline") },
    { id: 3, label: t("header.links.videos") },
    { id: 4, label: t("header.links.articles") },
    { id: 5, label: t("header.links.partners") },
  ];

  // Clock updater
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(
        i18n.language === "en" ? "en-US" : "en-US",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }
      );
      setTime(formatted);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [i18n.language]);

  // Toggle language (swapped: en becomes ar, ar becomes en)
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  // Sync direction and lang attributes (swapped: en uses rtl, ar uses ltr)
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "en" ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md relative z-50">
        {/* Right Section */}
        <div className="flex items-center">
          {/* Login button */}
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 hidden sm:block mr-6">
            {t("header.login")}
          </button>
          {/* Language Logo Icon */}
          <LanguageIcon size={28} className="text-black" />
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center gap-2"
          >
            {i18n.language === "en" ? "Arabic" : "الإنجليزية"}
            {/* Swapped labels */}
          </button>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul
            className={`flex space-x-4 ${
              i18n.language === "en" ? "space-x-reverse" : ""
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <button
                  className={`px-3 py-2 text-sm font-medium ${
                    active === link.id ? "border-b-2 border-b-black" : ""
                  }`}
                  onClick={() => setActive(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Main Logo */}
        <div className="flex items-center">
          <img src={MainLogo} alt="Main Logo" className="w-20" />
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    className={`w-full px-3 py-2 text-sm font-medium ${
                      active === link.id
                        ? i18n.language === "en"
                          ? "border-r-4 border-black"
                          : "border-l-4 border-black"
                        : ""
                    } ${i18n.language === "en" ? "text-left" : "text-right"}`}
                    onClick={() => {
                      setActive(link.id);
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  {t("header.login")}
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
      {/* Timer Bar */}
      <div className="bg-black text-white text-center py-2 text-lg font-semibold">
        {time}
      </div>
    </>
  );
};

export default Header;
