import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function JuegosyConsejos() {
  const router = useRouter();

  useEffect(() => {
    router.push('/en-construccion');
  }, []);

  return null;
}  