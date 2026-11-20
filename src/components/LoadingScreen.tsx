const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FAF6F2]">
      <div className="relative">
        {/* Pulsing halo */}
        <div className="absolute -inset-4 rounded-full bg-[#794939]/20 animate-ping"></div>
        <div className="relative bg-white p-3 rounded-full shadow-lg border border-[#E8DDD4]">
          <img
            src="/assets/logo.png"
            alt="Aura Moon Pilates Studio"
            className="w-20 h-20 object-contain rounded-full"
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <h2 className="brand-font text-2xl font-bold text-[#5C2C20] tracking-[0.25em] uppercase">
          AURA MOON
        </h2>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#794939] mt-1 font-medium">
          Pilates Studio
        </p>
      </div>
      <div className="w-24 h-1 bg-[#E8DDD4] rounded-full mt-6 overflow-hidden">
        <div className="w-full h-full bg-[#5C2C20] animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
