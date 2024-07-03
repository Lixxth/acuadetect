import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Button() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (session) {
    return (
      <div className="flex flex-col justify-center z-50">
        <span className="text-lg mb-2 ml-1 font-bold text-center">
          Iniciaste sesión como: {session.user.email}
        </span>
        <button
          onClick={() => router.push("/inicio")}
          className="px-6 py-2 font-bold rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-200 z-50"
        >
          Ir a Inicio
        </button>
        <button
          onClick={() => signOut()}
          className="px-6 py-2 font-bold rounded bg-red-500 text-white hover:bg-red-600 transition duration-200 z-50 mt-2"
        >
          Cerrar Sesión
        </button>
      </div>
    );
  }

  return (
    <div className="justify-center text-center z-50">
      <p className="font-bold text-xl mb-2">¡Únete ya!</p>
      <button
        onClick={() => signIn("google")}
        className="flex flex-row items-center h-10 w-36 p-2 font-bold rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
      >
        <FcGoogle className="mr-4" />
        Inicia Sesión
      </button>
    </div>
  );
}