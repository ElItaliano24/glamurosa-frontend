'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Header from "@/components/Header";
import { instrumentSans } from "@/lib/fonts";


interface Media {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  cloudinary?: {
    public_id: string;
    resource_type: string;
    format: string;
    secure_url: string;
    bytes: number;
    created_at: string;
    version: number;
    version_id: string;
    width: number;
    height: number;
    selected_page: number;
  };
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
    <div>
      <Header />
      <main className="bg-[#EFEFEF] py-5">
        <ul className="grid grid-cols-2 gap-4 mx-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((p) => (
            <li key={p.id}>
              <div className="w-[142px] aspect-[3/4] relative overflow-hidden">
                {p.images?.[0]?.image?.cloudinary?.secure_url && (
                  <Image
                    src={p.images[0].image.cloudinary.secure_url}
                    alt={p.name}
                    fill
                    priority={true}
                    className="object-cover"
                  />
                )}
              </div>
              <div className={`flex-1 text-xs ${instrumentSans.className}`}>
                <h2 className="mt-2 mb-1 tracking-widest text-center text-[#1C1C1C]">{p.name.toUpperCase()}</h2>
                <p className="text-center mb-2 text-[#1C1C1CA6]">S/ {p.price}</p>
                <a href={`https://wa.me/51980947986?text=${encodeURIComponent(
                  `Hola, estoy interesado en el producto "${p.name}" con precio S/ ${p.price}`
                )}`} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center justify-center gap-2 bg-[#189D0E] text-white font-semibold py-1 px-2 rounded mx-auto">
                  <Image src="/logo-whatsapp.svg" alt="logo de WhatsApp" width={24} height={24} />
                  Consultar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
