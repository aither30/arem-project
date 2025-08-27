import Image from "next/image"

export default function Joinus(){
  return(
    <div className=" flex py-12">
      <div className="w-1/2 flex justify-end items-center">
        <Image src="/jambengora.jpg" height={400} width={400} alt="" className="h-[100%] rounded-bl-xl rounded-tl-xl"/>
      </div>
     <div className="w-1/2">
       <div className="w-2/3 rounded-br-xl rounded-tr-xl justify-start p-6 bg-gradient-to-r from-amber-600 to-amber-800 shadow-lg text-center text-white">
  <h2 className="text-2xl font-bold mb-3">✨ Bergabunglah Menjadi Mitra Arem!</h2>
  <p className="text-base leading-relaxed mb-4">
    Raih peluang besar bersama <span className="font-semibold">Arem</span>.  
    Dapatkan penghasilan tambahan, dukungan penuh, dan komunitas mitra yang solid.
  </p>
  <button className="px-5 py-2 bg-white text-amber-800 font-semibold rounded-xl shadow hover:bg-amber-100 transition">
    Panduan 🧾
  </button>
  
  <div>
      <p className="text-base leading-relaxed m-4">
    Raih peluang besar bersama <span className="font-semibold">Arem</span>.  
    Dapatkan penghasilan tambahan, dukungan penuh, dan komunitas mitra yang solid.
  </p>
  <button className="px-5 py-2 bg-white text-amber-800 font-semibold rounded-xl shadow hover:bg-amber-100 transition">
    Daftar Sekarang 🚀
  </button>
  </div>
</div>
     </div>

    </div>
  )
}