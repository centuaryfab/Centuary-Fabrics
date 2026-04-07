import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm fixed top-0 left-0 z-50">

      {/* Logo */}
      <h1 className="text-xl font-heading tracking-wide">Centuary Fab</h1>

      {/* Desktop Menu */}
  <div className="hidden md:flex gap-8 text-sm font-medium">
    <Link href="/" className="hover:text-primary transition">Home</Link>
    <Link href="/about" className="hover:text-primary transition">About</Link>
    <Link href="/group-companies" className="hover:text-primary transition">Group Companies</Link>
    <Link href="/products" className="hover:text-primary transition">Products</Link>
    <Link href="/blog" className="hover:text-primary transition">Blog</Link>
    <Link href="/contact" className="hover:text-primary transition">Contact</Link>
  </div>
      {/* 🔥 Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className={`w-6 h-[2px] bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-black transition ${open ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>

      {/* 🔥 Mobile Menu */}
     {open && (
  <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
    
    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
    <Link href="/about" onClick={() => setOpen(false)}>About</Link>
    <Link href="/group-companies" onClick={() => setOpen(false)}>Group Companies</Link>
    <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
    <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
    <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

  </div>
)}
    </nav>
  );
}