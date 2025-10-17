# ICareU 艾可開發官方網站

## 專案概述
艾可開發股份有限公司 (ICareU International Co. Ltd.) 官方網站，專注於企業團購、品牌代理、整合行銷服務。

## 網站架構

### 主要頁面
- **首頁** (`index.html`) - 企業形象展示與服務介紹
- **關於艾可** (`aboutus.html`) - 公司介紹與經營理念
- **整合行銷** (`marketing.html`) - 行銷服務介紹
- **企業團購** (`groupbuy.html`) - 團購服務說明
- **嚴選品牌** (`brands.html`) - 品牌代理與經銷合作
- **企業社會責任** (`csr.html`) - CSR 相關資訊
- **聯絡我們** (`contactus.html`) - 聯絡資訊
- **夥伴招募** (`job.html`) - 人才招募

### 技術架構

#### 前端技術
- **HTML**: XHTML 1.0 Transitional
- **CSS**: 自定義樣式表 + 響應式設計
- **JavaScript**: jQuery 1.7.1 + 自定義插件
- **字體**: OpenSans, MuseoSlab (Web Font)

#### 主要功能
- 響應式輪播橫幅 (Revolution Slider)
- 社群分享功能 (AddThis)
- Google Analytics 追蹤
- Facebook 粉絲頁整合
- LINE@ 生活圈整合

#### 外部依賴
- **jQuery 1.7.1** - JavaScript 函式庫
- **Revolution Slider** - 輪播橫幅插件
- **AddThis** - 社群分享工具
- **Google Analytics** - 網站分析
- **Google Tag Manager** - 標籤管理
- **Facebook SDK** - 社群整合
- **Font Awesome** - 圖示字體

### 檔案結構
```
├── index.html              # 首頁
├── aboutus.html            # 關於我們
├── marketing.html          # 整合行銷
├── groupbuy.html           # 企業團購
├── brands.html             # 嚴選品牌
├── csr.html                # 企業社會責任
├── contactus.html          # 聯絡我們
├── job.html                # 夥伴招募
├── css/                    # 樣式表
│   ├── mestro.css         # 主要樣式
│   ├── style.css          # 額外樣式
│   ├── banner_style.css   # 橫幅樣式
│   └── fancybox.css       # 燈箱樣式
├── js/                     # JavaScript 檔案
│   ├── jquery.min.js      # jQuery 函式庫
│   ├── jquery.mestro.plugins.min.js
│   └── jquery.mestro.revolution.min.js
├── images/                 # 圖片資源
├── fonts/                  # 字體檔案
├── pro_drop_1/            # 下拉選單樣式
└── new/                   # 新功能模組
```

### 業務特色
1. **企業團購服務** - 提供辦公室團購解決方案
2. **品牌代理** - 專業品牌代理與經銷服務
3. **整合行銷** - 全方位的行銷顧問服務
4. **社群經營** - LINE@ 生活圈與 Facebook 粉絲頁

### 聯絡資訊
- **電話**: 03-5735430
- **傳真**: 03-5735438
- **地址**: 300 新竹市東區公道五路二段435號
- **信箱**: sales@icareu.tw
- **LINE@**: @rmj1050l

## 開發注意事項

### 技術債務
1. **過時的 jQuery 版本** (1.7.1) - 建議升級至較新版本
2. **混合的 HTTP/HTTPS 資源** - 需要統一使用 HTTPS
3. **響應式設計** - 需要針對行動裝置進行優化
4. **圖片優化** - 大量圖片需要壓縮與 WebP 格式轉換

### 建議改進方向
1. **現代化前端架構** - 考慮使用 Vue.js 或 React
2. **效能優化** - 實作 CDN、圖片延遲載入
3. **SEO 優化** - 改善 Meta 標籤與結構化資料
4. **安全性** - 實作 HTTPS 與安全性標頭
5. **行動端優化** - 改善行動裝置使用體驗

## 版權聲明
Copyright 2023 © 艾可開發股份有限公司 ICareU International Co. Ltd. All rights reserved.

