import Image from "next/image";
import { NextSeo } from "next-seo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NextSeo
        title="Inicio | AquaDetect"
        description="Plataforma de monitoreo de fugas de agua"
        canonical="https://www.AquaDetect.com/"
      />
      <div className="relative w-screen h-screen bg-white flex flex-col items-center justify-center">
        <Image src="/AcuaDetect.png" alt="Logo" width={180} height={180} className=" mb-5" />
        <h1 className="text-2xl font-bold text-center text-gray-600 z-10 mb-52 px-4">
         Unete a la comunidad de AquaDetect
          <br />
          con tu cuenta de Google
        </h1>
        <div className="absolute bottom-0 w-full h-72 bg-cover bg-bottom" style={{ backgroundImage: "url('/imagenesbg/Olas.png')" }}>
          <div className="flex justify-center items-center h-full">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = '/login'}>
            
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}