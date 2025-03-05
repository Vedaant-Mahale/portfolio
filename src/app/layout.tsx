import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Arsenal_SC } from "next/font/google";  
import { Inter } from "next/font/google";
import "./globals.css";

// Load the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arsenalSC = Arsenal_SC({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-arsenal-sc", 
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Add multiple weights if needed
  variable: "--font-inter", // Define a CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${arsenalSC.variable}`}>
      <body
        className = "antialiased" 
      >
        {children}
      </body>
    </html>
  );
}
