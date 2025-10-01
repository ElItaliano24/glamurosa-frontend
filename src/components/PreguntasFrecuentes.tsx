"use client";

import { instrumentSans } from "@/lib/fonts";

export default function PreguntasFrecuentes() {
    return (
        <section className={` bg-[#EFEFEF] pt-[60px] lg:pt-[64px] px-4 w-screen mx-auto h-screen ${instrumentSans.className}`}>
            <h2 className="text-lg font-medium my-1 text-center tracking-widest lg:my-5">UBICACIÓN</h2>
            <div className="flex flex-col lg:max-w-2/5 gap-8 mx-auto">
                {/* Mapa */}
                <div className="flex-1 border-2 rounded-md border-gray-300">
                    <iframe className="w-full h-[200px] lg:h-[350px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6000441268475!2d-77.0155066251744!3d-12.071016288167653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c89d087cbbad%3A0xf512e277e3e36ccc!2sGAMA%20Moda%20Plaza!5e0!3m2!1ses!2spe!4v1759289204149!5m2!1ses!2spe"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Información */}
                <div className="flex-1 flex flex-col justify-center bg-gray-50 p-4 rounded-lg shadow-md">
                    <h2 className="text-md font-semibold mb-4">Visítanos</h2>
                    <p className="mb-2 text-sm">
                        <strong>Dirección:</strong> Jr. Gamarra 1275, Cuadra 12, CC GAMA MODA PLAZA, tienda-almacén SN160 (segundo nivel)
                    </p>
                    <p className="mb-2 text-sm">
                        <strong>Horario:</strong> Lunes a Sábado, 11:00 am – 7:00 pm
                    </p>
                    <p className="text-sm">
                        Revisa el catálogo con anticipación para que tu atención presencial sea más rápida y eficaz.
                    </p>
                </div>
            </div>
        </section>
    );
}
