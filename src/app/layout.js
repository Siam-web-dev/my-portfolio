import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kamruzzaman Siam | Frontend & Web Developer",
  description:
    "Personal portfolio of Kamruzzaman Siam. Building modern, performant, and responsive web applications with React, Next.js, and Tailwind CSS.",
  keywords: [
    "Kamruzzaman Siam",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Kamruzzaman Siam" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080A10] text-[#F3F5FF] selection:bg-[#8B8DFF]/30 selection:text-white">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
