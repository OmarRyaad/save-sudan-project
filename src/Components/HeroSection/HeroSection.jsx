const HeroSection = ({ text, className = "" }) => {
  return (
    <h1
      className={`font-bold border-b-4 border-black text-2xl sm:text-3xl w-fit mx-auto sm:mr-[80px] lg:mr-[120px] pb-2 pt-12 sm:pt-16 lg:pt-[100px] text-right ${className}`}
    >
      {text}
    </h1>
  );
};

export default HeroSection;
