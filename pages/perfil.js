import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Perfil() {
  const router = useRouter();

  useEffect(() => {
    router.push('/en-construccion');
  }, []);

  return null;
} 