"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navmobile() {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/appleaither?igsh=cGpiaHQ4aHdxZnVo",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      href: "https://www.facebook.com",
    },
  ];

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Layanan", href: "/service" },
    { name: "Produk Kami", href: "/product" },
    { name: "Gabung", href: "/join" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <nav className="bg-amber-950 text-white px-4 py-3 md:hidden flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={35}
          height={35}
          className="rounded-lg object-cover"
        />
        <h1 className="text-xl font-bold">AREM</h1>
      </div>

      <div className="flex gap-2 items-center">
        {/* Social Links */}
            <div className="flex gap-2 ml-2 mb-1">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  className="flex items-center px-1 py-1 rounded-lg 
               shadow-sm shadow-black bg-amber-950
              text-gray-100 text-xl transition-all duration-300 ease-in-out 
              hover:shadow-none active:shadow-none active:translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl focus:outline-none"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-amber-900 shadow-lg rounded-b-2xl z-20">
          <ul className="flex flex-col gap-1 p-4 text-base">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="block px-2 py-2 rounded-lg hover:bg-amber-800 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            
          </ul>
        </div>
      )}
    </nav>
  );
}
