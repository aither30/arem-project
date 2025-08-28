"use client";

// import Navbar from "./components/nav";
import About from "./about/page";
import Service from "./service/page";
import Product from "./product/page";
import Joinus from "./join/page";
import Contact from "./contact/page";
// import Navmobile from "./components/navmobile";


import { useState, useEffect } from "react";

export default function Home() {
  // Daftar gambar background
  const images = [
    "/jambengora.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto ganti gambar tiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* <Navbar ></Navbar> */}

      <div id="home">
        <div
          className="bg-cover bg-center relative h-[75dvh] flex justify-center items-center transition-all duration-1000"
          style={{ backgroundImage: `url('${images[current]}')` }}
        >
          <div className="absolute inset-0 bg-amber-950/70"></div>

          <div className="relative z-10 text-lg font-bold p-2 text-white flex flex-col justify-center items-center space-y-1">
            <h1 className="text-amber-600">We Have Been Serving</h1>
            <h1 className="text-5xl">AREM</h1>
            <h1>Hangatkan Harimu dengan Aroma Rempah</h1>
          </div>
        </div>
      </div>

      <div>
        <About />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Joinus />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
