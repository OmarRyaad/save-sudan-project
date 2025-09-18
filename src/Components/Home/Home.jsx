import { ImageIcon, Play } from "lucide-react";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-10 px-6">
        <div className="relative w-[350px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
          <Play className="w-10 h-10 text-gray-800" />
        </div>
        <div className="text-right max-w-md">
          <h3 className="text-xl font-bold mb-3">
            حملة دعم قوافل إنقاذ السودان
          </h3>
          <p className="text-gray-700 mb-2 leading-relaxed">
            معا نمد يد العون إلي أهلنا في السودان عبر قوافل إنسانية تحمل الغذاء
            والدواء والمستلزمات الأساسية.
          </p>
          <p className="text-gray-700 mb-5">
            ساهم معنا كل يوم لتكون جزء من الأمل
          </p>
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
            تبرع الأن
          </button>
        </div>
      </div>
      <div>
        <h1>الشركاء</h1>
        <Partners
          imgSrc="https://via.placeholder.com/64"
          title="الهلال الأحمر"
          description="دعم طبي و اسعافات أولية"
        />
        <Partners
          imgSrc="https://via.placeholder.com/64"
          title="الصليب الأحمر"
          icon={ImageIcon}
          description="مساعدات إنسانية"
        />
        <Partners
          imgSrc="https://via.placeholder.com/64"
          title="منظمة أخرى"
          description="دعم مجتمعي"
        />
      </div>
    </>
  );
};

export default Home;
