import Image from 'next/image';
import styles from '../styles/Search.module.css';
import homeStyles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref>
            <Image src="/logo.png" alt="Company Logo" width={200} height={75} style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        <div className={styles.navItems}>
          <Link href="/" passHref className={styles.navItem}>Home</Link>
          <Link href="/about" passHref className={styles.navItem}>About</Link>
          <Link href="/contact" passHref className={styles.navItem}>Contact</Link>
        </div>
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