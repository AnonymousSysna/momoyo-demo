'use client';

import { CurrencyProvider } from '@/components/providers/CurrencyProvider';
import { ToastProvider } from '@/components/ui/toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      <ToastProvider>{children}</ToastProvider>
    </CurrencyProvider>
  );
}
