'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import {
  CURRENCY_STORAGE_KEY,
  DEFAULT_CURRENCY,
  formatCurrency,
  type Currency,
} from '@/lib/currency';

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (value: Currency) => void;
  formatPrice: (amountPhp: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window === 'undefined') return DEFAULT_CURRENCY;
    const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (stored === 'PHP' || stored === 'USD') return stored;
    return DEFAULT_CURRENCY;
  });

  const setCurrency = (value: Currency) => {
    setCurrencyState(value);
    localStorage.setItem(CURRENCY_STORAGE_KEY, value);
  };

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      setCurrency,
      formatPrice: (amountPhp: number) => formatCurrency(amountPhp, currency),
    }),
    [currency]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}
