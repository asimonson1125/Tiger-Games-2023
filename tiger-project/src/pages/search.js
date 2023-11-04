import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Search.module.css'; // Assume you have a CSS module with your styles

export default function Search() {
    // State to store the input value
    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle the button click and make the GET request
    const handleSearchClick = async () => {
        try {
            const response = await fetch('http://localhost:5000/reviewed/0');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data); // Printing the result in the console
            // You can also set the data to state and display it in the component if needed
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

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
                        <input
                            type="text"
                            placeholder="Enter your search term"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {/* Attach the handleSearchClick function to the onClick event */}
                        <button type="button" onClick={handleSearchClick}>🔍</button>
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
