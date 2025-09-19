import { Image } from "lucide-react";

const MainCard = ({
  imgSrc,
  icon: IconComponent,
  title,
  description,
  isBox,
}) => {
  const content = (
    <div className="flex justify-center items-center space-x-reverse space-x-3 sm:space-x-4 p-3 sm:p-4">
      <div className="flex-shrink-0">
        {imgSrc && (
          <div className="bg-gray-200 rounded-full p-2 sm:p-3">
            <img
              src={imgSrc}
              alt={title}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
          </div>
        )}
        {!imgSrc && IconComponent && (
          <div className="bg-gray-200 rounded-full p-2 sm:p-3">
            <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" />
          </div>
        )}
        {!imgSrc && !IconComponent && (
          <div className="bg-gray-200 rounded-full p-2 sm:p-3">
            <Image className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" />
          </div>
        )}
      </div>
      <div className="flex-1 text-right pr-3 sm:pr-4">
        <h3 className="font-bold text-xs sm:text-sm lg:text-base truncate">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm lg:text-base line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-[180px] flex items-center">
      {isBox ? (
        <div className="border border-gray-300 rounded-lg p-3 sm:p-4 shadow-md w-full">
          {content}
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default MainCard;
