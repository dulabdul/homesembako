const STATS = [
  { label: 'Pelanggan Puas', value: '1000+' },
  { label: 'Kota Dijangkau', value: '50+' },
  { label: 'Produk Terjual', value: '10k+' },
  { label: 'Mitra Toko', value: '200+' },
];

export default function StatsSection() {
  return (
    <div className='bg-primary py-12'>
      <div className='container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white'>
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className='space-y-2'>
            <div className='text-4xl font-bold'>{stat.value}</div>
            <div className='text-green-100 font-medium'>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
