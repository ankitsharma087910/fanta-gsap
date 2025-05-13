import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-amber-500">
      <Navbar />
      <div className="flex items-center justify-center relative w-full h-screen">
        <h1 className="text-[25vw] text-white">FANTA</h1>
        <Image
          src={"/orange2.png"}
          height={100}
          width={100}
          className="absolute top-[6%] left-[28%] w-[15%] "
        />
        <Image
          src={"/fanta.png"}
          height={100}
          width={100}
          className="absolute w-[40%]  left-[26%] z-10"
        />
        <Image
          src={"/orange.webp"}
          height={100}
          width={100}
          className="absolute w-[20%] z-20 bottom-[5%] left-[44%]"
        />
        <Image
          src={"/leaf.webp"}
          height={100}
          width={100}
          className="absolute rotate-[50deg] top-[10%] w-[15%] left-[8%]"
        />
        <Image
          src={"/leaf2.png"}
          height={100}
          width={100}
          className="absolute rotate-[280deg] bottom-[7%] w-[12%] right-[3%]"
        />
        <Image
          src={"/coconoutleaf.png"}
          height={100}
          width={100}
          className="absolute top-[5%] right-[8%] w-[15%]"
        />
      </div>
    </div>
  );
}
