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
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(8),
  city: z.string().min(2),
  package: z.enum(['starter', 'standard', 'premium']),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

export function ApplicationForm() {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { package: 'starter' },
  });

  const onSubmit = handleSubmit(async (values) => {
    setLoading(true);
    const res = await fetch('/api/franchise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    setLoading(false);

    if (res.ok) {
      trackFormSubmit('franchise');
      showToast('Application sent', 'Our team will contact you within 24-48 hours.');
      reset();
    } else {
      showToast('Submission failed', 'Please try again in a moment.');
    }
  });

  return (
    <form id='franchise-form' onSubmit={onSubmit} className='rounded-3xl bg-white p-6 shadow-sm'>
      <h3 className='font-display text-2xl font-bold text-[#3E1F00]'>Franchise Application Form</h3>
      <div className='mt-5 grid gap-4 md:grid-cols-2'>
        <div>
          <Input placeholder='Full Name' {...register('fullName')} />
          {errors.fullName && <p className='mt-1 text-xs text-red-600'>Full name is required.</p>}
        </div>
        <div>
          <Input type='email' placeholder='Email' {...register('email')} />
          {errors.email && <p className='mt-1 text-xs text-red-600'>Enter a valid email.</p>}
        </div>
        <div>
          <Input placeholder='Phone' {...register('phone')} />
          {errors.phone && <p className='mt-1 text-xs text-red-600'>Phone is required.</p>}
        </div>
        <div>
          <Input placeholder='City / Province' {...register('city')} />
          {errors.city && <p className='mt-1 text-xs text-red-600'>City is required.</p>}
        </div>
      </div>

      <div className='mt-4'>
        <select
          className='h-11 w-full rounded-xl border border-[#3E1F00]/20 px-4 text-sm text-[#3E1F00]'
          {...register('package')}
        >
          <option value='starter'>Starter</option>
          <option value='standard'>Standard</option>
          <option value='premium'>Premium</option>
        </select>
      </div>

      <div className='mt-4'>
        <Textarea placeholder='Tell us about your target location and goals...' {...register('message')} />
        {errors.message && <p className='mt-1 text-xs text-red-600'>Message must be at least 10 characters.</p>}
      </div>

      <Button className='mt-5 w-full' type='submit' disabled={loading}>{loading ? 'Submitting...' : 'Submit Application'}</Button>
    </form>
  );
}

