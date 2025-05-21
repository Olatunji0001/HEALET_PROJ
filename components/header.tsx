"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Open({ open, close }: { open: string | boolean; close: () => void }) {
  if (!open) {
    return null;
  }

  return (
    <>
      <div className="menu-overlay">
        <div>
          <button className="close-icon" onClick={close}>
            <FaTimes  />
          </button>
        </div>

        <ul className="menu-list">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | string>(false);

  return (
    <>
        <div className="header-row">
          <span className="j">HEALET</span>

          <button className="menu-button" onClick={() => setIsMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
        <div>
          <Open open={isMenuOpen} close={() => setIsMenuOpen(false)} />
        </div>
    </>
  );
}
