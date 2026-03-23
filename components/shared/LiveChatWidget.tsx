'use client';

import { useMemo, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cannedReplies = [
  'Thanks for messaging Momoyo. This is a demo live chat and a team member is not connected.',
  'For menu and prices, tap "Menu" in the navbar. You can also switch currency between PHP and USD.',
  'For franchise inquiries, please submit the Franchise form and we will contact you within 24-48 hours.',
];

export function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    'Hi! Welcome to Momoyo. This demo chat uses generic auto-replies.',
  ]);
  const [input, setInput] = useState('');

  const reply = useMemo(
    () => cannedReplies[messages.length % cannedReplies.length],
    [messages.length]
  );

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, `You: ${text}`, `Momoyo Bot: ${reply}`]);
    setInput('');
  };

  return (
    <div className='fixed bottom-5 right-4 z-40'>
      {open ? (
        <div className='w-[320px] rounded-2xl border border-[#3E1F00]/10 bg-white shadow-xl'>
          <div className='flex items-center justify-between rounded-t-2xl bg-[#FF6B6B] px-4 py-3 text-white'>
            <p className='text-sm font-semibold'>Momoyo Live Chat (Demo)</p>
            <button onClick={() => setOpen(false)} aria-label='Close chat'>
              <X className='h-4 w-4' />
            </button>
          </div>
          <div className='h-64 space-y-2 overflow-y-auto p-3 text-sm'>
            {messages.map((msg, idx) => (
              <div key={idx} className='rounded-xl bg-[#FFFDE7] px-3 py-2 text-[#3E1F00]'>
                {msg}
              </div>
            ))}
          </div>
          <div className='flex gap-2 border-t border-[#3E1F00]/10 p-3'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send();
              }}
              placeholder='Type your message...'
              className='h-10 flex-1 rounded-xl border border-[#3E1F00]/20 px-3 text-sm'
            />
            <Button className='h-10 px-4' onClick={send}>Send</Button>
          </div>
        </div>
      ) : (
        <button
          type='button'
          onClick={() => setOpen(true)}
          className='group flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B6B] text-white shadow-lg'
          aria-label='Open live chat'
        >
          <MessageCircle className='h-6 w-6' />
          <span className='pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-[#3E1F00] px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100'>
            Live chat
          </span>
        </button>
      )}
    </div>
  );
}
