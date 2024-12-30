import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Car Doctor',
    template: "$S | Car Doctor"
  },
  description: "A next js car website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
