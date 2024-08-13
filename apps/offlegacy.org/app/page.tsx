import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.logo} src="/offlegacy.svg" alt="offlegacy logo" width={256} height={256} priority />
        <h1 className={styles.title}>OffLegacy</h1>
      </main>
    </div>
  );
}
