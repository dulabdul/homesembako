'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';
import { SITE_CONFIG } from '@/data/content';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Produk', href: '#products' },
  { name: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}>
      <div className='container-custom flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center justify-start gap-0'>
          <div className='w-20 h-20 flex items-center justify-center aspect-square'>
            <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl'>
              HS
            </div>
          </div>
          <span
            className={`font-bold text-xl ${
              scrolled ? 'text-text-main' : 'text-primary-dark'
            }`}>
            Home Sembako
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-medium hover:text-primary transition-colors'>
              {link.name}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            external
            size='sm'>
            Pesan Sekarang
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden p-2'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='block py-2 text-base font-medium text-gray-700 hover:text-primary'
              onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            external
            className='w-full'>
            Pesan via WA
          </Button>
        </div>
      )}
    </nav>
  );
}
