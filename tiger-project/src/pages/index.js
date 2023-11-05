import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Search.module.css';
import homeStyles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <div className={styles.navbar}>
        <div className={styles.navItem}>
          <Image src="/logo.png" alt="Company Logo" width={200} height={75} />
        </div>
        <div className={styles.navItem}>Home</div>
        <div className={styles.navItem}>About</div>
        <div className={styles.navItem}>Contact</div>
      </div>

      {/* Centered Container for the big logo */}
      <div className={homeStyles.container}>
        <div className={homeStyles.bigLogo}>
          <Image src="/logo.png" alt="Company Logo" width={800} height={600} />
        </div>
        <Link href="/search" passHref>
          <button className={homeStyles.button}>Go to Search</button>
        </Link>
      </div>
    </>
  );
}