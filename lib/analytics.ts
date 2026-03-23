export type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params: EventPayload = {}) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', action, params);
}

export function trackCtaClick(label: string, page: string) {
  trackEvent('cta_click', { label, page });
}

export function trackMenuFilter(category: string) {
  trackEvent('menu_filter_click', { category });
}

export function trackFormSubmit(form: 'franchise' | 'contact') {
  trackEvent(`${form}_form_submit`, { form });
}

