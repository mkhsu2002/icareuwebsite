
import React from 'react';

interface ProductCardProps {
  name: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name }) => {
  return (
    <div className="bg-white text-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-emerald-400">
      <p className="font-medium text-gray-700">{name}</p>
    </div>
  );
};
