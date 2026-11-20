import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth organic progress increments
        const increment = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FAF6F2] transition-opacity duration-300">
      {/* Logo sans conteneur intermédiaire, agrandi */}
      <img
        src="/assets/logo.png"
        alt="Aura Moon"
        className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-md"
      />

      <div className="mt-5 text-center">
        <h2 className="brand-font text-2xl sm:text-3xl font-bold text-[#5C2C20] tracking-[0.25em] uppercase">
          AURA MOON
        </h2>
        <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#794939] mt-1 font-medium">
          Pilates Studio
        </p>
      </div>

      {/* Barre de progression qui avance réellement de 0% à 100% */}
      <div className="w-44 sm:w-52 h-1.5 bg-[#E8DDD4] rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-[#5C2C20] rounded-full transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
