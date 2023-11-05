import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Search.module.css'; // Assume you have a CSS module with your styles
import Image from 'next/image';

export default function Search() {
    // State to store the input value
    // const [searchTerm, setSearchTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    // const [fetchedData, setFetchedData] = useState(null);
    const [fetchedData, setFetchedData] = useState([]);


    const handleSearchClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/reviewed/all');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Filter the data based on the searchTerm
            const filteredData = data.filter(item =>
                item.term.toLowerCase().includes(searchTerm.toLowerCase())
            );

            setFetchedData(filteredData);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };




    return (

        <>
            {/* Navigation Bar */}
            <div className={styles.navbar}>
                {/* Image Component from Next.js to include a logo */}
                <div className={styles.navItem}>
                    <Image
                        src="/logo.png" // Path to your image file
                        alt="Company Logo" // Alt text for the image
                        width={200} // Desired width
                        height={75} // Desired height
                    // Optional properties like layout could be added here
                    />
                </div>
                <div className={styles.navItem}>Home</div>
                <div className={styles.navItem}>About</div>
                <div className={styles.navItem}>Contact</div>
            </div>

            <div className={styles.container}>
                <Head>
                    <title>Search Page</title>
                </Head>

                <div className={styles.searchContainer}>
                    <div className={styles.searchContainer}>
                        <div className={styles.searchBar}>
                            <input
                                type="text"
                                placeholder="Enter your search term"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="button" onClick={handleSearchClick}>🔍</button>
                        </div>
                    </div>
                </div>

                <main className={`${styles.main} ${styles.centeredContainer}`}>
                    {/* Flashcards and its contents */}
                    {/* Cards Container */}
                    <div className={styles.flashcards}>
                        {fetchedData && fetchedData.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <h3 className={styles.termTitle}>{item.term}</h3>
                                <p><strong>Code:</strong> {item.code}</p>
                                <div>
                                    <strong>Definitions:</strong>
                                    <ul className={styles.definitionsList}> {/* Apply class here */}
                                        {item.definition.map((def, defIndex) => (
                                            <li key={defIndex}>{def}</li>
                                        ))}
                                    </ul>
                                </div>
                                {item.graphics && item.graphics.length > 0 && (
                                    <div>
                                        <strong>Graphics:</strong>
                                        {item.graphics.map((graphic, imgIdx) => (
                                            <div key={imgIdx} className={styles.graphic}>
                                                <Image src={graphic} alt={`${item.term} graphic`} width={100} height={100} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div>
                                    <strong>Examples:</strong>
                                    <ul className={styles.examplesList}> {/* Apply class here */}
                                        {item.examples.map((example, exIdx) => (
                                            <li key={exIdx}>{example}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                </main>
            </div>
        </>
    );
}
