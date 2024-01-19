const DeveloppementBand = () => {
  return (
    <>
      <div className="absolute text-xl font-bold z-50 bg-[#ED7D3A]/10 text-white/70 -rotate-45 -left-14 top-8 w-30 p-1">
        <span className="animate-marquee">En cours de développement</span>
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
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </>
  );
};
export default DeveloppementBand;
