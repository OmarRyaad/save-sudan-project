import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MainLogo from "../../../Images/MainLogo.png";
import SaudiLogo from "../../../Images/SaudiLogo.jpg";

const Header = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState();

  const links = [
    { id: 5, label: "الشركاء" },
    { id: 4, label: "المقالات" },
    { id: 3, label: "الفيديوهات" },
    { id: 2, label: "الخط الزمني" },
    { id: 1, label: "عن الحملة" },
    { id: 0, label: "الرئيسية" },
  ];

  // Update time every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Right Section */}
        <div className="flex items-center">
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 hidden sm:block mr-6">
            تسجيل الدخول
          </button>
          <img src={SaudiLogo} alt="Saudi Logo" className="w-10" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 space-x-reverse">
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
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img src={MainLogo} alt="Logo" className="w-20" />
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    className={`w-full text-right px-3 py-2 text-sm font-medium ${
                      active === link.id ? "border-r-4 border-black" : ""
                    }`}
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
                  تسجيل الدخول
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
