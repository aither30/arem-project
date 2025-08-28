import Image from "next/image";
import Link from "next/link";

export default function Joinus() {
  const packages = [
    {
      name: "Paket Gerobakan",
      price: "Mulai Rp 8.000.000",
      benefit: "Keuntungan 100% dari mark up / selisih harga",
      img: "/logo.jpg",
    },
    {
      name: "Paket Tongkrongan",
      price: "Mulai Rp 100.000.000",
      benefit: "Keuntungan 55% dari laba bersih",
      img: "/logo.jpg",
    },
    // {
    //   name: "Paket Titipan",
    //   price: "Mulai Rp 3.000.000",
    //   benefit: "Keuntungan 20% dari laba kotor per produk",
    //   img: "/logo.jpg",
    // },
  ];

  return (
    <div className="flex flex-col md:py-8 py-4 bg-gradient-to-b from-amber-50 to-white md:px-0 px-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-600 mb-3"></div>
          <h2 className="text-amber-600 tracking-widest font-medium">
            KEMITRAAN
          </h2>
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 text-wrap md:px-0 px-6">
            Bergabunglah Menjadi Mitra ✨ AREM ✨
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto md:text-base text-sm">
            Raih peluang bisnis minuman rempah tradisional dengan sistem
            kemitraan yang mudah, dukungan penuh dari tim AREM, dan potensi
            keuntungan besar.
          </p>

          {/* Tombol Download Panduan */}
          <div className="md:mt-4 mt-2">
            <Link
              href="https://drive.google.com/file/d/1lGESiqS29Q11Yqj4TxhyhTnUKDN1kX3F/view?usp=drivesdk" // simpan file pdf di public/
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-amber-600 text-white font-semibold rounded-xl shadow hover:bg-amber-700 transition">
                📄 Download Panduan Kemitraan
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Paket */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-6 md:px-12 mb-4 md:mb-6">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative md:h-40 h-20 w-full">
              <Image
                src={pkg.img}
                alt={pkg.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:p-5 p-3 text-center">
              <div className="flex justify-between md:flex-col">
                <h3 className="text-sm md:text-xl font-bold text-amber-900">{pkg.name}</h3>
              <p className="text-sm md:text-xl  text-amber-700 font-semibold mt-0 md:mt-1 border-b md:border-b-0">{pkg.price}</p>
              </div>
              <p className="text-sm text-left md:text-center md:text-base text-gray-600 mt-1 md:mt-2">{pkg.benefit}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Satu Tombol Join */}
      <div className="text-center">
        <Link
          href="https://forms.gle/xxxxxx" // ganti dengan link Google Form asli
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 md:px-8 md:py-3 bg-amber-700 text-white text-sm md:text-base font-semibold rounded-xl shadow hover:bg-amber-800 transition">
            🚀 Daftar / Join Kemitraan Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
}
