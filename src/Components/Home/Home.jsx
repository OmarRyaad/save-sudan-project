import { useTranslation } from "react-i18next";
import { Play, Image } from "lucide-react";
import MainCard from "../MainCard/MainCard";
import Timeline from "../Timeline/Timeline";
import MainVideo from "../MainVideo/MainVideo";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  const { t } = useTranslation();

  // Timeline data with translated text
  const timelineData = [
    { year: "2000", text: t("home.timeline.2000") },
    { year: "2005", text: t("home.timeline.2005") },
    { year: "2010", text: t("home.timeline.2010") },
    { year: "2023", text: t("home.timeline.2023") },
    { year: "2025", text: t("home.timeline.2025") },
  ];

  return (
    <div dir={t("dir")}>
      {/* Campaign Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 py-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[300px] sm:max-w-[350px] h-[180px] sm:h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
        </div>
        <div
          className={`text-${t("textAlign")} max-w-sm sm:max-w-md mt-6 md:mt-0`}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">
            {t("home.campaign.title")}
          </h3>
          <p className="text-gray-700 mb-2 text-sm sm:text-base leading-relaxed">
            {t("home.campaign.description1")}
          </p>
          <p className="text-gray-700 mb-4 sm:mb-5 text-sm sm:text-base">
            {t("home.campaign.description2")}
          </p>
          <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-2 rounded-md hover:bg-gray-800 transition text-sm sm:text-base">
            {t("home.campaign.donateButton")}
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <HeroSection text={t("home.sections.partners")} />
      <div className="flex flex-col sm:flex-row justify-around pt-6 sm:pt-8 pb-12 sm:pb-16 gap-6 sm:gap-4 px-4 sm:px-6">
        <MainCard
          icon={Image}
          title={t("home.partners.who.title")}
          description={t("home.partners.who.description")}
        />
        <MainCard
          title={t("home.partners.wfp.title")}
          icon={Image}
          description={t("home.partners.wfp.description")}
        />
        <MainCard
          title={t("home.partners.redCrescent.title")}
          icon={Image}
          description={t("home.partners.redCrescent.description")}
        />
      </div>

      {/* Timeline Section */}
      <HeroSection text={t("home.sections.timeline")} />
      <div className="flex flex-col sm:flex-row justify-around pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-[150px] gap-6 sm:gap-4 px-4 sm:px-6">
        <Timeline timelineData={timelineData} />
      </div>

      {/* Beneficiaries Section */}
      <div className="px-4">
        <h1 className="font-bold text-2xl sm:text-3xl w-fit mx-auto sm:pb-11 sm:pt-16 text-center">
          {t("home.beneficiaries.title", { count: 50356 })}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-6 pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-[150px] max-w-7xl mx-auto">
          <MainCard
            icon={Image}
            title={t("home.beneficiaries.food.title")}
            description={t("home.beneficiaries.food.description")}
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title={t("home.beneficiaries.medicine.title")}
            icon={Image}
            description={t("home.beneficiaries.medicine.description")}
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title={t("home.beneficiaries.water.title")}
            icon={Image}
            description={t("home.beneficiaries.water.description")}
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title={t("home.beneficiaries.shelter.title")}
            icon={Image}
            description={t("home.beneficiaries.shelter.description")}
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title={t("home.beneficiaries.psychSupport.title")}
            icon={Image}
            description={t("home.beneficiaries.psychSupport.description")}
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
          <MainCard
            title={t("home.beneficiaries.children.title")}
            icon={Image}
            description={t("home.beneficiaries.children.description")}
            className="border border-gray-300 rounded-lg bg-white shadow-lg"
            isBox={true}
          />
        </div>
      </div>

      {/* Videos Section */}
      <div className="px-6">
        <HeroSection text={t("home.sections.videos")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-11 pb-11">
          <MainVideo text={t("home.videos.journey")} />
          <MainVideo text={t("home.videos.testimonials")} />
          <MainVideo text={t("home.videos.contribute")} />
        </div>
      </div>

      {/* Articles Section */}
      <div className="px-6">
        <HeroSection text={t("home.sections.articles")} />
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 pt-11 pb-11">
          <Articles
            title={t("home.articles.latest.title")}
            desc={t("home.articles.latest.description")}
          />
          <Articles
            title={t("home.articles.preparation.title")}
            desc={t("home.articles.preparation.description")}
          />
          <Articles
            title={t("home.articles.stories.title")}
            desc={t("home.articles.stories.description")}
          />
        </div>
      </div>

      {/* Partners and Supporters Section */}
      <div className="mt-[100px] px-6">
        <HeroSection text={t("home.sections.partnersSupporters")} />
        <div className="flex flex-col mt-[50px] mb-[100px] md:flex-row md:flex-wrap justify-center gap-6 md:gap-10 p-6">
          <h3 className="w-full sm:w-auto text-center px-8 py-4 text-white bg-gray-500 rounded-lg">
            {t("home.partnersSupporters.localOrgs")}
          </h3>
          <h3 className="w-full sm:w-auto text-center px-8 py-4 text-white bg-gray-500 rounded-lg">
            {t("home.partnersSupporters.unicef")}
          </h3>
          <h3 className="w-full sm:w-auto text-center px-8 py-4 text-white bg-gray-500 rounded-lg">
            {t("home.partnersSupporters.wfp")}
          </h3>
          <h3 className="w-full sm:w-auto text-center px-8 py-4 text-white bg-gray-500 rounded-lg">
            {t("home.partnersSupporters.redCrescent")}
          </h3>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-11 pb-11">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
