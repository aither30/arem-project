"use client";

import { MessageCircle, User, Globe, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6282317578112";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="flex flex-col min-h-screen bg-amber-950 text-white"
      id="contact"
    >
      {/* Contact Section */}
      <section className="text-center py-6 px-8 w-screen-5xl max-w-5xl mx-auto bg-amber-950 text-white rounded-xl z-10 relative">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold mb-6 flex items-center justify-center gap-3">
          <User size={32} /> Contact Us
        </h2>

        {/* Thank You Message */}
        <p className="text-lg text-gray-300 mb-6 flex items-center justify-center gap-2">
          <Globe size={24} /> &quot;Thank you for visiting my portfolio!&quot;
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mb-8">
          <p className="flex items-center gap-2 text-gray-400">
            <Mail size={20} className="text-blue-400" /> arem@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <Phone size={20} className="text-green-400" /> +62 812-3456-7890
          </p>
        </div>

        {/* Contact Page Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          If you have any questions, want to collaborate, or just say hello,
          feel free to send a message. I&apos;m always open to discussing web
          development, technology, or new project opportunities!
        </p>

        {/* Message Form */}
        <textarea
          placeholder="Write your message here..."
          className="w-full p-4 border border-gray-500 rounded-md focus:ring-2 focus:ring-gray-400 h-40 bg-black text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Send Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition mt-6 w-full font-medium"
        >
          <MessageCircle size={22} /> Send Message to WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        <p>
          © {new Date().getFullYear()} Arem | Built using Next.js
        </p>
      </footer>
    </section>
  );
}
