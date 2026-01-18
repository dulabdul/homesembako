import Image from 'next/image';
import { TESTIMONIALS } from '@/data/content';

export default function Testimonials() {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold'>Apa Kata Mereka?</h2>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h4 className='font-bold text-gray-900'>{testi.name}</h4>
                  <p className='text-xs text-text-muted'>{testi.role}</p>
                </div>
              </div>
              <p className='text-gray-600 italic'>{testi.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
