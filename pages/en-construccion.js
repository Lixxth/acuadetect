import { useRouter } from 'next/router';
import styles from '../styles/EnConstruccion.module.css';

export default function EnConstruccion() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>🚧 En Construcción 🚧</h1>
        <p>Esta sección está siendo desarrollada. ¡Vuelve pronto!</p>
        <button 
          onClick={() => router.back()}
          className={styles.button}
        >
          Volver atrás
        </button>
      </div>
    </div>
  );
} 