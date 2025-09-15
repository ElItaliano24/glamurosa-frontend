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
  category: string;
  images?: {
    image?: Media;
  }[];
}


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://glamurosa-backend.vercel.app/api/products?limit=100");
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

  // Filtrar productos con categoría definida
  const productsWithCategory = products.filter(p => !!p.category);

  // 🚀 Sacar categorías únicas
  const categories = Array.from(new Set(productsWithCategory.map(p => p.category!)));

  // 🚀 Definir orden manual
  const categoryOrder: Record<string, number> = {
    "basicos en rib": 1,
    "basicos en suplex": 2,
    "chompas y chomperos": 3,
    "sacos y conjuntos": 4,
    "pantalones": 5,
    "liquidaciones": 6,
  };

  // 🚀 Ordenar categorías según el número
  const orderedCategories = categories.sort((a, b) => {
    const orderA = categoryOrder[a.toLowerCase()] ?? 9999;
    const orderB = categoryOrder[b.toLowerCase()] ?? 9999;
    return orderA - orderB;
  });


  return (
    <div>
      <Header />
      <main className="bg-[#EFEFEF] pt-4">
        {orderedCategories.map((cat) => (
          <section key={cat} id={cat.toLowerCase().replace(/\s+/g, '-')} className="mb-10">
            <h2 className="flex flex-col justify-center lg:w-1/4 mx-auto text-center font-bold lg:text-xl mb-5 lg:py-4 bg-white py-2">
              {cat.toUpperCase()}
              <button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mx-auto flex text-xs items-center justify-center bg-[#EFEFEF] rounded w-fit px-2 py-1 lg:mt-3 cursor-pointer">
                <Image src="/flecha-hacia-arriba.png" className="mr-2" alt="logo de WhatsApp" width={24} height={24} />
                <span>Regresar al inicio</span>
              </button>
            </h2>
            <ul className="grid grid-cols-2 gap-4 mx-2 sm:gap-6 md:grid-cols-3 md:mx-10 lg:grid-cols-4 lg:gap-16 xl:grid-cols-5 justify-items-center">
              {products
                .filter((p) => p.category === cat) // productos de esa categoría
                .map((p) => (
                  <li key={p.id} className="w-full h-full">
                    <div className="w-full aspect-[3/4] relative overflow-hidden">
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
                    <div className={`flex-1 text-xs md:text-sm ${instrumentSans.className}`}>
                      <h2 className="mt-2 mb-1 tracking-widest text-center text-[#1C1C1C]">
                        {p.name.toUpperCase()}
                      </h2>
                      <p className="text-center mb-2 text-[#1C1C1CA6]">S/ {p.price.toFixed(2)}</p>
                      <a
                        href={`https://wa.me/51980947986?text=${encodeURIComponent(
                          `Hola, estoy interesado en el producto "${p.name}" con precio S/ ${p.price}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center justify-center gap-2 bg-[#189D0E] text-white font-semibold py-1 px-2 rounded mx-auto lg:py-2 lg:px-3"
                      >
                        <Image src="/logo-whatsapp.svg" alt="logo de WhatsApp" width={24} height={24} />
                        Consultar
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
