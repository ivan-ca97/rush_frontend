import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import LayoutWrapper from "../components/layout_wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


  return (
    <html lang="es">
      <body>
        <div className="layout">
          <LayoutWrapper>{children}</LayoutWrapper>
          <footer className="footer">Mi Footer</footer>
        </div>
      </body>
    </html>
  );
}

export default RootLayout