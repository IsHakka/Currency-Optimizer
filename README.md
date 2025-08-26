# 外幣兌換比較平台

一個類似 Google Flights 的外幣兌換比較平台，幫助用戶找到最佳的外幣兌換方案。

## 技術棧

- **前端框架**: React 18 + TypeScript
- **建置工具**: Vite
- **狀態管理**: Zustand
- **UI 框架**: Tailwind CSS + shadcn/ui
- **圖表庫**: Recharts
- **HTTP 客戶端**: Axios

## 開發環境設置

1. 安裝依賴套件：
```bash
npm install
```

2. 啟動開發伺服器：
```bash
npm run dev
```

3. 建置專案：
```bash
npm run build
```

4. 程式碼格式化：
```bash
npm run format
```

5. 程式碼檢查：
```bash
npm run lint
```

## 專案結構

```
src/
├── components/     # React 組件
├── services/       # API 服務層
├── stores/         # Zustand 狀態管理
├── types/          # TypeScript 型別定義
├── utils/          # 工具函數
├── App.tsx         # 主應用程式組件
├── main.tsx        # 應用程式入口點
└── index.css       # 全域樣式
```

## 功能特色

- 即時外幣兌換比較
- 多銀行手續費比較
- 智能推薦最佳兌換方案
- 匯率趨勢圖表
- 響應式設計支援行動裝置
- 本地儲存查詢歷史