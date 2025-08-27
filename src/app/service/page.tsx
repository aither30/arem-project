import Image from "next/image";

export default function Service() {
const services = [
  {
    title: "Minuman Rempah Tradisional",
    desc: "Beragam minuman rempah khas Indonesia seperti Wedang Jahe, STMJ, Saraba, dan Wedang Uwuh untuk kehangatan dan kesehatan.",
    img: "/logo.jpg",
  },
  {
    title: "Minuman Rempah Premium & Kreasi",
    desc: "Minuman inovatif dengan perpaduan unik seperti Jambe + Telor, Koramilk, dan Teh Telur yang menyehatkan dan kaya rasa.",
    img: "/logo.jpg",
  },
  {
    title: "Paket & Bundling Minuman",
    desc: "Paket minuman rempah siap saji untuk keluarga, kafe, atau hadiah spesial, memudahkan pelanggan menikmati berbagai varian sekaligus.",
    img: "/logo.jpg",
  },
  {
    title: "Workshop & Edukasi Rempah",
    desc: "Belajar membuat minuman rempah sendiri, tips mengolah rempah agar tetap segar dan kaya manfaat, cocok untuk pemula maupun penggemar rempah.",
    img: "/logo.jpg",
  },
];


  return (
    <div className="py-8 bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-600 mb-3"></div>
          <h2 className="text-amber-600 tracking-widest font-medium">
            OUR SERVICE
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Fresh & Organic Beans
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex items-start space-x-5 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
