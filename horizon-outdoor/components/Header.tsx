import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
             <a href="#" className="text-2xl font-bold text-gray-800 tracking-wider">
              Horizon<span className="text-emerald-600">Outdoor</span>
            </a>
          </div>
          <div className="hidden md:block">
            <a href="https://forms.gle/Pj1Rvr77yLt3CdQy9" target="_blank" rel="noopener noreferrer" 
               className="bg-emerald-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors duration-300">
              聯繫我們
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};