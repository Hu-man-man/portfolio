const DeveloppementBand = () => {
  return (
    <>
      <div className="absolute text-xl font-bold z-50 bg-[#ED7D3A]/30 text-white/70 -rotate-[40deg] -left-96 top-32 w-30 py-1">
        <span className="animate-marquee">#OPENTOWORK</span>
        <span className="animate-marquee">#OPENTOWORK</span>
        <span className="animate-marquee">#OPENTOWORK</span>
        <span className="animate-marquee">#OPENTOWORK</span>
        <span className="animate-marquee">#OPENTOWORK</span>
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
          animation: marquee 25s linear infinite;
        }
        `}</style>
    </>
  );
};
export default DeveloppementBand;
