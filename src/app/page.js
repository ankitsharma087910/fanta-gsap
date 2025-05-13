import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-amber-500">
      <Navbar />
      <div className="flex items-center justify-center relative w-full h-screen">
        <h1 className="text-[25vw] text-white">FANTA</h1>
        <Image src={"/orange2.png"} height={100} width={100}
        className="absolute top-[6%] left-[25%] w-[15%] "
        />
        <Image src={"/fanta.png"} height={100} width={100}
        className="absolute w-[40%]  left-[23%] z-10"
        />
        <Image src={"/orange.webp"} height={100} width={100} 
        className="absolute w-[20%] z-20 bottom-[5%] left-[40%]"
        />
        <Image src={"/leaf2.png"} height={100} width={100}
        className=""
        />
        <Image src={"/coconoutleaf.png"} height={100} width={100} />
      </div>
    </div>
  );
}
