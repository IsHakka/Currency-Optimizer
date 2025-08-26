import React from 'react';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-foreground mb-8">
          外幣兌換比較平台
        </h1>
        <div className="text-center text-muted-foreground space-y-4">
          <p>專案基礎架構已建立完成</p>
          <p>準備開始開發核心功能</p>
          <div className="flex gap-4 justify-center mt-6">
            <Button>開始使用</Button>
            <Button variant="outline">了解更多</Button>
            <Button variant="secondary">查看文檔</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
