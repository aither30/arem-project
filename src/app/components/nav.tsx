"use client";
import Image from "next/image";
import Link from "next/link";
// import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";


export default function Navbar() {
//   const socialLinks = [
//     {
//       name: "Instagram",
//       icon: <FaInstagram />,
//       href: "https://www.instagram.com/appleaither?igsh=cGpiaHQ4aHdxZnVo",
//     },
//     {
//       name: "LinkedIn",
//       icon: <FaLinkedin />,
//       href: "https://www.linkedin.com/in/alpi-darul-hakim-331408308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     },
//     { name: "GitHub", icon: <FaGithub />, href: "https://github.com/aither30" },
//     {
//       name: "Tiktok",
//       icon: <FaTiktok />,
//       href: "https://www.tiktok.com/@osecret_?_t=ZS-8vkQENo3pho&_r=1",
//     },
//   ];

  return (
    <nav className="bg-amber-950 py-2 mx-auto  flex justify-between items-center z-10 relative">
      {/* Logo Section */}
      <div className="flex ml-16">
        <Image
    src="/logo.png"
    alt="Logo"
    width={40}
    height={40}
    className="rounded-lg object-cover"
  />
        <h1 className=" text-2xl font-bold text-white rounded-lg py-2 ">
          AREM
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 mr-16 text-l">
        <li>
          <Link
            href="/"
            className="hover:text-gray-400 text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-gray-400 text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            className="hover:text-gray-400 text-white"
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            href="/product"
            className="hover:text-gray-400 text-white "
          >
            Menu / Pricing
          </Link>
        </li>
        <li>
          <Link
            href="/join"
            className="hover:text-gray-400 text-white "
          >
            Join Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-gray-400 text-white "
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Links */}
      {/* <div className="flex gap-2 mr-16">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-2 px-2 py-2 rounded-lg 
              border border-gray-100 shadow-md shadow-black bg-black
              text-gray-100 text-xl transition-all duration-300 ease-in-out 
              hover:shadow-none active:shadow-none active:translate-y-1"
          >
            {link.icon}
          </a>
        ))}
      </div> */}
    </nav>
  );
}
