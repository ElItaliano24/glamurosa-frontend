import type { Metadata } from "next";
import { nunito } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glamurosa",
  description: "Página de productos de Glamurosa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.className}`}>
      <body
        className={`antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
