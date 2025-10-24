import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { AdvantageCard } from './components/AdvantageCard';
import { TargetCard } from './components/TargetCard';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { ExternalLinkIcon, BriefcaseIcon, HandshakeIcon, RocketIcon, UserGroupIcon, CogIcon, GiftIcon, BuildingStorefrontIcon, TagIcon, HeartIcon, SparklesIcon } from './components/Icons';

const App: React.FC = () => {

  const advantages = [
    {
      icon: <RocketIcon />,
      title: "升級品牌價值",
      description: "立即擺脫白牌產品的價格競爭泥沼，擁有 Horizon Outdoor 累積的品牌信譽與識別度，為您的產品賦予品牌溢價能力。"
    },
    {
      icon: <HandshakeIcon />,
      title: "降低行銷與信任成本",
      description: "您無需從零開始建立品牌認知。我們成熟的品牌和豐厚客群，能大幅降低初期市場教育與客戶信任成本。"
    },
    {
      icon: <BuildingStorefrontIcon />,
      title: "強大的銷售管道支援",
      description: "我們不只是授權品牌，更是您的銷售夥伴！"
    }
  ];

  const salesChannels = [
    "豐富的線上銷售平台：全台 20+ 大型電商平台及專業網路經銷",
    "各縣市實體門市通路：遍佈全台各縣市戶外用品門市、大型連鎖通路",
    "充沛的品牌社群資源：網紅、KOL/KOC 團購主合作",
    "60萬人+ 全台最大FB登山社團 長期唯一開團合作品牌",
    "1000+ 公家機關教育單位企業名單"
  ];
  
  const targetPartners = [
    { icon: <BriefcaseIcon />, text: "具有電商零售經驗，過往以掏寶白牌、經銷他牌為主，希望轉型品牌銷售者" },
    { icon: <UserGroupIcon />, text: "深耕特定領域，擁有會員基礎，或銷售能力者，例如：寵物、健身、觀光" },
    { icon: <CogIcon />, text: "擁有獨特商品設計、優異生產製造業者" },
    { icon: <TagIcon />, text: "認同 Horizon 品牌理念，有意參與品牌長期經營者" },
    { icon: <GiftIcon />, text: "大型或連鎖業者，例如連鎖旅館體系、餐飲服務業" },
    { icon: <HeartIcon />, text: "致力於公益或社會責任的非營利或商業組織" },
  ];
  
  const productLines = [
    "戶外休閒服飾", "瑜伽健身用品", "3C配件周邊", "城市生活",
    "旅行用品", "自行車及其周邊", "咖啡茶飲及其周邊",
    "學生書包及其周邊", "寵物", "婦幼", "雨具", "路跑"
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800">
      <Header />
      <main>
        <Hero />
        <Section title="化挑戰為轉機，開拓廣闊的休閒品牌市場">
          <p className="text-center max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            在當前競爭白熱化的市場環境下，您是否正為產品缺乏品牌溢價、通路受限、以及高昂的市場推廣成本而苦惱？ Horizon Outdoor 誠摯邀請您，加入我們的品牌授權行列，化挑戰為轉機，共同開拓廣闊的休閒品牌市場。
          </p>
        </Section>
        
        <div className="bg-white">
          <Section title="品牌故事">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-emerald-700 mb-3 tracking-wider">品牌理念：Go. Back to Nature.</h3>
                <p className="text-gray-600 leading-loose">
                  Horizon Outdoor 為台籍加拿大移民所創立，秉持著對家人的愛，隨時隨地、輕鬆無負擔的與家人享受美好戶外時光。 Horizon 致力於簡單便攜、親民無負擔，多年來已陪伴數十萬人走出戶外，走進大自然。
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-emerald-700 mb-3 tracking-wider">品牌態度：Do the Right Thing.</h3>
                <p className="text-gray-600 leading-loose">
                  更因為受到女兒與品牌愛用者的啟發，堅持做對的事，以負責任的態度面對一切，也因為這份堅持而累積了豐厚的品牌認同。 這也是我們未來能帶給品牌愛用者的形象：穿上、戴上、用上 Horizon 品牌商品，象徵著你是一位堅持做正確事情的人！
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <h4 className="text-lg font-semibold mb-4">若您希望更深度認識 Horizon 👉</h4>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <a href="https://www.icareushop.com.tw/page/horizon" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 transition-colors duration-300 font-medium inline-flex items-center gap-2">官方網站 <ExternalLinkIcon /></a>
                <a href="https://www.facebook.com/horizonoutdoorliving" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 transition-colors duration-300 font-medium inline-flex items-center gap-2">Facebook <ExternalLinkIcon /></a>
                <p className="text-gray-500">或在 FB, IG, YT, Google 搜尋 #HorizonOutdoor</p>
              </div>
            </div>
          </Section>
        </div>

        <Section title="品牌授權的雙贏優勢">
           <p className="text-center max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            市場競爭日益艱難，加入 Horizon Outdoor 授權體系，您將立即獲得以下關鍵優勢：
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((adv, index) => (
              <AdvantageCard key={index} icon={adv.icon} title={adv.title} description={adv.description} />
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto bg-emerald-50 p-8 rounded-2xl border border-emerald-200">
            <ul className="space-y-4">
              {salesChannels.map((channel, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </span>
                  <span className="text-gray-700">{channel}</span>
                </li>
              ))}
            </ul>
             <p className="mt-8 text-center text-gray-600 font-medium italic">
                透過與我們的合作，您可以專注於您的核心製造與商品開發，讓我們來為您提供品牌加值，甚至市場行銷與通路佈建，彼此互助互利。
            </p>
          </div>
        </Section>
        
        <div className="bg-white">
          <Section title="初期尋找的合作對象">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {targetPartners.map((partner, index) => (
                <TargetCard key={index} icon={partner.icon} text={partner.text} />
              ))}
            </div>
          </Section>
        </div>

        <Section title="優先開放授權的產品線">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {productLines.map((line, index) => (
              <ProductCard key={index} name={line} />
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 max-w-3xl mx-auto">
            你可自行設計接由品牌總部審核，亦可委託品牌團隊提供視覺設計服務。視合作品項，初期不排除可免費協助。
          </p>
        </Section>

        <div className="bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
            <SparklesIcon />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">攜手共創未來 🤝</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Horizon Outdoor 堅信，聯合優秀的夥伴「做對的事」，才能突破重圍，共創事業高峰。
              如果您擁有開放的心胸，並認同我們的「Do the Right Thing」理念，誠摯邀請您與我們聯繫，探討品牌授權合作細節。
            </p>
            <a href="https://forms.gle/Pj1Rvr77yLt3CdQy9" target="_blank" rel="noopener noreferrer" 
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg">
              填寫意願調查表
            </a>
            <p className="mt-4 text-sm text-gray-400">我們將有專人回覆聯繫</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;