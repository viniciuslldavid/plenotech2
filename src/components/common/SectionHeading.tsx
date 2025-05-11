import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'left',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[alignment]}`}>
      <h2 className={`text-3xl md:text-4xl font-bold font-display leading-tight text-gray-900 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-gray-600 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-primary-600 mt-6 ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;