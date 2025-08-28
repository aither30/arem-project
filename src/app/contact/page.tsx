"use client";

import { MessageCircle, User, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/arem.aromagroup.official",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      href: "https://www.facebook.com/arem.aromagroup.official",
    },
  ];

  const outlets = [
    {
      name: "Arem Cimulu",
      address:
        "Jl. RAA. Wiratanuningrat No.15, Empangsari, Kec. Tawang, Kab. Tasikmalaya, Jawa Barat 46113",
    },
    {
      name: "Arem Mang Ja'i",
      address:
        "Jl. HZ. Mustofa No.258, Nagarawangi, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46124",
    },
    {
      name: "Arem Cempaka",
      address:
        "Jl. Cempakawarna No.109, Cilembang, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46123",
    },
    {
      name: "Arem Siliwangi",
      address:
        "Jl. Terusan BCA No.8, Tuguraja, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46126",
    },
    {
      name: "Arem Singaparna",
      address:
        "Jl. Muktamar NU. XXIX, Cipakat, Kec. Singaparna, Kabupaten Tasikmalaya, Jawa Barat 46417",
    },
  ];

  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6283165791179";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="flex flex-col md:flex-row bg-amber-950 text-white px-6 md:px-12 py-6 gap-10" id="contact">
      {/* Outlet Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="border-b border-amber-700 pb-3 flex justify-between items-center">
          <h2 className="text-2xl font-bold ">
          Outlet Kami
        </h2>
        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              className="p-2 bg-amber-800 rounded-lg hover:bg-amber-700 text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
        </div>
        <div className="space-y-2">
          {outlets.map((outlet, i) => (
            <div key={i} className="bg-amber-900/40 p-3 rounded-lg">
              <h3 className="flex items-center gap-2 text-amber-400 font-semibold">
                <MapPin size={18} /> {outlet.name}
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {outlet.address}
              </p>
            </div>
          ))}
        </div>

        
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 bg-amber-900/30 rounded-xl p-6 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-extrabold mb-6 flex gap-3">
          <User size={28} /> Hubungi Kami
        </h2>

        <p className="text-lg  text-amber-400 mb-4 ">
          “Hangatkan Harimu dengan Aroma Rempah”
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-4 text-gray-300 text-center justify-center items-center">
          <p className="flex items-center gap-2">
            <Mail size={20} className="text-amber-400" />{" "}
            arem.gejrotenak123@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={20} className="text-green-400" /> +62 831-6579-1179
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6 text-center">
          Punya pertanyaan seputar produk, kemitraan, atau ingin langsung order?
          Silakan hubungi kami melalui WhatsApp. Tim AREM siap membantu Anda
        </p>

        <textarea
          placeholder="Tulis pesan Anda di sini..."
          className="w-full p-4 border border-gray-600 rounded-md focus:ring-2 focus:ring-amber-500 h-40 bg-white text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          onClick={handleWhatsAppRedirect}
          className="flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition mt-6 w-full font-semibold"
        >
          <MessageCircle size={22} /> Kirim Pesan via WhatsApp
        </button>
      </div>
    </section>
  );
}
