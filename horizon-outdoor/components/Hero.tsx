import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')` }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          加入 Horizon Outdoor 品牌授權
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
          為您的產品注入品牌靈魂，共同開拓休閒市場新藍海
        </p>
      </div>
    </div>
  );
};