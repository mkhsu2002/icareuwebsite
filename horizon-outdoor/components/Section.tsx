
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
          <div className="mt-4 w-24 h-1 bg-emerald-500 mx-auto rounded"></div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
