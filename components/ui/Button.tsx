import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  // Kita tambahkan properti anchor tag manual agar tidak error di TS saat pakai href
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  // 1. Definisi Style Dasar
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';

  // 2. Variasi Warna (Variants)
  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg focus:ring-primary',
    secondary:
      'bg-secondary text-white hover:bg-orange-600 shadow-md focus:ring-secondary',
    outline:
      'border-2 border-primary text-primary bg-transparent hover:bg-primary/5 focus:ring-primary',
    white: 'bg-white text-primary hover:bg-gray-100 shadow-md focus:ring-white',
  };

  // 3. Variasi Ukuran (Sizes)
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // 4. Menggabungkan Class (Menggunakan cn dari lib/utils)
  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className // Class tambahan dari props akan menimpa default jika ada konflik
  );

  // LOGIKA RENDER:

  // A. Jika ada href dan external (misal: WhatsApp, Instagram) -> Render tag <a>
  if (href && external) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={props.target || '_blank'}
        rel={props.rel || 'noopener noreferrer'}
        // Casting props agar kompatibel dengan anchor
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  // B. Jika ada href tapi internal (navigasi dalam web) -> Render Next.js <Link>
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        // Casting props karena Link menerima props anchor standar
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  // C. Default -> Render tombol biasa <button>
  return (
    <button
      className={combinedClasses}
      {...props}>
      {children}
    </button>
  );
}
