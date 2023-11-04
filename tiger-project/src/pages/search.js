import Head from 'next/head';
import styles from '../styles/Search.module.css'; // Assume you have a CSS module with your styles

export default function Search() {
    return (

        <>
            {/* Navigation Bar */}
            <div className={styles.navbar}>
                <div className={styles.navItem}>Home</div>
                <div className={styles.navItem}>About</div>
                <div className={styles.navItem}>Contact</div>
            </div>

            <div className={styles.container}>
                <Head>
                    <title>Search Page</title>
                </Head>

                <main className={styles.main}>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Enter your search term" />
                        <button type="submit">🔍</button>
                    </div>

                    <div className={styles.accordion}>
                        <div className={styles.accordionItem}>
                            <div className={styles.accordionTitle}>English</div>
                            <textarea placeholder="Definition"></textarea>
                            <textarea placeholder="Example"></textarea>
                        </div>

                        <div className={styles.accordionItem}>
                            <div className={styles.accordionTitle}>Math</div>
                            <textarea placeholder="Definition"></textarea>
                            <textarea placeholder="Example"></textarea>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
