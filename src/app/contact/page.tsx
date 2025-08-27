"use client";

import { MessageCircle, User, Globe, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6283165791179"; // nomor WA Arem
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="flex flex-col bg-amber-950 text-white" id="contact">
      {/* Contact Section */}
      <section className="text-center py-8 px-8 w-full max-w-4xl mx-auto bg-amber-950 text-white rounded-xl z-10 relative">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold mb-6 flex items-center justify-center gap-3">
          <User size={32} /> Contact Us
        </h2>

        {/* Tagline */}
        <p className="text-lg text-amber-400 mb-8 flex items-center justify-center gap-2">
          <Globe size={24} /> “Hangatkan Harimu dengan Aroma Rempah”
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 mb-10">
          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={20} className="text-amber-400" /> arem.gejrotenak123@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Phone size={20} className="text-green-400" /> +62 831-6579-1179
          </p>
        </div>

        {/* Contact Description */}
        <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
          Punya pertanyaan seputar produk, kemitraan, atau ingin langsung order?
          Silakan hubungi kami melalui WhatsApp. Tim AREM siap
          membantu Anda ✨
        </p>

        {/* Message Form */}
        <textarea
          placeholder="Tulis pesan Anda di sini..."
          className="w-full p-4 border border-gray-600 rounded-md focus:ring-2 focus:ring-amber-500 h-40 bg-white text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Send Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition mt-6 w-full font-semibold"
        >
          <MessageCircle size={22} /> Kirim Pesan via WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6">
        <p>
          © {new Date().getFullYear()} AREM | Bisnis Minuman Rempah Tradisional
        </p>
      </footer>
    </section>
  );
}
