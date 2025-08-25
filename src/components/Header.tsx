import { instrumentSans } from "@/lib/fonts";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className="bg-white py-4 h-[54px] flex items-center px-2 relative">
            <div className="lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
                {isOpen && (
                    <div className="fixed left-0 right-0 top-[54px] bottom-0 bg-black/50 z-10" onClick={() => setOpen(false)}>

                    </div>
                )}
                <nav className={`fixed top-[54px] left-0 w-4/5 h-full bg-white py-4 transform transition-transform duration-300 ease-in-out z-20 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}>
                    <ul className={`flex flex-col items-center text-xs tracking-widest divide-y divide-gray-200 ${instrumentSans.className}`}>
                        <li className="h-14 w-full">
                            <a href="#" className="pl-6 flex justify-between items-center w-full h-full">
                                CATEGORIA 1
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>

                        </li>
                        <li className="h-14 w-full">
                            <a href="#" className="pl-6 flex justify-between items-center w-full h-full">
                                CATEGORIA 2
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="#" className="pl-6 flex justify-between items-center w-full h-full">
                                CATEGORIA 3
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="#" className="pl-6 flex justify-between items-center w-full h-full">
                                CATEGORIA 4
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                        <li className="h-14 w-full">
                            <a href="#" className="pl-6 flex justify-between items-center w-full h-full">
                                CATEGORIA 5
                                <Image src="right-arrow.svg" alt="Arrow" width={20} height={20} className="mr-5" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-lg font-black text-center tracking-wides z-30 lg:text-2xl" onClick={() => setOpen(false)}>GLAMUROSA</Link>
            <div className="absolute right-1 flex items-center">
                <a href="https://www.tiktok.com/@glamurosa.pe" target="_blank" rel="noopener noreferrer">
                    <Image src="logo-tiktok.svg" alt="TikTok" width={30} height={30} />
                </a>
                <a href="https://www.instagram.com/glamurosa.pe/?hl=es" target="_blank" rel="noopener noreferrer">
                    <Image src="logo-instagram.svg" alt="Instagram" width={35} height={35} />
                </a>
            </div>
        </header>
    );
}   
