// import Navbar from "../components/nav";
import Image from "next/image";
export default function Product() {
  return (
    <div className="py-12">
        {/* <Navbar></Navbar> */}
        <div className="bg-white mb-8">
          <div className=" flex flex-col space-y-2 items-center justify-center p-2">
          <div className="w-[2px] h-18 bg-amber-600"></div>
          <h2 className="text-amber-600 tracking-widest">OUR PRODUCT</h2>
          <h2 className="text-3xl font-bold">Menu & Pricing</h2>
          </div>
        </div>
        <div className="flex px-30 space-x-10">
          <div className="w-1/2 flex flex-col ">
          <div className="flex items-center justify-center text-center mb-4">
            <h1 className="text-2xl font-bold mb-4  bg-amber-950 text-white py-2 w-1/2">Kategori 1</h1>
          </div>
            <div className="space-y-6">
              <div className="flex space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Product 1 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id esse dolores obcaecati ipsam ut quo aliquid inventore enim ad dolorem corrupti, quae autem veniam placeat blanditiis? Quaerat, maiores odit! Rem.</p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Product 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Product 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Product 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
            </div>
          </div>
        <div className="w-1/2 flex flex-col ">
        <div className="flex  text-center items-center justify-center mb-4">
          <h1 className="bg-amber-950 py-2 w-1/2 text-2xl font-bold mb-4 text-center text-white">Kategori 2</h1>
        </div>
            <div className="space-y-6">
              <div className="flex space-x-3 ">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">product 3 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id esse dolores obcaecati ipsam ut quo aliquid inventore enim ad dolorem corrupti, quae autem veniam placeat blanditiis? Quaerat, maiores odit! Rem.</p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Product 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Product 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Product 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
            </div>
          </div>
        </div>
    </div>
  );
}
