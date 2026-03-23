'use client';

import * as React from 'react';

type Toast = { id: number; title: string; description?: string };

const ToastContext = React.createContext<{ showToast: (title: string, description?: string) => void } | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const showToast = React.useCallback((title: string, description?: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className='fixed right-4 top-24 z-[100] flex w-[320px] max-w-[90vw] flex-col gap-2'>
        {toasts.map((toast) => (
          <div key={toast.id} className='rounded-2xl border border-[#3E1F00]/10 bg-white p-4 shadow-lg'>
            <p className='font-semibold text-[#3E1F00]'>{toast.title}</p>
            {toast.description ? <p className='mt-1 text-sm text-[#3E1F00]/70'>{toast.description}</p> : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}

