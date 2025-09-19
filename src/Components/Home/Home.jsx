import { Play } from "lucide-react";
import MainCard from "../MainCard/MainCard";
import { Image } from "lucide-react";
import MainHeader from "../MainHeader/MainHeader";
import Timeline from "../Timeline/Timeline";
import MainVideo from "../MainVideo/MainVideo";
import Articles from "../Articles/Articles";

const Home = () => {
  const timelineData = [
    { year: "2000", text: "إعداد الدراسات الأولية لتطوير الذكاء الاصطناعي" },
    { year: "2005", text: "بدء الاعداد لإطلاق الشركة الأم" },
    { year: "2010", text: "إطلاق الشركة الأم لتطوير الذكاء الاصطناعي" },
    { year: "2023", text: "بدء المشروع النهائي لتطوير الذكاء الاصطناعي" },
    { year: "2025", text: "نهاية المشروع النهائي لتطوير الذكاء الاصطناعي" },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 py-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[300px] sm:max-w-[350px] h-[180px] sm:h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
        </div>
        <div className="text-right max-w-sm sm:max-w-md mt-6 md:mt-0">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">
            حملة دعم قوافل إنقاذ السودان
          </h3>
          <p className="text-gray-700 mb-2 text-sm sm:text-base leading-relaxed">
            معا نمد يد العون إلي أهلنا في السودان عبر قوافل إنسانية تحمل الغذاء
            والدواء والمستلزمات الأساسية.
          </p>
          <p className="text-gray-700 mb-4 sm:mb-5 text-sm sm:text-base">
            ساهم معنا كل يوم لتكون جزء من الأمل
          </p>
          <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-2 rounded-md hover:bg-gray-800 transition text-sm sm:text-base">
            تبرع الأن
          </button>
        </div>
      </div>
      {/* الشركاء */}
      <div dir="rtl">
        <MainHeader text="الشركاء" />
        <div className="flex flex-col sm:flex-row justify-around pt-6 sm:pt-8 pb-12 sm:pb-16 gap-6 sm:gap-4 px-4 sm:px-6">
          <MainCard
            icon={Image}
            title="منظمة الصحة العالمية"
            description="تزويد الأدوية والمستلزمات الطبية"
          />
          <MainCard
            title="برنامج الغذاء العالمي"
            icon={Image}
            description="توفير المواد الغذائية الأساسية"
          />
          <MainCard
            title="الهلال الأحمر"
            icon={Image}
            description="دعم طبي وإسعافات أولية"
          />
        </div>
      </div>
      {/* الخط الزمني */}
      <div dir="rtl">
        <MainHeader text="الخط الزمني" />
        <div className="flex flex-col sm:flex-row justify-around pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-[150px] gap-6 sm:gap-4 px-4 sm:px-6">
          <Timeline timelineData={timelineData} />
        </div>
      </div>
      {/* المستفيدين */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl w-fit mx-auto pb-11 pt-11 sm:pt-16 lg:pb-[100px] text-center">
          أكثر من 50,356 مستفيد من الحملة الإغاثية
        </h1>
        <div
          dir="rtl"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-[150px] max-w-7xl mx-auto"
        >
          <MainCard
            icon={Image}
            title="41% غذاء"
            description="وجبات غذائية ومواد تموينية أساسية"
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title="25% دواء"
            icon={Image}
            description="توفير أدوية وعلاجات طبية"
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title="14% مياه نظيفة"
            icon={Image}
            description="إمدادات مياه للشرب والاستخدام اليومي"
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title="13% مساعدات إيواء"
            icon={Image}
            description="خيام ولوازم للمشردين"
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title="7% دعم نفسي واجتماعي"
            icon={Image}
            description="رعاية نفسية للأطفال والنساء"
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title="6% مستلزمات أطفال"
            icon={Image}
            description="حليب أطفال ، حفاضات"
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
        </div>
      </div>
      {/* الفيديوهات */}
      <div dir="rtl">
        <MainHeader text="الفيديوهات" />
        <div className="flex pt-11 pb-11">
          <MainVideo text="رحلة القوافل إلى المناطق المتضررة" />
          <MainVideo text="شهادات من المستفيدين" />
          <MainVideo text="كيف يمكنك المساهمة في الحملة؟" />
        </div>
      </div>
      {/* المقالات */}
      <div dir="rtl">
        <MainHeader text="المقالات" />
        <div className="flex pt-11 pb-11">
          <Articles
            title={"اقرأ اَخر المقالات والتقارير عن الحملة"}
            desc={
              "تعرف علي جهود الحملة، قصص النجاح، وتجارب المتطوعين في دعم المتضررين بالسودان"
            }
          />
          <Articles
            title={"كيف يتم تجهيز قوافل الإغاثة قبل انطلاقها؟"}
            desc={
              "نستعرض المراحل التي تمر بها القوافل منذ جمع التبرعات وحتي تجهيز الشاحنات بالمؤن الطبية والغذائية"
            }
          />
          <Articles
            title={"قصص إنسانية من قلب السودان"}
            desc={
              "تعرف علي شهادات عائلات وأفراد تغيرت حياتهم بفضل المساعدات التي وصلت إليهم"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Home;
