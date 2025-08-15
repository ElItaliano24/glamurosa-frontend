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
        const res = await fetch("http://localhost:3001/api/products");
        const data = await res.json();
        setProducts(data.docs);
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
      <ul className="grid grid-cols-1 items-center justify-center gap-5 mx-2">
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
            <p className="font-bold text-lg">S/ {p.price}</p>
            </div>


          </li>
        ))}
      </ul>

    </main>
  );
}
