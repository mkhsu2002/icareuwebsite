
import React from 'react';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-6">
        <span className="text-emerald-600">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
