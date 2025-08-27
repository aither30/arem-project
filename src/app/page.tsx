// import Navbar from "./components/nav";
import About from "./about/page";
import Service from "./service/page";
import Product from "./product/page";
import Joinus from "./join/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
        {/* <Navbar></Navbar> */}
        <div id="home" >
            <div className=" bg-cover bg-center relative h-[75dvh] flex justify-center items-center" style={{ backgroundImage: "url('jambengora.jpg')"}}>
                <div className="absolute inset-0 bg-amber-950/70"></div>
                <div className="relative z-10 text-lg font-bold p-2 text-white  flex flex-col justify-center items-center space-y-1 ">
                    
                <h1 className="text-amber-600">We Have Been Serving</h1>
            <h1 className="text-5xl">AREM</h1>
            <h1>* SINCE 1945 *</h1>
                </div>
            </div>
        </div>
        <div>
            <About></About>
        </div>
        <div>
            <Service></Service>
        </div>
        <div>
            <Product></Product>
        </div>
        <div>
            <Joinus></Joinus>
        </div>
        <div>
            <Contact></Contact>
        </div>
    </div>
  );
}
