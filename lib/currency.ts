export type Currency = 'PHP' | 'USD';

export const CURRENCY_STORAGE_KEY = 'momoyo-currency';
export const DEFAULT_CURRENCY: Currency = 'PHP';
export const PHP_TO_USD_RATE = Number(process.env.NEXT_PUBLIC_PHP_TO_USD_RATE ?? '0.018');

function toCurrencyAmount(amountPhp: number, currency: Currency) {
  if (currency === 'USD') {
    return amountPhp * PHP_TO_USD_RATE;
  }
  return amountPhp;
}

export function formatCurrency(amountPhp: number, currency: Currency) {
  const amount = toCurrencyAmount(amountPhp, currency);
  const hasDecimals = Math.abs(amount % 1) > 0.000001;
  const locale = currency === 'PHP' ? 'en-PH' : 'en-US';
  const isoCurrency = currency === 'PHP' ? 'PHP' : 'USD';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: isoCurrency,
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  }).format(amount);
}
