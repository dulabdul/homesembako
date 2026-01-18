import Image from 'next/image';

export default function HeroSection() {
  return (
    // Tambahkan padding-top (pt-28 atau pt-32) agar tidak tertutup Navbar Fixed
    <section
      id='hero'
      className='pt-28 pb-10 bg-white'>
      <div className='container-custom'>
        {/* Container Banner
          - Rounded corners & Shadow agar mirip referensi card
          - Overflow hidden agar gambar tidak keluar radius
        */}
        <div className='relative w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100'>
          {/* Implementasi Gambar Responsif:
            - width/height diset sesuai rasio banner asli (misal 1200x500)
            - class 'w-full h-auto' menjaga aspek rasio tetap utuh di semua layar (Mobile tidak akan crop/zoom)
          */}
          <Image
            src='/images/hero1.jpg'
            alt='Banner Promo Home Sembako'
            width={1200}
            height={500}
            className='w-full h-auto object-cover block'
            priority // Load prioritas tinggi untuk LCP (Largest Contentful Paint)
            sizes='(max-width: 768px) 100vw, 1200px'
          />
        </div>
      </div>
    </section>
  );
}
