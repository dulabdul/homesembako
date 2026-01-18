import { Truck, ShoppingBag, MousePointerClick, Award } from 'lucide-react';

const FEATURES = [
  {
    icon: ShoppingBag,
    title: 'Produk Lengkap',
    desc: 'Semua kebutuhan sembako tersedia dalam satu tempat dengan standar kualitas terbaik',
  },
  {
    icon: MousePointerClick,
    title: 'Pemesanan Mudah',
    desc: 'Proses pemesanan mudah lewat online cukup klik sekali, pesanan langsung diproses tanpa ribet',
  },
  {
    icon: Truck,
    title: 'Pengiriman Luas',
    desc: 'Layanan pengiriman produk kami cepat, aman, dan menjangkau berbagai daerah di Indonesia',
  },
];

export default function WhyChooseUs() {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='container-custom'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h2 className='text-3xl font-bold mb-4'>Keunggulan Layanan Kami</h2>
          <p className='text-text-muted'>www.homesembako.com</p>
        </div>

        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8'>
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-primary mb-6'>
                <feature.icon size={28} />
              </div>
              <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
              <p className='text-text-muted text-sm leading-relaxed'>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
