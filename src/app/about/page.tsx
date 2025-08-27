// import Navbar from "../components/nav";
import Image from "next/image";
export default function About() {
  return (
    <div className="py-12">
        {/* <Navbar></Navbar> */}
        <div className="bg-white mb-8">
          <div className=" flex flex-col space-y-2 items-center justify-center p-2">
          <div className="w-[2px] h-18 bg-amber-600"></div>
          <h2 className="text-amber-600 tracking-widest">ABOUT US</h2>
          <h2 className="text-3xl font-bold">Serving Since 1945</h2>
          </div>
        <div></div>
        </div>
        <div className="flex px-30 space-x-10">
          <div className=" space-y-2 w-1/3">
          <div>
            <h2 className="text-2xl font-bold">Our Story</h2>
          </div>
          <div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum id molestias eos! Maiores voluptatem incidunt fugiat iste ipsam aperiam sed distinctio, ullam fugit. Consequatur quae ipsa nobis sit necessitatibus.</p>
          </div>
          <div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi ratione fuga cumque ullam sit soluta officiis, veniam facilis quasi possimus quae doloribus praesentium, optio velit est! Minima, dolor nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat cupiditate optio, quisquam possimus aliquid assumenda dolor error dicta velit voluptate adipisci nemo impedit consectetur illo nihil modi id quasi.</p>
          </div>
          <div>
            <button className="bg-black text-white py-1 px-4">Learn More</button>
          </div>
          
        </div>
        <div className="w-1/3">
          <Image src="/jambengora.jpg" height={400} width={200} alt="" className="bg-cover h-[100%] w-[100%]"/>
        </div>
        <div className=" space-y-2 w-1/3">
          <div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum id molestias eos! Maiores voluptatem incidunt fugiat iste ipsam aperiam sed distinctio, ullam fugit. Consequatur quae ipsa nobis sit necessitatibus.</p>
          </div>
          <div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi ratione fuga cumque ullam sit soluta officiis, veniam facilis quasi possimus quae doloribus praesentium, optio velit est! Minima, dolor nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat cupiditate optio, quisquam possimus aliquid assumenda dolor error dicta velit voluptate adipisci nemo impedit consectetur illo nihil modi id quasi.</p>
          </div>
          <div>
            <button className="bg-black text-white py-1 px-4">Learn More</button>
          </div>
          
        </div>
        </div>
    </div>
  );
}
