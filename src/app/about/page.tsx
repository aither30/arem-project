import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col py-4 md:py-8 bg-gradient-to-b from-white to-amber-50">
      {/* Header */}
      <div className="text-center md:mb-8 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-600 mb-3"></div>
          <h2 className="text-amber-600 tracking-widest font-medium">
            TENTANG KAMI
          </h2>
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 md:px-0 px-6">
            Minuman Rempah Tradisional Ala&apos; Tasik
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center px-6 md:px-12">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 relative">
          {/* 4 Foto kecil */}
          {["/jambengora.jpg", "/foto2.jpg", "/foto3.jpg", "/foto4.jpg"].map(
            (src, i) => (
              <div
                key={i}
                className="relative w-full h-52 md:h-60 rounded-xl overflow-hidden shadow-lg"
              >
                <Image src={src} alt={`Foto ${i + 1}`} fill className="object-cover" />
              </div>
            )
          )}

          {/* Foto ke-5 di tengah overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-xl ring-4 ring-white">
            <Image
              src="/logo.png"
              alt="Logo AREM"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3 text-sm md:text-base">
          <h2 className="text-3xl font-bold text-amber-900">Profil Perusahaan</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            AREM hadir untuk menghadirkan kembali kehangatan dan kekayaan rasa
            minuman rempah tradisional khas Tasikmalaya. Filosofi dari nama
            &#34;Arem&#34; sendiri ialah menciptakan minuman rempah yang tidak hanya
            menyegarkan tubuh, tetapi juga menghangatkan jiwa. Kami percaya
            bahwa minuman tradisional adalah warisan berharga yang harus terus
            dilestarikan dan dinikmati oleh generasi modern.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Berawal dari sebuah resep turun-temurun, AREM menyajikan perpaduan
            rempah-rempah pilihan terbaik, seperti jahe merah, kunyit, sereh,
            kayu manis, dan cengkeh. Kami berkomitmen untuk menjaga kualitas dan
            kesegaran setiap bahan, memastikan bahwa setiap botol AREM
            mengandung manfaat optimal bagi kesehatan.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            AREM bukan sekadar minuman, melainkan sebuah pengalaman. Kehangatan
            jahe merah yang membakar semangat, aroma sereh yang menenangkan, dan
            sentuhan manis alami dari gula aren akan membawa Anda pada sebuah
            perjalanan rasa yang autentik. Kami menghadirkan AREM dalam jangkauan
            yang lebih dekat, memudahkan Anda untuk menikmati kebaikan rempah di
            mana saja dan kapan saja.
          </p>
        </div>
      </div>
    </div>
  );
}
