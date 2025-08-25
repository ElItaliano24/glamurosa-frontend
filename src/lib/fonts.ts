import { Nunito, Instrument_Sans } from "next/font/google";

// Fuente global
export const nunito = Nunito({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    display: "swap",
    fallback: ["sans-serif"],
});

// Fuente específica
export const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    fallback: ["sans-serif"],
});
