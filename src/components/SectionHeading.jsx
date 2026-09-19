const SectionHeading = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
  light = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
          light 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-[#FDF2F5] text-[#832B4C] border border-[#F0DEE7]'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#832B4C] animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-[#1D1518]'
      }`}>
        {title}{' '}
        {highlight && (
          <span className={light ? 'text-rose-200' : 'luxury-gradient-text'}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-white/80' : 'text-[#6B5B63]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

