'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" top-3 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-7 ">
        {/* Logo */}
        <Link href="/" className="text-4xl font-serif text-black">
          KAIRA
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 text-">
          
            <Link href="/" className="hover:text-black text-gray-700">HOME</Link>
          <Link href={"/blog"} className="hover:text-black text-gray-700">BLOG</Link>
            <Link href={"/about"} className="hover:text-black text-gray-700">ABOUT</Link>
          <Link href="/contact" className="hover:text-black text-gray-700">CONTACT</Link>
          <Link href="/wishlist" className="hover:text-black text-gray-700">WISHLIST (0)</Link>
      
          <FaSearch className="text-gray-700 cursor-pointer" />
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-xl text-black">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3">
          <Link href="/" onClick={toggleMenu} className="block text-gray-700">HOME</Link>
          <Link href="/shop" onClick={toggleMenu} className="block text-gray-700">SHOP</Link>
          <Link href="/blog" onClick={toggleMenu} className="block text-gray-700">BLOG</Link>
          <Link href="/pages" onClick={toggleMenu} className="block text-gray-700">PAGES</Link>
          <Link href="/contact" onClick={toggleMenu} className="block text-gray-700">CONTACT</Link>
          <Link href="/wishlist" onClick={toggleMenu} className="block text-gray-700">WISHLIST (0)</Link>
          <Link href="/cart" onClick={toggleMenu} className="block text-gray-700">CART (0)</Link>
          <span className="block text-gray-700">🔍 Search</span>
        </div>
      )}
    </header>
  );
};

export default Navbar;


