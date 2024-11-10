"use client";
import Link from "next/link";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b-2 text-white h-16 bg-slate-800 flex justify-around items-center gap-9">
      <div>
        <h1 className="text-3xl">PORTFOLIO</h1>
      </div>
      <ul className="sm:flex gap-10 text-xl hidden">
        <li className="hover:font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:font-semibold">
          <Link href="/About">About</Link>
        </li>
        <li className="hover:font-semibold">
          <Link href="/Contact">Contact</Link>
        </li>
        <li className="hover:font-semibold">
          <Link href="/Projects">Projects</Link>
        </li>
      </ul>
      <div className="sm:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <i className="bi bi-x text-xl"></i>
        ) : (
          <i className="bi bi-list text-3xl"></i>
        )}
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col sm:hidden pt-4 mt-4 w-28 bg-slate-400 text-xs gap-1 justify-center items-center">
          <li className="px-1">
            <Link href="/">Home</Link>
          </li>
          <li className="px-1">
            <Link href="/About">About</Link>
          </li>
          <li className="px-1">
            <Link href="/Contact">Contact</Link>
          </li>
          <li className="px-1">
            <Link href="/Projects">Projects</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
