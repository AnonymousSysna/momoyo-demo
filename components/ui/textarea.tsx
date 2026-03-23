import * as React from 'react';
import { cn } from '@/lib/utils';

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'min-h-[120px] w-full rounded-xl border border-[#3E1F00]/20 bg-white px-4 py-3 text-sm text-[#3E1F00] placeholder:text-[#3E1F00]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]',
        className
      )}
      {...props}
    />
  );
}

