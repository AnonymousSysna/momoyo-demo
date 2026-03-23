'use client';

import { useMemo, useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { BRANCHES } from '@/lib/branches';

const cities = ['All', ...new Set(BRANCHES.map((b) => b.city))];

export default function LocationsClient() {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('All');

  const filtered = useMemo(() => {
    return BRANCHES.filter((branch) => {
      const matchesCity = city === 'All' || branch.city === city;
      const query = search.toLowerCase();
      const matchesSearch =
        branch.name.toLowerCase().includes(query) ||
        branch.city.toLowerCase().includes(query) ||
        branch.address.toLowerCase().includes(query);
      return matchesCity && matchesSearch;
    });
  }, [search, city]);

  return (
    <section className='mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6'>
      <div>
        <h1 className='font-display text-4xl font-bold text-[#3E1F00]'>Store Locator</h1>
        <div className='mt-6 flex gap-3'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3E1F00]/50' />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search by city or branch name'
              className='h-11 w-full rounded-xl border border-[#3E1F00]/20 bg-white pl-9 pr-3 text-sm'
            />
          </div>
          <select value={city} onChange={(e) => setCity(e.target.value)} className='h-11 rounded-xl border border-[#3E1F00]/20 bg-white px-3 text-sm'>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className='mt-4 max-h-[620px] space-y-3 overflow-y-auto pr-1'>
          {filtered.map((branch) => (
            <div key={branch.id} className='rounded-2xl bg-white p-4 shadow-sm'>
              <h3 className='font-semibold text-[#3E1F00]'>{branch.name}</h3>
              <p className='mt-1 text-sm text-[#3E1F00]/75'>{branch.address}</p>
              <p className='mt-1 text-sm text-[#3E1F00]/75'>{branch.hours}</p>
              <p className='mt-1 text-sm text-[#3E1F00]/75'>{branch.phone}</p>
              <a href={branch.googleMapsUrl} target='_blank' rel='noreferrer' className='mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#FF6B6B]'>
                <MapPin className='h-4 w-4' /> Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='sticky top-[120px] h-[720px] overflow-hidden rounded-3xl bg-white'>
        <iframe
          title='Momoyo Philippines map'
          src='https://maps.google.com/maps?q=Philippines&t=&z=6&ie=UTF8&iwloc=&output=embed'
          className='h-full w-full'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </section>
  );
}

