import Image from "next/image";
import { NextSeo } from "next-seo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Inicio() {
  return (
    <main>
      <NextSeo
        title="Tu pagina | AquaDetect"
        description="Plataforma de monitoreo de fugas de agua"
        canonical="https://www.AquaDetect.com/"
      />
      <div className=" w-screen h-screen bg-white flex flex-col">
        <Image
          src="/OlasHeader.png"
          alt="olas"
          width={425}
          height={0}
          className=" "
        />
        <Image
          src="/medidor.png"
          alt="olas"
          width={425}
          height={0}
          className=" "
        />
        <div className=" justify-center items-center ml-7 mt-5 w-64 h-56 bg-[#dad9fa] hover:bg-[#b2caed] rounded-lg border-2 border-violet-300">
          <Image
            src="/medidor.png"
            alt="olas"
            width={200}
            height={0}
            className=" m-7"
          />
          <h1 className="flex justify-items-starts ml-3 text-xl font-bold text-center text-gray-600 ">
            Sensor Cocina;
            <br />
            <button className="">

            </button>
          </h1>
        </div>
      </div>
    </main>
  );
}
