import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-[#080A10] text-[#F3F5FF] selection:bg-[#8B8DFF]/30 selection:text-white font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
