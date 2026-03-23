'use client';

import { useEffect, useState } from 'react';

function getSecondsLeft() {
  const now = new Date();
  const reset = new Date(now);
  reset.setHours(24, 0, 0, 0);
  return Math.max(0, Math.floor((reset.getTime() - now.getTime()) / 1000));
}

export function CountdownTimer() {
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(getSecondsLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const h = String(Math.floor((seconds ?? 0) / 3600)).padStart(2, '0');
  const m = String(Math.floor(((seconds ?? 0) % 3600) / 60)).padStart(2, '0');
  const s = String((seconds ?? 0) % 60).padStart(2, '0');

  return (
    <p className='mt-6 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#3E1F00]' suppressHydrationWarning>
      Flash Sale ends in: {seconds === null ? '--h --m --s' : `${h}h ${m}m ${s}s`}
    </p>
  );
}
