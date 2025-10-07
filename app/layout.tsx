import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import Dock from "@/components/custom/Dock/Dock";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jai Maa Kaali Trading Company",
  description: "Quality grains, trusted taste.",
  openGraph: {
    title: "Jai Maa Kaali Trading Company",
    description: "Quality grains, trusted taste.",
    url: "https://jmktco.com",
    images: [
      {
        url: "/og-tag-image.png",
        width: 1200,
        height: 630,
        alt: "Jai Maa Kaali Trading Company",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-[520px] md:max-w-full mx-auto">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antiliased bg-[url('/images/fullbg.jpg')] bg-cover bg-center font-PaytoneOne`}
      >
        <Header />
        {children}
        <div className="">
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
            <button className="px-4 py-2">
              <Dock />
            </button>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
