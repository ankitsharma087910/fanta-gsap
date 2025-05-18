"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Home() {

   gsap.registerPlugin(useGSAP);
   gsap.registerPlugin(ScrollTrigger)

   useGSAP(()=>{
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:".two",
        start:"-90%  95%",
        end:"70% 50%",
        scrub:1,
        markers:true
      }
    });
    tl.to(
      ".fanta",
      {
        top: "120%",
        left: "0%",
      },
      "orange"
    );

    tl.to(
      ".orange2",
      {
        top: "160%",
        left: "23%",
      },
      "orange"
    );

    tl.to(
      ".orange",
      {
        width:"15%",
        top: "170%",
        left: "80%",
      },
      "orange"
    );

    tl.to(
      ".leaf",
      {
        top: "110%",
        rotate: "130deg",
        left: "70%",
      },
      "orange"
    );

    tl.to(
      ".leaf2",
      {
        top: "110%",
        rotate: "130deg",
        left: "0%",
      },
      "orange"
    );

    let tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:".three",
        start:"0% 95%",
        end:"70% 50%",
        scrub:1,
        markers:true
      }
    })
    tl2.to(
      ".fanta",
      {
        width: "36%",
        top: "210%",
        left: "33%",
        zIndex: "300",
        overwrite:"auto"
      },
      "ca"
    );

    tl2.to(
      ".orange2",
      {
        top: "202%",
        left: "42%",
        width: "18%",
        zIndex: "200",
        overwrite: "auto",
      },
      "ca"
    );
   })

  return (
    <div className="bg-amber-500">
      <Navbar />
      {/* section 1 */}
      <div className="flex items-center justify-center relative w-full h-screen">
        <h1 className="text-[25vw] text-white">FANTA</h1>
        <Image
          src={"/orange2.png"}
          height={100}
          width={100}
          className="absolute orange2 top-[6%] left-[32%] w-[15%] "
        />
        <Image
          src={"/fanta.png"}
          height={100}
          width={100}
          className="absolute fanta w-[40%]  left-[30%] z-10"
        />
        <Image
          src={"/orange.webp"}
          height={100}
          width={100}
          className="absolute orange w-[20%] z-20 bottom-[5%] left-[49%]"
        />
        <Image
          src={"/leaf.webp"}
          height={100}
          width={100}
          className="absolute leaf rotate-[50deg] top-[10%] w-[15%] left-[8%]"
        />
        <Image
          src={"/leaf2.png"}
          height={100}
          width={100}
          className="absolute leaf2 rotate-[280deg] bottom-[7%] w-[12%] right-[3%]"
        />
        <Image
          src={"/coconoutleaf.png"}
          height={100}
          width={100}
          className="absolute coconutleaf top-[5%] right-[8%] w-[15%]"
        />
      </div>
      {/* section 2 */}

      <div className="flex two  w-full h-screen bg-amber-700">
        <div className="w-1/2 flex h-full  justify-center items-start gap-[5vh]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[50vh] w-1/2 rotate-[15deg]"
          >
            <path
              fill="#e04428"
              d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="w-1/2 flex flex-col text-white  h-full justify-center items-start gap-[5vh]">
          <h1 className="text-5xl">Flavour Updated</h1>
          <p className="text-xl w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a
            laborum laboriosam dolorem illum labore sit, voluptates commodi
            neque dolores tempore temporibus deleniti? Nobis, ratione hic error
            quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam
            enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque!
            Amet voluptatem illo similique recusandae! Ex quaerat quibusdam
            asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex
            repellendus provident mollitia laboriosam adipisci alias a impedit,
            cum accusamus rerum delectus eaque facilis veniam quia laborum
            incidunt ea assumenda! Eos magni aspernatur quod distinctio.
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div class="flex three h-screen w-full justify-between items-center p-20 ">
        <div className="h-[75vh] bg-white w-[25%] rounded-2xl relative">
          <Image
            src={"/lemon.webp"}
            width={100}
            height={100}
            alt=""
            className="absolute left-[2%] z-0 w-full top-[-23%]"
          />
          <Image
            width={100}
            height={100}
            src="/cocacola.png"
            alt=""
            className="w-[60%] h-[60vh] absolute z-10 top-[-10%] left-[25%]"
          />
          <h1 className="text-3xl absolute bottom-[20%] left-[35%] font-semibold">
            CocaCola
          </h1>
          <button className="absolute bottom-[6%] text-white cursor-pointer left-[35%] text-lg rounded-4xl bg-amber-500 p-3">
            Buy Now
          </button>
        </div>
        <div className="h-[75vh] bg-white w-[25%] rounded-2xl relative">
          <h1 className="text-3xl absolute bottom-[20%] left-[35%] font-semibold">            Fanta
          </h1>
          <button className="absolute bottom-[6%] text-white cursor-pointer left-[35%] text-lg rounded-4xl bg-amber-500 p-3">
            Buy Now
          </button>
        </div>
        <div className="h-[75vh] bg-white w-[25%] rounded-2xl relative">
          <Image
            className="absolute left-[2%] z-0 w-full top-[-22%]"
            width={100}
            height={100}
            src={"/lemon.webp"}
            alt=""
          />
          <Image
            width={100}
            height={100}
            src={"/pepsi.png"}
            alt=""
            className="w-[90%] h-[70vh] absolute z-10 top-[-14%] left-[8%]"
          />
          <h1 className="text-3xl absolute bottom-[20%] left-[35%] font-semibold">
            Pepsi
          </h1>
          <button className="absolute bottom-[6%] text-white cursor-pointer left-[35%] text-lg rounded-4xl bg-amber-500 p-3">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
