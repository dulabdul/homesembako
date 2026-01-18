import Link from 'next/link';
import { SITE_CONFIG } from '@/data/content';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-300 py-12'>
      <div className='container-custom grid md:grid-cols-3 gap-8 mb-8'>
        <div>
          <h3 className='text-white text-xl font-bold mb-4'>
            {SITE_CONFIG.name}
          </h3>
          <p className='text-sm leading-relaxed mb-4'>
            Pusat grosir sembako terpercaya dengan harga termurah. Melayani
            pengiriman cepat dan aman ke seluruh Indonesia.
          </p>
        </div>
        <div>
          <h4 className='text-white font-bold mb-4'>Menu</h4>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link
                href='#hero'
                className='hover:text-white'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='#about'
                className='hover:text-white'>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href='#products'
                className='hover:text-white'>
                Produk
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-white font-bold mb-4'>Kontak</h4>
          <ul className='space-y-2 text-sm'>
            <li>
              WhatsApp:{' '}
              <a
                className='hover:text-white'
                href={`{https://wa.me/${SITE_CONFIG.whatsappNumber}}`}
                target='_blank'>
                {SITE_CONFIG.whatsappNumber}
              </a>
            </li>
            {/* <li>
              Alamat: <p>{SITE_CONFIG.address}</p>
            </li>
            <li>
              Email: <p>{SITE_CONFIG.email}</p>
            </li> */}
          </ul>
        </div>
      </div>
      <div className='container-custom pt-8 border-t border-slate-800 text-center text-xs text-slate-500'>
        &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
        reserved.
      </div>
    </footer>
  );
}
