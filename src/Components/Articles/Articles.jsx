import { Image } from "lucide-react";
import { useState } from "react";

const Articles = ({ title, desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 50;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const isLongDesc = desc.length > maxLength;
  const shortDesc = isLongDesc ? `${desc.slice(0, maxLength)}...` : desc;

  return (
    <div className="p-4 sm:p-6 bg-white border border-gray-300 rounded-lg shadow-md w-[350px] mx-auto">
      <div className="relative w-full h-[180px] sm:h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
        <Image className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
      </div>
      <h3 className="mt-4 font-extrabold text-black text-xl sm:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-gray-600 text-sm sm:text-base">
        {isExpanded || !isLongDesc ? desc : shortDesc}
      </p>
      {isLongDesc && (
        <button
          onClick={toggleReadMore}
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm sm:text-base border-b border-blue-600 hover:border-blue-800"
        >
          {isExpanded ? "اقرأ أقل" : "اقرأ المزيد"}
        </button>
      )}
    </div>
  );
};

export default Articles;
