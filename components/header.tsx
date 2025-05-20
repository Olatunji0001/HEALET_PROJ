'use client'

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">HEALET</div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/shop">SHOP</Link></li>
            <li><Link href="/blog">BLOG</Link></li>
          </ul>
          <button className="close-menu" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </nav>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}