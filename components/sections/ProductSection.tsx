'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

import { Product } from '@/types';
import { SITE_CONFIG } from '@/data/content';
import { products } from '@/data/product';

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const getWaLink = (productName: string) => {
    const text = `Halo, saya ingin pesan ${productName}. Apakah stok tersedia?`;
    return `https://wa.me/${
      SITE_CONFIG.whatsappNumber
    }?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id='products'
      className='section-padding bg-white'>
      <div className='container-custom'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Pilihan Produk Kami</h2>
          <p className='text-text-muted'>
            Kami menyediakan sembako murah untuk kebutuhan toko, warung, UMKM,
            hingga reseller.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden group'>
              <div className='relative h-48 w-full bg-gray-100 overflow-hidden'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, 25vw'
                />
              </div>
              <div className='p-5'>
                <div className='flex items-center gap-1 text-yellow-400 mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill='currentColor'
                    />
                  ))}
                  <span className='text-xs text-gray-400 ml-1'>
                    ({product.rating})
                  </span>
                </div>
                <h3 className='font-bold text-lg mb-1'>{product.name}</h3>
                <p className='text-sm text-text-muted mb-4 line-clamp-2'>
                  {product.description}
                </p>

                <div className='flex flex-col gap-2'>
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    variant='outline'
                    className='w-full'
                    size='sm'>
                    Lihat Daftar Harga
                  </Button>
                  <Button
                    href={getWaLink(product.name)}
                    external
                    className='w-full'
                    size='sm'>
                    Pesan via WA
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Harga */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name || 'Detail Harga'}>
        {selectedProduct && (
          <div className='space-y-6'>
            <div className='flex flex-col md:flex-row gap-6 mb-6'>
              <div className='relative w-full md:w-1/3 h-40 rounded-xl overflow-hidden bg-gray-100'>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='w-full md:w-2/3'>
                <p className='text-text-muted'>{selectedProduct.description}</p>
                <div className='mt-4 p-3 bg-green-50 rounded-lg text-sm text-primary-dark'>
                  *Harga dapat berubah sewaktu-waktu. Hubungi WA untuk fix
                  order.
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              {selectedProduct.priceList.map((group, idx) => (
                <div
                  key={idx}
                  className='border rounded-xl overflow-hidden'>
                  <div className='bg-gray-50 px-4 py-2 font-bold text-sm text-gray-700 uppercase tracking-wide'>
                    {group.groupName}
                  </div>
                  <div className='divide-y divide-gray-100'>
                    {group.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className='px-4 py-3 flex justify-between items-center hover:bg-gray-50'>
                        <span className='font-medium text-gray-800'>
                          {item.name}
                        </span>
                        <span className='text-primary font-bold'>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='pt-4 border-t mt-4'>
              <Button
                href={getWaLink(selectedProduct.name)}
                external
                className='w-full justify-center'>
                Pesan {selectedProduct.name} Sekarang
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
