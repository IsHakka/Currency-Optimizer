# Currency Optimizer

外幣兌換比較平台，幫助用戶找到最佳的外幣兌換方案。

## 技術棧

- **前端框架**: React 18 + TypeScript
- **建置工具**: Vite
- **套件管理**: pnpm
- **狀態管理**: Zustand
- **UI 框架**: Tailwind CSS + shadcn/ui
- **圖表庫**: Recharts
- **HTTP 客戶端**: Axios

## 開發環境設置

1. 安裝依賴套件：
```bash
pnpm install
```

2. 啟動開發伺服器：
```bash
pnpm dev
```

3. 建置專案：
```bash
pnpm build
```

4. 程式碼格式化：
```bash
pnpm format
```

5. 程式碼檢查：
```bash
pnpm lint
```

## shadcn/ui 組件

專案已配置 shadcn/ui，可以使用以下命令添加組件：

```bash
pnpm dlx shadcn@latest add [component-name]
```

例如：
```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
```

## 專案結構

```
src/
├── components/     # React 組件
│   └── ui/         # shadcn/ui 組件
├── lib/            # 工具函數和配置
│   └── utils.ts    # shadcn/ui 工具函數
├── services/       # API 服務層
├── stores/         # Zustand 狀態管理
├── types/          # TypeScript 型別定義
├── utils/          # 自定義工具函數
├── App.tsx         # 主應用程式組件
├── main.tsx        # 應用程式入口點
└── index.css       # 全域樣式 (含 shadcn/ui CSS 變數)
```

## 功能特色

- 即時外幣兌換比較
- 多銀行手續費比較
- 智能推薦最佳兌換方案
- 匯率趨勢圖表
- 響應式設計支援行動裝置
- 本地儲存查詢歷史
