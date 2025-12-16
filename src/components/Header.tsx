"use client";
import { instrumentSans } from "@/lib/fonts";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);
    return (
        <header className="bg-white py-4 h-[54px] flex items-center px-2 fixed w-full z-50 top-0 lg:px-5 lg:h-[60px] xl:px-10 lg:justify-start">
            <div className="lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
                {isOpen && (
                    <div className="fixed left-0 right-0 top-[54px] bottom-0 bg-black/50 z-10" onClick={() => setOpen(false)}>
                    </div>
                )}
                <nav className={`fixed top-[54px] left-0 w-4/5 h-full bg-red-500 py-4 transform transition-transform duration-300 ease-in-out z-20 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}>
                    <ul className={`flex flex-col items-center text-xs tracking-widest divide-y divide-gray-200 ${instrumentSans.className}`}>
                        <li className="h-14 w-full">
                            <a href="#basicos-en-rib" onClick={() => setOpen(false)} className="pl-6 flex justify-between items-center w-full h-full">
                                BASICOS EN RIB
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>

                        </li>
                        <li className="h-14 w-full">
                            <a href="#basicos-en-suplex" onClick={() => setOpen(false)} className="pl-6 flex justify-between items-center w-full h-full">
                                BASICOS EN SUPLEX
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="#chompas-y-chomperos" onClick={() => setOpen(false)} className="pl-6 flex justify-between items-center w-full h-full">
                                CHOMPAS Y CHOMPEROS
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="#sacos-y-conjuntos" onClick={() => setOpen(false)} className="pl-6 flex justify-between items-center w-full h-full">
                                SACOS Y CONJUNTOS
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="#pantalones" onClick={() => setOpen(false)} className="pl-6 flex justify-between items-center w-full h-full">
                                PANTALONES
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="#liquidaciones" onClick={() => setOpen(false)} className="pl-6 flex justify-between items-center w-full h-full">
                                LIQUIDACIONES
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="/preguntas-frecuentes" onClick={() => setOpen(false)} className="pl-6 flex justify-between items-center w-full h-full">
                                PREGUNTAS FRECUENTES
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-lg font-medium text-center tracking-wider z-30 lg:text-2xl lg:relative lg:transform-none lg:left-0 lg:translate-x-0" onClick={() => setOpen(false)}>GLAMUROSA</Link>
            <ul className={`hidden lg:flex items-center mx-5 gap-2 text-sm xl:tracking-wider xl:text-base xl:space-x-5 xl:ml-10 text-center ${instrumentSans.className}`}>
                <li>
                    <a href="#basicos-en-rib" className="h-full">
                        BASICOS EN RIB
                    </a>
                </li>
                <li >
                    <a href="#basicos-en-suplex" className="h-full">
                        BASICOS EN SUPLEX
                    </a>
                </li>
                <li>
                    <a href="#chompas-y-chomperos">
                        CHOMPAS Y CHOMPEROS
                    </a>
                </li>
                <li className="">
                    <a href="#sacos-y-conjuntos" className="h-full">
                        SACOS Y CONJUNTOS
                    </a>
                </li>
                <li>
                    <a href="#pantalones" className="h-full">
                        PANTALONES
                    </a>
                </li>
                <li>
                    <a href="#liquidaciones" className="flex items-center h-full">
                        LIQUIDACIONES
                    </a>
                </li>
                
            </ul>
            <div className="absolute right-1 flex items-center lg:justify-center lg:static lg:ml-auto xl:right-10">
                <a href="https://www.tiktok.com/@glamurosa.pe" target="_blank" rel="noopener noreferrer">
                    <Image src="logo-tiktok.svg" alt="TikTok" width={30} height={30} className="lg:w-10 lg:h-10" />
                </a>
                <a href="https://www.instagram.com/glamurosa.pe/?hl=es" target="_blank" rel="noopener noreferrer">
                    <Image src="logo-instagram.svg" alt="Instagram" width={35} height={35} className="lg:w-12 lg:h-12" />
                </a>
            </div>
        </header>
    );
}   
