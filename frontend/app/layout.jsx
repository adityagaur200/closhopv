"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import NavBar from "./Home/NavBar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // hook only works in Client Component

  const isAuthPage = pathname === "/Auth"; // add more paths if needed

  return (
    <html lang="en">
      <body>
        {!isAuthPage && <NavBar />}
        {children}
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
