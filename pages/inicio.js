import Image from "next/image";
import { NextSeo } from "next-seo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Inicio() {
  return (
    <main className={`${inter.className} bg-white min-h-screen flex flex-col justify-between`}>
      <NextSeo
        title="Inicio | AquaDetect"
        description="Plataforma de monitoreo de fugas de agua"
        canonical="https://www.AquaDetect.com/"
      />

      {/* Encabezado */}
      <div className="w-full">
        <Image src="/OlasHeader.png" alt="olas" width={600} height={150} className="w-full h-auto" />
      </div>

      {/* Dispositivo principal */}
      <div className="px-4 mt-4 flex flex-col items-center">
        <div className="w-full max-w-md bg-[#ebf4ff] hover:bg-[#d6e4ff] p-4 rounded-xl shadow-md border border-blue-300">
          <div className="flex items-center gap-4">
            <Image src="/medidor.png" alt="sensor" width={60} height={60} />
            <div>
              <h2 className="text-lg font-bold text-blue-700">Sensor Cocina</h2>
              <p className="text-sm text-gray-600">Ubicado en: Cocina principal</p>
            </div>
          </div>

          {/* Gráfica de flujo simulada */}
          <div className="mt-4 bg-white border border-blue-100 rounded-lg p-3">
            <h3 className="text-sm text-gray-500 mb-1">Flujo actual (L/min)</h3>
            <div className="w-full h-24 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md relative">
              <div className="absolute left-2 top-2 text-white text-xs">3.8 L/min</div>
              {/* Simulación de gráfica estática. Reemplazar con Chart.js en versión final */}
            </div>
          </div>
        </div>
      </div>

      {/* Espacio para más sensores */}
      <div className="px-4 mt-6 text-center text-gray-400 text-sm">
        Más sensores próximamente...
      </div>

      {/* Barra de navegación inferior */}
      <nav className="fixed bottom-0 left-0 w-full bg-blue-100 border-t border-blue-200 flex justify-around py-3 shadow-inner z-50">
        <button className="flex flex-col items-center text-blue-700 hover:text-blue-900 text-xs">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          Mi cuenta
        </button>
        <button className="flex flex-col items-center text-blue-700 hover:text-blue-900 text-xs">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12h2V5h18v14h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M13 12h7v2h-7z"/></svg>
          Juegos y datos
        </button>
        <button className="flex flex-col items-center text-blue-700 hover:text-blue-900 text-xs">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z"/></svg>
          Dispositivos
        </button>
        <button className="flex flex-col items-center text-blue-700 hover:text-blue-900 text-xs">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.44c4.16 0 7.56 3.4 7.56 7.56S16.16 19.56 12 19.56 4.44 16.16 4.44 12 7.84 4.44 12 4.44M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
          Ajustes
        </button>
      </nav>
    </main>
  );
}
