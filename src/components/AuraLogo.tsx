interface AuraLogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function AuraLogo({
  className = '',
  showText = true,
  light = false,
  size = 'md',
}: AuraLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7 md:w-8 md:h-8',
    md: 'w-9 h-9 md:w-11 md:h-11',
    lg: 'w-16 h-16 md:w-20 md:h-20',
  };

  const textColor = light ? 'text-white' : 'text-[#2D1B17]';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <img
        src="/assets/logo.png"
        alt="Aura Moon"
        className={`${iconSizes[size]} object-contain shrink-0 transition-transform duration-300 hover:rotate-6 drop-shadow-sm rounded-full`}
      />

      {showText && (
        <span className={`brand-font text-base sm:text-lg md:text-xl font-bold tracking-[0.18em] uppercase ${textColor} leading-none`}>
          AURA MOON
        </span>
      )}
    </div>
  );
}
