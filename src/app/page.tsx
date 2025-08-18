'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';


interface Media {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  // añade otros campos si los necesitas
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images?: {
    image?: Media;
  }[];
}


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://glamurosa-backend.vercel.app/api/products");
        const data = await res.json();
        setProducts(data.docs);
        console.log(data)
        console.log(data.docs)

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main className="bg-[#E1DFDB]">
      <h1 className="font-bold text-3xl text-center py-2">PRODUCTOS</h1>
      <ul className="grid grid-cols-1 items-center justify-center gap-5 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p) => (
          <li key={p.id} className="flex gap-5 items-start justify-center">
            <div className="border w-[150px] aspect-[3/4] relative overflow-hidden rounded-sm">
              {p.images?.[0]?.image?.url && (
                <Image
                  src={p.images[0].image.url}
                  alt={p.name}
                  fill
                  priority={true}
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-md mb-2">{p.name}</h2>
              <p className="text-sm mb-2">{p.description}</p>
              <p className="font-bold text-lg mb-2">S/ {p.price}</p>
              <a href={`https://wa.me/51980947986?text=${encodeURIComponent(
                `Hola, estoy interesado en el producto "${p.name}" con precio S/ ${p.price}`
              )}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs bg-[#189D0E] text-white font-semibold py-2 px-4 rounded">
                <Image src="/logo-whatsapp.svg" alt="logo de WhatsApp" width={24} height={24} />
                Consultar
              </a>
            </div>
          </li>
        ))}
      </ul>

    </main>
  );
}
