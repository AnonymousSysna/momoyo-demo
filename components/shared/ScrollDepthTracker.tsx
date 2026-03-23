'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export function ScrollDepthTracker() {
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const seen = new Set<number>();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.round((scrollTop / max) * 100) : 100;

      milestones.forEach((mark) => {
        if (progress >= mark && !seen.has(mark)) {
          seen.add(mark);
          trackEvent('scroll_depth', { milestone: mark, path: window.location.pathname });
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}

