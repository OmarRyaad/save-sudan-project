import React from "react";

const MainVideo = ({ videoId, title, text }) => {
  return (
    <div className="p-4 sm:p-6 bg-white border border-gray-300 rounded-lg shadow-md w-[350px] mx-auto">
      <div className="relative w-full h-[180px] sm:h-[200px] rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-4 text-gray-600 text-sm sm:text-base truncate">{text}</p>
    </div>
  );
};

export default MainVideo;
