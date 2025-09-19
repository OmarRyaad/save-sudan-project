const Timeline = ({ timelineData }) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-5">
      <div className="relative flex justify-between items-start">
        {timelineData.map((item, index) => (
          <div key={index} className="text-center w-1/5">
            <div className="w-3.5 h-3.5 bg-gray-300 rounded-full mx-auto mb-2 relative z-10"></div>
            <div className="timeline-content">
              <h3 className="text-lg text-black font-bold mb-1">{item.year}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
        <div
          className="absolute bottom-[85px] border-t border-dotted border-gray-300 z-0 -translate-y-px"
          style={{
            left: "10%",
            right: "10%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Timeline;
