'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast';
import { trackFormSubmit } from '@/lib/analytics';

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

type Values = z.infer<typeof schema>;

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (values) => {
    setLoading(true);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    setLoading(false);

    if (res.ok) {
      trackFormSubmit('contact');
      showToast('Message sent', 'Thanks for reaching out.');
      reset();
    } else {
      showToast('Submission failed', 'Please try again in a moment.');
    }
  });

  return (
    <div className='mx-auto max-w-7xl px-4 py-10 md:px-6'>
      <h1 className='font-display text-4xl font-bold text-[#3E1F00]'>Contact Us</h1>
      <div className='mt-8 grid gap-6 md:grid-cols-2'>
        <form onSubmit={onSubmit} className='rounded-3xl bg-white p-6 shadow-sm'>
          <div className='space-y-4'>
            <div>
              <Input placeholder='Name' {...register('name')} />
              {errors.name && <p className='mt-1 text-xs text-red-600'>Name is required.</p>}
            </div>
            <div>
              <Input type='email' placeholder='Email' {...register('email')} />
              {errors.email && <p className='mt-1 text-xs text-red-600'>Enter a valid email.</p>}
            </div>
            <select className='h-11 w-full rounded-xl border border-[#3E1F00]/20 bg-white px-4 text-sm' {...register('subject')}>
              <option value='general'>General Inquiry</option>
              <option value='support'>Customer Support</option>
              <option value='partnership'>Partnership</option>
            </select>
            <div>
              <Textarea placeholder='Your message' {...register('message')} />
              {errors.message && <p className='mt-1 text-xs text-red-600'>Message must be at least 10 characters.</p>}
            </div>
            <Button className='w-full' type='submit' disabled={loading}>{loading ? 'Sending...' : 'Submit'}</Button>
          </div>
        </form>

        <div className='rounded-3xl bg-white p-6 shadow-sm'>
          <h2 className='text-2xl font-bold text-[#3E1F00]'>Reach Momoyo</h2>
          <div className='mt-4 space-y-2 text-sm text-[#3E1F00]/80'>
            <p>Address: Makati City, Metro Manila, Philippines</p>
            <p>Phone: +63 XXX XXX XXXX</p>
            <p>Email: hello@momoyoph.com</p>
            <p>Hours: Mon-Sun 9AM-10PM</p>
            <p>Social: Facebook, Instagram, TikTok, X</p>
          </div>
        </div>
      </div>

      <div className='mt-8 h-[360px] overflow-hidden rounded-3xl bg-white'>
        <iframe
          title='Momoyo contact map'
          src='https://maps.google.com/maps?q=Makati%20City&t=&z=12&ie=UTF8&iwloc=&output=embed'
          className='h-full w-full'
          loading='lazy'
        />
      </div>
    </div>
  );
}

