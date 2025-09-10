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
    <div className="flex flex-col py-4 md:py-8 bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="text-center mb-6 md:mb-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-600 mb-3"></div>
          <h2 className="text-amber-600 tracking-widest font-medium">
            LAYANAN KAMI
          </h2>
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 text-wrap md:px-0 px-6">
            Minuman Rempah Tradisional Ala&apos; Tasik
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-10 px-6 md:px-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex md:flex-row flex-col items-start space-x-5 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="w-24 h-24 relative rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover "
              />
            </div>
            <div>
              <h3 className="md:text-xl text-sm font-semibold text-amber-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
