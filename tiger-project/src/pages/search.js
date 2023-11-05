import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Search.module.css'; // Assume you have a CSS module with your styles
import Image from 'next/image';

export default function Search() {
    // State to store the input value
    const [searchTerm, setSearchTerm] = useState('');
    const [terms, setTerms] = useState([]);


    // Function to handle the button click and make the GET request
    const handleSearchClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/reviewed/');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Ensure that data.terms is an array before setting the state
            console.log(data)
            if (Array.isArray(data.terms)) {
                setTerms(data.terms);
            } else {
                throw new Error('Data is not in expected format: no terms array');
            }
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

                    <div className={styles.termsContainer}>
                        {terms && terms.length > 0 && terms.map((term, index) => (
                            <div key={index} className={styles.termItem}>
                                <h3 className={styles.termTitle}>{term.term}</h3>
                                <div>
                                    <strong>Code:</strong> {term.code || 'N/A'}
                                </div>
                                <div>
                                    <strong>Definitions:</strong>
                                    <ul>
                                        {term.definition.map((definition, idx) => (
                                            <li key={idx}>{definition}</li>
                                        ))}
                                    </ul>
                                </div>
                                {term.graphics.length > 0 && (
                                    <div>
                                        <strong>Graphics:</strong>
                                        {term.graphics.map((graphic, imgIdx) => (
                                            <div key={imgIdx} className={styles.graphic}>
                                                <Image src={graphic} alt={`${term.term} graphic`} width={100} height={100} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div>
                                    <strong>Examples:</strong>
                                    <ul>
                                        {term.examples.map((example, exIdx) => (
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
