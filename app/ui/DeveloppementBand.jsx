const DeveloppementBand = () => {
  return (
    <>
      <div className="flex absolute text-lg md:text-xl mt-6 md:mt-0 font-bold z-50 bg-[#ED7D3A]/30 text-white md:text-white/75 -rotate-[40deg] -left-48 md:-left-72 md:top-20 w-30 py-1">
        <span className="animate-marquee pr-1">#OPENTOWORK</span>
        <span className="animate-marquee pr-1">#OPENTOWORK</span>
        <span className="animate-marquee pr-1">#OPENTOWORK</span>
        <span className="animate-marquee pr-1">#OPENTOWORK</span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        `}</style>
    </>
  );
};
export default DeveloppementBand;
