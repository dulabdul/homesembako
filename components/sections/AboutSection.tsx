import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='section-padding bg-white'>
      <div className='container-custom grid md:grid-cols-2 gap-12 items-center'>
        <div className='relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src='/images/about.png'
            alt='Gudang Home Sembako'
            fill
            className='object-cover'
          />
        </div>
        <div className='space-y-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-text-main'>
            Home Sembako <br />
            <span className='text-primary'>
              Pusat Toko Sembako Murah & Terpercaya
            </span>
          </h2>
          <div className='prose text-text-muted'>
            <p>
              Home Sembako adalah Pusat Toko Sembako Murah & Terpercaya yang
              menyediakan berbagai kebutuhan bahan pokok dengan harga
              kompetitif, kualitas terbaik, dan layanan pengiriman ke seluruh
              Indonesia. Kami melayani pembelian untuk toko, reseller, agen,
              perusahaan, restoran, hotel, hingga kebutuhan pribadi dalam jumlah
              besar.
            </p>
            <br />
            <p>
              Dengan sistem pemesanan yang mudah melalui WhatsApp, kami
              memastikan setiap pelanggan mendapatkan pengalaman belanja yang
              cepat, aman, dan nyaman. Stok sembako kami selalu tersedia dan
              diperbarui setiap hari.
            </p>
            <br />
            <p>
              Kami berkomitmen menjadi mitra terbaik bagi para pelaku usaha,
              dengan menyediakan produk berkualitas, harga transparan, serta
              pelayanan profesional. Kepercayaan pelanggan adalah prioritas
              utama kami selama bertahun-tahun menjalankan bisnis grosir
              sembako.
            </p>
          </div>

          <ul className='space-y-3'>
            {[
              'Harga Grosir Kompetitif',
              'Stok Selalu Ready',
              'Produk Berkualitas Terjamin',
            ].map((item, i) => (
              <li
                key={i}
                className='flex items-center gap-3 font-semibold text-text-main'>
                <CheckCircle className='text-primary w-6 h-6' />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
