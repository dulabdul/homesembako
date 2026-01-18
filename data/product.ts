export interface ProductItem {
  name: string;
  price: string;
}

export interface ProductGroup {
  groupName: string;
  items: ProductItem[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  priceList: ProductGroup[];
}

export const products: Product[] = [
{
    id: "beras-premium",
    name: "Beras Premium",
    category: "Beras",
    description: "Kami menyediakan beras kualitas premium, medium, pulen, dan wangi",
    image: "/images/products/beras.png",
    rating: 5,
priceList: [
      {
        groupName: "Merek Beras (50KG)",
        items: [
          { name: "Beras Gucimas Solo 50 Kg", price: "Rp 488.750" },
          { name: "Beras IR Cap Jago Pelung 50 Kg", price: "Rp 500.000" },
          { name: "Beras Karya Muda (KM) 50 Kg", price: "Rp 505.000" },
          { name: "Beras Cap Topi Koki 50 Kg", price: "Rp 540.000" },
          { name: "Beras Setra Ramos BMW Cianjur 50 Kg", price: "Rp 550.000" },
          { name: "Beras Cap Petruk 50 Kg", price: "Rp 565.000" },
          { name: "Beras Super Cap Ahmad 50 Kg", price: "Rp 570.000 – 625.000" },
          { name: "Beras Slyp Oyster 50 Kg", price: "Rp 607.500" },
          { name: "Beras Cap Walet 50 Kg", price: "Rp 430.000" },
          { name: "Beras Labuan Bajo 50 Kg", price: "Rp 450.000" },
          { name: "Beras Pandan Wangi 50 Kg", price: "Rp 475.000" },
          { name: "Beras LS 50 Kg", price: "Rp 510.000" },
          { name: "Beras Pera IR Merk Mercy 50 Kg", price: "Rp 590.000" },
          { name: "Beras IR 42 Super 50 Kg", price: "Rp 600.000" },
          { name: "Beras IR 42 KM 50 Kg", price: "Rp 575.000" },
          { name: "Beras Bola Mas IR 64 50 Kg", price: "Rp 450.000" },
          { name: "Beras RW IR 64 50 Kg", price: "Rp 540.000" },
          { name: "Beras LA IR 64 50 Kg", price: "Rp 520.000" },
          { name: "Beras GB IR 64 50 Kg", price: "Rp 542.000" },
          { name: "Beras Suling Mas 50 Kg", price: "Rp 786.000" },
          { name: "Beras TU IR 64 50 Kg", price: "Rp 530.000" },
          { name: "Beras LL IR 64 50 Kg", price: "Rp 495.000" },
          { name: "Beras SG IR 64 50 Kg", price: "Rp 505.000" },
          { name: "Beras SA IR 64 50 Kg", price: "Rp 515.000" },
          { name: "Beras ADT IR 64 50 Kg", price: "Rp 480.000" },
          { name: "Beras SA IR 64 50 Kg", price: "Rp 450.000" },
          { name: "Beras SJ IR 64 50 Kg", price: "Rp 450.000" },
          { name: "Beras FM IR 64 50 Kg", price: "Rp 440.000" },
          { name: "Beras SML IR 64 50 Kg", price: "Rp 445.000" },
          { name: "Beras HM IR 64 50 Kg", price: "Rp 435.000" },
          { name: "Beras Wayang IR 64 50 Kg", price: "Rp 420.000" },
          { name: "Beras Merpati 50 Kg", price: "Rp 420.000" },
          { name: "Beras KND IR 64 50 Kg", price: "Rp 400.000" }
        ]
      },
      {
        groupName: "Merk Beras (25 KG)",
        items: [
          { name: "Beras Cap Duren 25 Kg", price: "Rp 195.000" },
          { name: "Beras Cap Piala 25 Kg", price: "Rp 190.000" },
          { name: "Beras Cap Ketupat 25 Kg", price: "Rp 170.000" },
          { name: "Beras Cap Beras Mu 25 Kg", price: "Rp 200.000" },
          { name: "Beras Cap Rojo Lele 25 Kg", price: "Rp 180.000" },
          { name: "Beras Cap Maskot 25 Kg", price: "Rp 170.000" },
          { name: "Beras Bramo Cap Raja Udang 25 Kg", price: "Rp 200.000" },
          { name: "Beras Cap Mangga 25 Kg", price: "Rp 173.000" },
          { name: "Beras Cap Beruang Merah 25 Kg", price: "Rp 207.000" },
          { name: "Beras Cap Lahap 25 Kg", price: "Rp 192.000" },
          { name: "Beras Cap Kelapa 25 Kg", price: "Rp 174.000" },
          { name: "Beras Cap Nuri 25 Kg", price: "Rp 172.000" },
          { name: "Beras Cap Kereta Romawi 25 Kg", price: "Rp 185.000" },
          { name: "Beras Cap Pelangi 25 Kg", price: "Rp 200.000" }
        ]
      },
      {
        groupName: "Merk Beras (5KG)",
        items: [
          { name: "Beras Cap Bunga 5 KG Medium", price: "Rp. 47.300" },
          { name: "Beras Wanemo 5 KG", price: "Rp. 58.000" },
          { name: "Beras Kepala Super Rojolele 5 KG", price: "Rp. 50.000" },
          { name: "Beras Sintanola 5 KG", price: "Rp. 57.000" },
          { name: "Beras Sania 5 KG", price: "Rp. 58.200" },
          { name: "Beras Asli Solo 5 KG Premium Super Kepala", price: "Rp. 60.000" },
          { name: "Beras Lumbung Padi Indonesia 5 KG", price: "Rp. 49.000" },
          { name: "Beras Jagung Cap Kelapa Kualitas Super 5 KG", price: "Rp. 37.000" },
          { name: "Beras Ramos Kemasan Cap Kembang 5 KG", price: "Rp. 55.000" },
          { name: "Beras Kepala Super Cap Durian Petruk 5 KG", price: "Rp. 60.000" },
          { name: "Beras Piala Dunia 5 KG", price: "Rp. 55.000" },
          { name: "Beras Pandan Wangi Cap Tiga Mangga 5 KG", price: "Rp. 60.000" },
          { name: "Beras Raja Udang 5 KG", price: "Rp. 52.000" },
          { name: "Beras Cap Beruang Kuning 5 KG", price: "Rp. 48.000" },
          { name: "Beras Lahap 5 KG", price: "Rp. 55.000" },
          { name: "Beras Bengawan Super Cap Kelapa Muda 5 KG", price: "Rp. 50.000" },
          { name: "Beras Burung Nuri 5 KG", price: "Rp. 54.000" }
        ]
      }
    ]
  },
  {
    id: "minyak-goreng",
    name: "Minyak Goreng",
    category: "Minyak",
    description: "Minyak goreng berbagai merek terpercaya tersedia lengkap dengan harga grosir",
    image: "/images/products/minyak.png",
    rating: 5,
priceList: [
      {
        groupName: "(Minyak Bimoli)",
        items: [
          { name: "Harga 1 Karton Bimoli Minyak Goreng Botol ( Isi-12 Kemasan Botol 1 Liter )", price: "Rp. 140.500" },
          { name: "Harga 1 Karton Bimoli Minyak Goreng Klasik ( Isi-6 Kemasan Pouch 2 Liter )", price: "Rp. 150.777" },
          { name: "Harga 1 Karton Bimoli N. Kolesterol ( Isi-6 Kemasan 2 Liter )", price: "Rp. 150.000" },
          { name: "Harga 1 Karton Bimoli Special Refill ( Isi-6 Kemasan 2 Liter )", price: "Rp. 155.200" },
          { name: "Harga 1 Karton Bimoli Spesial Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 150.500" },
          { name: "Harga 1 Karton Minyak Goreng Bimoli Klasik Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 150.100" },
          { name: "Harga 1karton Minyak Goreng Bimoli (Isi 4 Kemasan 5 Liter)", price: "Rp. 220.000" },
          { name: "Harga Minyak Goreng Bimoli (Kemasan Jerigen.18 Liter)", price: "Rp. 230.000" }
        ]
      },
      {
        groupName: "(Minyak Tropical)",
        items: [
          { name: "Harga 1 Karton Tropical Non Kolesterol ( Isi-12 Kemasan 1 Liter )", price: "Rp. 145.500" },
          { name: "Harga 1 Karton Tropical Non Kolesterol ( Isi-6 Kemasan 2 Liter )", price: "Rp. 144.500" }
        ]
      },
      {
        groupName: "(Minyak Sunco)",
        items: [
          { name: "Harga 1 Karton Minyak Goreng Sunco ( Isi-12 Kemasan Pouch 1 Liter )", price: "Rp. 135.500" },
          { name: "Harga 1 Karton Minyak Goreng Sunco ( Isi-6 Kemasan Pouch 2 Liter )", price: "Rp. 133.800" },
          { name: "Harga 1 Karton Harga 1 Karton Minyak Goreng Sunco Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.500" },
          { name: "Harga 1 Karton Minyak Goreng Sunco Refill ( Isi-6 Kemasan 2 Liter )", price: "Rp.127.800" }
        ]
      },
      {
        groupName: "(Minyak Kunci Mas)",
        items: [
          { name: "Harga 1 Karton Minyak Goreng Kunci Mas ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.800" },
          { name: "Harga 1 Karton Minyak Goreng Kunci Mas Refill ( Isi-6 Kemasan 2 Liter Pouch )", price: "Rp. 130.500" }
        ]
      },
      {
        groupName: "(Minyak Avena)",
        items: [
          { name: "Harga 1 Karton Avena Minyak Goreng ( Is-12 Kemasan 1 Liter Pouch )", price: "Rp. 130.700" },
          { name: "Harga 1 Karton Avena Minyak Goreng ( Isi-6 Kemasan 2 Liter Pouch )", price: "Rp. 129.700" },
          { name: "Harga 1 Karton Avena Minyak Goreng ( Isi-4 Kemasan Jerigen 5 Lter )", price: "Rp. 190.500" }
        ]
      },
      {
        groupName: "(Minyak Filma)",
        items: [
          { name: "Harga 1 Karton Filma Minyak Goreng Non Kolesterol Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.200" },
          { name: "Harga 1 Karton Filma Refill ( Isi-6 Kemasan 2 Liter Kemasan Isi Ulang )", price: "Rp. 130.000" },
          { name: "Harga Minyak Goreng Curah Biasa 1 Kg", price: "Rp. 15.000" }
        ]
      },
      {
        groupName: "(Minyak Sania)",
        items: [
          { name: "Harga 1 Karton Sania Minyak Goreng ( Isi-12 Kemasan 1 Liter Pouch )", price: "Rp.132.500" },
          { name: "Harga 1 Karton Sania Minyak Goreng ( Isi-6 Kemasan 2 Liter Pouch )", price: "Rp. 127.800" },
          { name: "Harga 1 Karton Sania Minyak Goreng ( Isi-4 Kemasan 5 Lter )", price: "Rp. 220.500" },
          { name: "Harga 1 Karton Sania Minyak Goreng Non Kolestrol ( Isi-6 Kemasan 2 Liter )", price: "Rp. 132.500" }
        ]
      },
      {
        groupName: "(Minyak Fortune)",
        items: [
          { name: "Harga 1 Karton Fortune Minyak Goreng Refill Pouch ( Isi-12 Kemasan 1 Liter )", price: "Rp. 132.800" },
          { name: "Harga 1 Karton Fortune Minyak Goreng Refill Pouch ( Isi-6 Kemasan 2 Liter )", price: "Rp. 130.200" },
          { name: "Harga 1 Karton Fortune Minyak Goreng Djerigen ( Isi-4 Kemasan 5 Liter )", price: "Rp. 171.000" }
        ]
      },
      {
        groupName: "(Minyak Hermart)",
        items: [
          { name: "Harga 1 Karton Hemart & Higienis (12) Kemasan 1 Liter", price: "Rp. 125.000" },
          { name: "Harga Hemart Minyak Goreng 2000 Ml", price: "Rp. 30.000" }
        ]
      },
      {
        groupName: "(Minyak Madina)",
        items: [
          { name: "Harga 1 Karton Minyak Goreng Madina ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.000" },
          { name: "Harga 1 Karton Minyak Goreng Madina ( Isi-6 Kemasan 2 Liter )", price: "Rp.127.500" },
          { name: "Harga 1 Karton Minyaoreng Madina ( Isi- 4 Kemasan 5 Liter )", price: "Rp. 220.200" }
        ]
      },
      {
        groupName: "(MINYAK KITA)",
        items: [
          { name: "Untuk 1 Liter", price: "Harga 130/Dus Isi 12" },
          { name: "Untuk 2 Liter", price: "Harga 132/Dus Isi 6" }
        ]
      }
    ]
  },

  {
    id: "tepung-terigu",
    name: "Tepung Terigu",
    category: "Tepung",
    description: "Tersedia tepung terigu untuk roti, kue, gorengan, dan kebutuhan usaha kuliner",
    image: "/images/products/tepung.png",
    rating: 5,
priceList: [
      {
        groupName: "Merk Produk",
        items: [
          { name: "Pita Merah / Karung", price: "Rp.135.000" },
          { name: "Beruang Biru / Karung", price: "Rp.127.000" },
          { name: "Beruang Biru ( New) / Karung", price: "Rp.134.000" },
          { name: "Tali Emas Biru / Karung", price: "Rp.132.000" },
          { name: "Tali Emas Biru ( New) / Karung", price: "Rp.138.000" },
          { name: "Pita Merah / Karung", price: "Rp.145.000" },
          { name: "Tali Emas Kuning / Karung", price: "Rp.135.000" },
          { name: "Segitiga Biru/ Karung", price: "Rp.132.000" },
          { name: "Tepung Terigu Segitiga Biru 1kg", price: "Rp.9, 900/ Kg" },
          { name: "Tepung Terigu Cakra Kembar 1kg", price: "Rp .9.100/ Kg" },
          { name: "Tepung Terigu Kunci Mas 1kg", price: "Rp 9.000/ Kg" },
          { name: "Tepung Maizena ( Segala Uk)", price: "Rp 10.000/ Kg" },
          { name: "Rose Brand Tepung Beras Uk 250gr", price: "Rp 7.000" },
          { name: "Rose Brand Tepung Beras Uk 500gr", price: "Rp 11.000" },
          { name: "Rose Brand Tepung Ketan Putih Uk 500gr", price: "Rp 7.000" }
        ]
      }
    ]
  },
  {
    id: "mie-instan-sedap",
    name: "Mie Sedap Instan",
    category: "Mie",
    description: "Kami menjual Mie Sedap dengan harga grosir, cocok untuk reseller dan toko",
    image: "/images/products/sedap.png",
    rating: 5,
priceList: [
      {
        groupName: "Mie Sedaap",
        items: [
          { name: "Mie Sedaap Ayam Bawang – 1 Karton : 40 Bungkus", price: "Rp 70.500" },
          { name: "Mie Sedaap Ayam Krispi – 1 Karton : 40 Bungkus", price: "Rp 70.500" },
          { name: "Mie Sedaap Ayam Spesial – 1 Karton : 40 Bungkus", price: "Rp 70.500" },
          { name: "Mie Sedaap Baso Cup – 1 Karton : 24 Cup", price: "Rp 70.500" },
          { name: "Mie Sedaap Baso Spesial – 1 Karton : 24 Bungkus", price: "Rp 70.500" },
          { name: "Mie Sedaap Goreng – 1 Karton : 40 Bungkus", price: "Rp 78.500" },
          { name: "Mie Sedaap Goreng Cup – 1 Karton : 24 Cup", price: "Rp 70.500" },
          { name: "Mie Sedaap Kare Spesial – 1 Karton : 40 Bungkus", price: "Rp.70.500" },
          { name: "Mie Sedaap Soto – 1 Karton : 40 Bungkus", price: "Rp 64.000" },
          { name: "Mie Sedaap Soto Cup – 1 Karton : 24 Cup", price: "Rp 70.500" }
        ]
      }
    ]
  },

  {
    id: "kopi-sachet",
    name: "Kopi Sachet",
    category: "Minuman",
    description: "Kami menyediakan kopi sachet pilihan lengkap dengan harga terjangkau",
    image: "/images/products/kopi-sachet.png",
    rating: 5,
priceList: [
      {
        groupName: "Merk & Harga",
        items: [
          { name: "Good Day Biasa", price: "Rp.231.000 1 Karton=5 Pak" },
          { name: "Good Day Capucino Biasa", price: "Rp.155.500 1 Karton=12 Renteng" },
          { name: "Good Day Capucino White", price: "Rp.153.000 1 Karton=12 Renteng" },
          { name: "Good Day Mocafrio", price: "Rp.189.000 1 Karton=12 Renteng" },
          { name: "Indocafé Capucino", price: "Rp.374.000 1 Karton=5 Pak" },
          { name: "Indocafé Coffeemix", price: "Rp.487.500 1 Karton=5 Pak" },
          { name: "Kapal Api Grande", price: "Rp.106.500 1 Karton=12 Renteng" },
          { name: "Kapal Api Grande White Coffie", price: "Rp.103.000 1 Karton=12 Renteng" },
          { name: "Kapal Api Kopi Susu", price: "Rp.103.000 1 Karton=12 Renteng" },
          { name: "Kapal Api Less Sugar", price: "Rp.98.000 1 Karton=12 Renteng" },
          { name: "Kapal Api Mantap", price: "Rp.96.500 1 Karton=12 Renteng" },
          { name: "Kapal Api Spesial 7 Gr", price: "Rp.82.000 1 Karton=20 Pak" },
          { name: "Kapal Api Spesial 30 Gr", price: "Rp.211.500 1 Karton=10 Pak" },
          { name: "Kapal Api Spesial 65 Gr", price: "Rp.211.500 1 Karton=5 Pak" },
          { name: "Kapal Api Spesial 165 Gr", price: "Rp.201.500 1 Karton=20 Bungkus" },
          { name: "Kapal Api Spesial 380 Gr", price: "Rp.160.000 1 Karton=9 Bungkus" },
          { name: "Kapal Api Spesial Mix 25 Gr", price: "Rp.106.500 1 Karton=12 Pak" },
          { name: "Kopi ABC Mocca", price: "Rp.106.500 1 Karton=12 Renteng" },
          { name: "Kopi ABC Plus", price: "Rp.50.300 1 Karton=12 Renteng" },
          { name: "Kopi ABC Susu", price: "Rp.109.500 1 Karton=12 Renteng" },
          { name: "Kopi ABC WC/WM Instan", price: "Rp.109.500 1 Karton=12 Renteng" },
          { name: "Kopi Ayam Merak", price: "Rp.99.500 1 Karton=12 Renteng" },
          { name: "Kopi Fresco Krim Susu", price: "Rp.77.000 1 Karton=10 Renteng" },
          { name: "Kopi Fresco Mocca", price: "Rp.77.500 1 Karton=8 Renteng" },
          { name: "Kopi Jahe Susu Sidomuncul (Wali)", price: "Rp.99.500" }
        ]
      }
    ]
  },
   {
    id: "teh-kemasan",
    name: "Teh Kemasan",
    category: "Minuman",
    description: "Kami menyediakan teh celup, teh serbuk, dan lain-lain dengan pilihan lengkap",
    image: "/images/products/teh.png",
    rating: 5,
priceList: [
      {
        groupName: "Merk & Harga",
        items: [
          { name: "Teh 2 Tang Super", price: "Rp 350.000 1 Bal=20 Pak" },
          { name: "Teh Celup Sosro Kotak Merah 30", price: "Rp 339.000 1 Karton=100 Dus" },
          { name: "Teh 2 Tang Premium 150 Gr", price: "Rp 225.000 1 Bal=30 Bungkus" },
          { name: "Teh Sari Wangi Sachet TB 5", price: "Rp 177.000 1 Karton=24 Lusin" },
          { name: "Teh Celup Sosro Kotak Merah 15", price: "Rp 159.000 1 Karton=100dus" },
          { name: "Teh Hijau 2 Tang", price: "Rp.156.000 1 Karton=24 Dus" },
          { name: "Teh Catut Ijo Kecil 40 Gr", price: "Rp.145.000 1 Bal=10 Pak" },
          { name: "Teh Catut Ijo Besar 80 Gr", price: "Rp.143.000 1 Bal=10 Pak" },
          { name: "Teh Sari Wangi Kotak 25’S", price: "Rp.141.000 1 Karton=48 Dus" },
          { name: "Teh Celup Poci Asli/Vanila 25S", price: "Rp.136.000 1 Karton=50 Dus" },
          { name: "Teh 2 Tang Ijo Kecil 40 Gr", price: "Rp.129.000 1 Bal = 10 Pak" },
          { name: "Teh Sari Murni Sachet", price: "Rp.126.500 1 Karton=15 Pak" },
          { name: "Teh Celup Catut Kotak Merah", price: "Rp.123.500 1 Karton=50 Dus" },
          { name: "Teh Joglo", price: "Rp.118.000 1 Bal=10 Pak" },
          { name: "Teh Catut Merah", price: "Rp.115.000 1 Bal=10 Pak" },
          { name: "Teh Celup Catut Kotak Biru", price: "Rp.101.500 1 Karton=50 Dus" },
          { name: "Teh Celup Sosro Sachet", price: "Rp.98.500 1 Karton=8 Pak" },
          { name: "Teh Celup 2 Tang Melati", price: "Rp.92.000 1 Karton=24 Dus" },
          { name: "Teh Celup Catut Sachet", price: "Rp.87.300 1 Karton=8 Pak" },
          { name: "Teh 2 Tang Ijo Besar 80 Gr", price: "Rp.66.000" }
        ]
      }
    ]
  },
  {
    id: "gula-kemasan",
    name: "Gula Pasir Kemasan",
    category: "Gula",
    description: "Kami menyediakan gula pasir berkualitas dalam berbagai ukuran kemasan",
    image: "/images/products/gula.png",
    rating: 5,
priceList: [
      {
        groupName: "ROSE BRAND",
        items: [
          { name: "1 Karton Isi 20 Pack.", price: "Harga Rp. 220.000" }
        ]
      },
      {
        groupName: "GULAKU PREMIUM HIJAU/KUNING",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 267.000" }
        ]
      },
      {
        groupName: "SANIA",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 220.000" }
        ]
      },
      {
        groupName: "RAJA GULA",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULARE",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "MATAHARI MERAH",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "MK",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 235.000" }
        ]
      },
      {
        groupName: "MANIS KITA",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GMP GUNUNG MADU",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 235.000" }
        ]
      },
      {
        groupName: "FS PREMIUM Gula Kristal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "SODAQO Gula Pasir Lokal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULA PRAI Gula Pasir Kasar",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "SUS Gula Pasir Lokal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULA PASIR CURAH Gula Pasir Lokal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "PSM Gula Premium",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 250.000" }
        ]
      },
      {
        groupName: "SUGARO Gula Pasir",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULASIR Gula Pasir Tebu",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "VALUE PLUS Gula Pasir",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      }
    ]
  },
    {
    id: "gula-kemasan",
    name: "Gula Pasir Kiloan",
    category: "Gula",
    description: "Kami menyediakan gula pasir berkualitas dalam berbagai ukuran kemasan",
    image: "/images/products/gula-pasir.png",
    rating: 5,
  priceList: [
      {
        groupName: "GULA 50KG",
        items: [
          { name: "Gula Pasir GMP Putih", price: "Rp. 530.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir GMP Kuning", price: "Rp. 510.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir SUJ Putih", price: "Rp. 510.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir SUJ Kuning", price: "Rp. 500.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir Gulaku Putih", price: "Rp.530.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir Gulaku Kuning", price: "Rp.510.000.-/ Sak 50 Kg" },
          { name: "Gula MSI Medan Putih", price: "Rp. 495.000.-/ Sak 50 Kg" },
          { name: "Gula MSI Medan Kuning", price: "Rp. 480.000.-/ Sak 50Kg" },
          { name: "Gula KBA Putih", price: "Rp. 502.000.-/ Sak 50 Kg" },
          { name: "Gula KBA Kuning", price: "Rp. 470.000.-/ Sak 50 Kg" },
          { name: "Gula PTPN", price: "Rp. 495.000,-/ Sak 50 Kg" },
          { name: "Gula ILP Lampung", price: "Rp. 520.000,-/ Sak 50 Kg" },
          { name: "Gula GKP Cirebon", price: "Rp. 490.000,-/ Sak 50 Kg" },
          { name: "Gula Pasir Indosugar", price: "Rp. 500.000,-/ Sak 50 Kg" },
          { name: "Gula Pasir Inti Manis Cilegon", price: "Rp. 490.000,-/ Sak 50 Kgs" }
        ]
      },
      {
        groupName: "GULA 25KG",
        items: [
          { name: "Gula Pasir GMP Putih", price: "Rp. 330.000.-/ Sak 25 Kg" },
          { name: "Gula Pasir GMP Kuning", price: "Rp. 320.000.-/ Sak 25 Kg" },
          { name: "Gula Pasir SUJ Putih", price: "Rp. 320.000.-/ Sak 25 Kg" },
          { name: "Gula Pasir SUJ Kuning", price: "Rp. 315.000.-/ Sak 25 Kg" },
          { name: "Gula Pasir Gulaku Putih", price: "Rp.330.000.-/ Sak 25 Kg" },
          { name: "Gula Pasir Gulaku Kuning", price: "Rp.320.000.-/ Sak 25 Kg" },
          { name: "Gula MSI Medan Putih", price: "Rp. 312.500.-/ Sak 25 Kg" },
          { name: "Gula MSI Medan Kuning", price: "Rp. 305.000.-/ Sak 25 Kg" },
          { name: "Gula KBA Putih", price: "Rp. 316.000.-/ Sak 25 Kg" },
          { name: "Gula KBA Kuning", price: "Rp. 300.000.-/ Sak 25 Kg" },
          { name: "Gula PTPN", price: "Rp. 310.000,-/ Sak 25 Kg" },
          { name: "Gula ILP Lampung", price: "Rp. 325.000,-/ Sak 25 Kg" },
          { name: "Gula GKP Cirebon", price: "Rp. 310.000,-/ Sak 25 Kg" },
          { name: "Gula Pasir Indosugar", price: "Rp. 315.000,-/ Sak 25 Kg" },
          { name: "Gula Pasir Inti Manis Cilegon", price: "Rp. 310.000,-/ Sak 25 Kg" }
        ]
      }
    ]
},
 {
    id: "mie-instan-indomie",
    name: "Indomie Mie Instan",
    category: "Mie",
    description: "Kami menjual Indomie dengan harga grosir, cocok untuk reseller dan toko",
    image: "/images/products/indomie.png",
    rating: 5,
priceList: [
      {
        groupName: "Indomie",
        items: [
          { name: "Indomie Mie Instant Rasa Ayam Bawang 69g", price: "Rp.75.000 / DUS" },
          { name: "Indomie Mie Instant Rasa Soto Mie 75g", price: "Rp. 78.000 / DUS" },
          { name: "Indomie Mie Goreng", price: "Rp. 75.000 / DUS" },
          { name: "Indomie Rebus Rasa Ayam Spesical", price: "Rp. 75.000 / DUS" },
          { name: "Indomie Rebus Rasa Ayam Bawang", price: "Rp. 70.000 / DUS" },
          { name: "Indomie Rebus Rasa Kaldu Ayam", price: "Rp. 70.000 / DUS" },
          { name: "Indomie Mi Goreng Rasa Cabe Ijo 85g", price: "Rp. 70.000 / DUS" },
          { name: "Indomie Kari Ayam Bawang Goreng 72g", price: "Rp. 70.000 / DUS" },
          { name: "Indomie Jumbo Goreng Ayam Panggang 127g", price: "Rp.85.000/ DUS" },
          { name: "Indomie Mie Keriting Ayam Panggang 90g", price: "Rp. 90.000/ DUS" },
          { name: "Indomie Mie Instant Rasa Mie Kocok Bandung 75g", price: "Rp.90.000/ DUS" },
          { name: "Indomie Jumbo Goreng Special 129g", price: "Rp. 78.000/ DUS" },
          { name: "Indomie Mie Keriting Goreng Special 90g", price: "Rp. 85.000/ DUS" },
          { name: "Indomie Mie Goreng Vegan 85g", price: "Rp. 64.000/ DUS" },
          { name: "Indomie Mie Instant Rasa Ayam Special 68g X 40 Pcs", price: "Rp. 74.000/ DUS" },
          { name: "Indomie Mie Instant Rasa Ayam Bawang 69g X 4 Pcs", price: "Rp. 65.000/ DUS" },
          { name: "Indomie Kari Ayam Bawang Goreng 72g X 40 Pcs", price: "Rp. 65.000/ DUS" },
          { name: "Indomie Mie Instant Regular Kaldu Ayam 65g X 40 Pcs", price: "Rp.65.000/ DUS" },
          { name: "Indomie Goreng Rasa Cakalang 75g X 40 Pcs", price: "Rp. 65.000/ DUS" },
          { name: "Indomie Mie Instant Rasa Mi Cakalang 82g X 40 Pcs", price: "Rp. 65.000/ DUS" },
          { name: "Indomie Mie Keriting Ayam Panggang 90g X 40 Pcs", price: "Rp. 100.000/ DUS" },
          { name: "Indomie Mi Goreng Rasa Cabe Ijo 85g X 40 Pcs", price: "Rp. 77.000/ DUS" },
          { name: "Indomie Mie Goreng Vegan 85g X 40 Pcs", price: "Rp. 74.000/ DUS" },
          { name: "Indomie Mie Keriting Goreng Special 90g X 40 Pcs", price: "Rp. 100.000/ DUS" },
          { name: "Indomie Goreng Pedas 79g X 40 Pcs", price: "Rp. 65.000/ DUS" },
          { name: "Indomie Mie Instant Rasa Mie Kocok Bandung 75g X 40 Pcs", price: "Rp. 65.000/ DUS" },
          { name: "Indomie Mie Keriting Goreng Ayam Cabe Rawit 90g X 40 Pcs", price: "Rp. 89.0000/ DUS" },
          { name: "Indomie Mie Instant Rasa Soto Betawi 75g X 40 Pcs", price: "Rp. 65.000/ DUS" }
        ]
      }
    ]
  },

];