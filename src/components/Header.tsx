import Hamburger from "hamburger-react"; 
import { useState } from "react";

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className="bg-white py-4 h-[54px] flex items-center px-5 relative">
            <div className="lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen}size={24} />
                { isOpen && (
                    <nav className="fixed top-[54px] left-0 w-full bg-white py-4">
                        <ul className="flex flex-col items-center space-y-4">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>  
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-black text-center tracking-widest">GLAMUROSA</h1>
        </header>
    );
}   
