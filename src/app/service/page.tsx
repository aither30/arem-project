// import Navbar from "../components/nav";
import Image from "next/image";
export default function Service() {
  return (
    <div className="py-12">
        {/* <Navbar></Navbar> */}
        <div className="bg-white mb-8">
          <div className=" flex flex-col space-y-2 items-center justify-center p-2">
          <div className="w-[2px] h-18 bg-amber-600"></div>
          <h2 className="text-amber-600 tracking-widest">OUR SERVICE</h2>
          <h2 className="text-3xl font-bold">Fresh & Organic Beans</h2>
          </div>
        <div></div>
        </div>
        <div className="flex px-30 space-x-10">
          <div className="w-1/2 flex flex-col space-y-12">
            <div className="flex space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">layanan 1 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id esse dolores obcaecati ipsam ut quo aliquid inventore enim ad dolorem corrupti, quae autem veniam placeat blanditiis? Quaerat, maiores odit! Rem.</p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">layanan 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
          </div>
        <div className="w-1/2 flex flex-col space-y-12">
            <div className="flex space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">layanan 3 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id esse dolores obcaecati ipsam ut quo aliquid inventore enim ad dolorem corrupti, quae autem veniam placeat blanditiis? Quaerat, maiores odit! Rem.</p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <Image src="/jambengora.jpg" width={100} height={100} alt="foto layanan"/>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">layanan 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel illo similique. Animi porro assumenda tempora ut saepe harum error eius nam eligendi suscipit placeat, dicta totam, et, asperiores sit!</p>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}
