
import React from 'react';

interface TargetCardProps {
  icon: React.ReactNode;
  text: string;
}

export const TargetCard: React.FC<TargetCardProps> = ({ icon, text }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300">
      <div className="flex-shrink-0 text-emerald-500 mt-1">
        {icon}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};
