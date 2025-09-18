import { Icon } from "lucide-react"; // Import Lucide icon component for type safety
import { User, Book, Heart } from "lucide-react"; // Example icons

const Partner = ({ imgSrc, icon: IconComponent, title, description }) => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex-shrink-0">
        {imgSrc && (
          <img src={imgSrc} alt={title} className="w-16 h-16 rounded-full" />
        )}
        {!imgSrc && IconComponent && (
          <IconComponent className="w-16 h-16 text-gray-600" />
        )}
      </div>
    </div>
  );
};

// Example data based on the image
const partnerData = [
  {
    title: "أنشطة النادي الرياضي",
    description: "النشاطات الرياضية المتنوعة لجميع الأعمار",
    icon: User,
  },
  {
    title: "أنشطة النادي الثقافي",
    description: "برامج وأنشطة ثقافية متنوعة",
    icon: Book,
  },
  {
    title: "أنشطة النادي الخيري",
    description: "أعمال خيرية وتطوعية للمجتمع",
    icon: Heart,
  },
];

const PartnerSection = () => {
  return (
    <div className="flex space-x-6 p-6">
      {partnerData.map((partner, index) => (
        <Partner
          key={index}
          title={partner.title}
          description={partner.description}
          icon={partner.icon}
        />
      ))}
    </div>
  );
};

export default PartnerSection;
