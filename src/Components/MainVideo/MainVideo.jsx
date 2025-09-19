import { Play } from "lucide-react";
import React from "react";

const MainVideo = ({ text }) => {
  return (
    <div className="p-4 sm:p-6 bg-white border border-gray-300 rounded-lg shadow-md w-[350px] mx-auto">
      <div className="relative w-full h-[180px] sm:h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
      </div>
      <p className="mt-4 text-gray-600 text-sm sm:text-base truncate">{text}</p>
    </div>
  );
};

export default MainVideo;
