
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              Horizon<span className="text-emerald-500">Outdoor</span>
            </h3>
            <p className="mt-2 text-gray-400">Do the Right Thing.</p>
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white">聯絡資訊</h4>
            <div className="mt-4 space-y-3">
              <p>艾可開發股份有限公司</p>
              <p>
                <a href="mailto:sales@icareu.tw" className="hover:text-emerald-400 transition-colors">
                  聯絡信箱：sales@icareu.tw
                </a>
              </p>
              <p>
                <a href="tel:03-5735430" className="hover:text-emerald-400 transition-colors">
                  聯絡電話：03-5735430
                </a>
              </p>
              <p>LINE ID：icareuec</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Horizon Outdoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
