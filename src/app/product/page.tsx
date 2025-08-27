import Image from "next/image";

export default function Product() {
  const menu = [
    {
      title: "Teh Serai Lemon",
      desc: "Minuman Khas Rempah dengan Kesegaran Lemon dan Serai",
      price: "Rp 11,000",
      img: "/logo.png",
    },
    {
      title: "Jancruk",
      desc: "Wedang Jahe dengan campuran Kencur. Kehangatan meredakan meriang",
      price: "Rp 10,000",
      img: "/logo.png",
    },
    {
      title: "Kunjaruk",
      desc: "Wedang Jahe dengan campuran Kunyit. Kehangatan melegakan Lambung",
      price: "Rp 10,000",
      img: "/logo.png",
    },
    {
      title: "Temulawak",
      desc: "Wedang Jahe dengan campuran Temulawak. Kehangatan melancarkan sistem pencernaan",
      price: "Rp 10,000",
      img: "/logo.png",
    },
    {
      title: "Wedang Susu",
      desc: "Wedang Jahe dengan campuran Susu Kental Manis. Pelipur hangat di setiap kedinginan",
      price: "Rp 11,000",
      img: "/logo.png",
    },
    {
      title: "Jambe",
      desc: "Wedang Susu dengan campuran Buah Pinang yang Khas. Penambah stamina dan pelancar menstruasi",
      price: "Rp 11,000",
      img: "/logo.png",
    },
    {
      title: "Jambe + Telor",
      desc: "Wedang Susu dengan campuran Buah Pinang yang Khas dan campuran Telor Bebek murni. Rahasia Pria perkasa alami",
      price: "Rp 15,000",
      img: "/logo.png",
    },
    {
      title: "Saraba",
      desc: "Minuman rempah tradisional khas Makassar",
      price: "Rp 12,000",
      img: "/logo.png",
    },
    {
      title: "STMJ",
      desc: "Susu + Telor + Madu + Jahe. Minuman kaya protein",
      price: "Rp 15,000",
      img: "/logo.png",
    },
    {
      title: "Wedang Uwuh",
      desc: "Cita rasa khas rempah di seluruh tegukan. Kemurnian warna alami dengan ciri khas kayu secang",
      price: "Rp 10,000",
      img: "/logo.png",
    },
    {
      title: "Koramilk",
      desc: "Perpaduan menu khas 'Arem & Arkop'. Kopi Rempah aroma yang khas diseduh dengan campuran kopi Arabika yang menggoda",
      price: "Rp 15,000",
      img: "/logo.png",
    },
    {
      title: "Teh Tarik",
      desc: "Opsi minuman sehat yang tidak suka Aroma Jahe Merah",
      price: "Rp 10,000",
      img: "/logo.png",
    },
    {
      title: "Teh Telor",
      desc: "Minuman Teh dengan campuran Protein Telor",
      price: "Rp 15,000",
      img: "/logo.png",
    },
    {
      title: "Telor ½ Mateng / Telor Lok-Lok",
      desc: "Sedikit namun memberikan banyak manfaat untuk kesehatan dan stamina",
      price: "Rp 5,000",
      img: "/logo.png",
    },
  ];

  return (
    <div className="py-8 bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-600 mb-3"></div>
          <h2 className="text-amber-600 tracking-widest font-medium">PRODUK KAMI</h2>
          <h1 className="text-5xl font-extrabold text-gray-900">
            AROMA REMPAH
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menu.map((item, i) => (
            <div key={i} className="border-b border-gray-200 last:border-none pb-4">
              <div className="flex justify-between items-start hover:bg-amber-50 rounded-lg transition p-3">
                <div className="flex items-start space-x-3">
                  <Image
                    src={item.img}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover shadow"
                    alt={item.title}
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <p className="text-amber-700 font-bold whitespace-nowrap">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
