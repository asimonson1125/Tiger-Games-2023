import React from 'react';
import Image from 'next/image';
import styles from '../styles/Search.module.css';
import Link from 'next/link';

function contact() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <Link href="/" passHref>
                        <Image src="/logo_white.png" alt="Company Logo" width={250} height={100} style={{ cursor: 'pointer' }} />
                    </Link>
                </div>
                <div className={styles.navItems}>
                    <Link href="/" passHref className={styles.navItem}>Home</Link>
                    <Link href="/about" passHref className={styles.navItem}>About</Link>
                    <Link href="/contact" passHref className={styles.navItem}>Contact</Link>
                </div>
            </div>

            <div style={{ padding: '20px' }}>
                <h1>Contact Information</h1>

                <div style={{ marginBottom: '20px' }}>
                    <h2>Andrew Simonson</h2>
                    <p>Email: <a href="mailto:asimonson1125@gmail.com">asimonson1125@gmail.com</a></p>
                    <p>Website: <a href="http://asimonson.com" target="_blank" rel="noopener noreferrer">asimonson.com</a></p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h2>MOHAMMED ALAM</h2>
                    <p>Phone: 347-656-5368</p>
                    <p>Location: New York, NY</p>
                    <p>Email: <a href="mailto:moeal2144@gmail.com">moeal2144@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/moe-alam" target="_blank" rel="noopener noreferrer">moe-alam</a></p>
                    <p>Github: <a href="https://github.com/Mal" target="_blank" rel="noopener noreferrer">Mal</a></p>
                </div>

                <div>
                    <h2>Andrew Isaacson</h2>
                    <p>Email: <a href="mailto:aci4835@rit.edu">aci4835@rit.edu</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/andrew—isaacson/" target="_blank" rel="noopener noreferrer">andrew—isaacson</a></p>
                    <p>Github: <a href="https://github.com/xkabot" target="_blank" rel="noopener noreferrer">xkabot</a></p>
                </div>
            </div>
        </>


    );
}

export default contact;
