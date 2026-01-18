import { SITE_CONFIG } from '@/data/content';
import Button from '../ui/Button';

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='py-20 bg-white'>
      <div className='container-custom text-center'>
        <h2 className='text-3xl font-bold mb-4'>Hubungi Kami!</h2>
        <p className='text-text-muted max-w-2xl mx-auto mb-8'>
          Stok update setiap hari, harga grosir terbaik menanti Anda. Jangan
          ragu untuk konsultasi kebutuhan sembako Anda.
        </p>
        <Button
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
          external
          size='lg'
          className='shadow-xl shadow-green-200'>
          Chat WhatsApp Sekarang
        </Button>
      </div>
    </section>
  );
}
