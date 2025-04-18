'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold tracking-wide text-yellow-400">
            <Link href="/">CloShop</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white font-medium">
            <Link href="/" className="hover:text-yellow-300 transition"><CiUser size={20} /></Link>
            <Link href="/" className="hover:text-yellow-300 transition"><CiSearch size={20} /></Link>
            <Link href="/Cart" className="hover:text-yellow-300 transition"><BsCart size={20} /></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setNavOpen(!navOpen)} className="text-white focus:outline-none">
              {navOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg px-4 py-3 space-y-3 text-white font-semibold border-t border-white/20">
          <Link href="/Profile" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Profile</Link>
          <Link href="/Cart" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Cart</Link>
          <Link href="/Liked" onClick={() => setNavOpen(false)} className="block hover:text-yellow-300">Liked</Link>
        </div>
      )}
    </nav>
  );
}
