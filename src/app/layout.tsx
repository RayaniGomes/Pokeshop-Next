'use client';
import { Montserrat } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import StyledComponentsRegistry from "./registry";
import { useCartStore } from "@/Store/CartStore";
import { useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { setCart } = useCartStore();

  useEffect(() => {
    setCart();
  }, []);
  
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/img/logoNav.png" />
        <title>Pokeshop</title>
      </head>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
