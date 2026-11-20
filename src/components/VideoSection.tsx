import { useRef, useState, useEffect } from 'react';

export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      id: 1,
      src: '/assets/video1.mp4',
      title: 'Immersion au Studio',
      subtitle: 'Pratique consciente & mouvement fluide',
    },
    {
      id: 2,
      src: '/assets/video2.mp4',
      title: 'L’Expérience Aura Moon',
      subtitle: 'Force, posture & équilibre retrouvé',
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.7));
    setActiveIndex(Math.min(Math.max(index, 0), videos.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.getElementsByClassName('video-card');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-16 bg-[#F5ECE4] overflow-hidden">
      <div className="section-wrap">
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-10 reveal">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#794939] font-bold">
            Le Studio en Mouvement
          </span>
          <h2 className="serif text-3xl md:text-4xl text-[#2D1B17] mt-1.5 font-normal">
            Découvrez nos séances en vidéo
          </h2>
          <p className="text-xs text-[#6E5A53] mt-2 tracking-wide">
            Glissez pour explorer les séances · Les vidéos tournent en boucle en continu
          </p>
        </div>

        {/* Horizontal Scrollable Row for the 2 Videos */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar py-6 px-4 md:px-12 items-center justify-start md:justify-center"
          style={{ scrollBehavior: 'smooth' }}
        >
          {videos.map((vid, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={vid.id}
                onClick={() => scrollToIndex(index)}
                className={`video-card shrink-0 w-[82vw] sm:w-[380px] md:w-[420px] snap-center cursor-pointer transition-all duration-700 ease-out transform ${
                  isActive
                    ? 'scale-[1.03] shadow-2xl z-20 opacity-100 ring-2 ring-[#5C2C20]/40'
                    : 'scale-95 shadow-md z-10 opacity-75 hover:opacity-90'
                } rounded-md overflow-hidden bg-black relative aspect-[9/16] max-h-[640px]`}
              >
                {/* Looping video */}
                <video
                  src={vid.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Elegant overlay caption at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-6 text-white pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      0{index + 1} / 0{videos.length}
                    </span>
                    {isActive && (
                      <span className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-[#D9C3B4] font-medium bg-[#5C2C20]/80 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        En lecture
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="brand-font text-lg md:text-xl font-bold uppercase tracking-wider text-white">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-[#FAF6F2]/85 mt-1 font-light">
                      {vid.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots & Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => scrollToIndex(0)}
            aria-label="Vidéo précédente"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeIndex === 0
                ? 'bg-[#5C2C20] text-white shadow-md'
                : 'bg-white text-[#5C2C20] hover:bg-[#FAF6F2]'
            }`}
          >
            ←
          </button>

          <div className="flex gap-2">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Aller à la vidéo ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#5C2C20]' : 'w-2.5 bg-[#D9C3B4]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToIndex(1)}
            aria-label="Vidéo suivante"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeIndex === 1
                ? 'bg-[#5C2C20] text-white shadow-md'
                : 'bg-white text-[#5C2C20] hover:bg-[#FAF6F2]'
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
