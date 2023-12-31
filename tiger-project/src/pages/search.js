import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Search.module.css"; // Assume you have a CSS module with your styles
import Image from "next/image";
import Link from "next/link";

import Prism from "prismjs";
const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>
      <code children={code} className={`language-${language}`} />
    </pre>
  );
};

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [additionalData, setAdditionalData] = useState(null);

  const handleSearchClick = async (randomFiltered = false) => {
    // Empty the states before performing the search
    setFetchedData([]);
    setAdditionalData(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/reviewed/all");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      let filteredData = {};
      if (randomFiltered) {
        console.log(data)
        // let id = Math.floor(Math.random() * (data.length+1));
        // filteredData = data[id];
      } else {
        // Filter the data based on the searchTerm
        filteredData = data.filter((item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFetchedData(filteredData);

      if (filteredData.length < 1) {
        // console.log(searchTerm)
        let postData = { term: searchTerm.toLowerCase() };
        let postResponse = await fetch("http://127.0.0.1:5000/combined", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        let end = await postResponse.json();
        // console.log(end)
        setAdditionalData(end); // Set the end data to additionalData state
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className={styles.body}>
      {/* <script src="/prism.js"></script>
            <link rel="stylesheet" type="text/css" href="/prism.css"></link> */}
      {/* Navigation Bar */}
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref>
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={200}
              height={75}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className={styles.navItems}>
          <Link href="/" passHref className={styles.navItem}>
            Home
          </Link>
          <Link href="/about" passHref className={styles.navItem}>
            About
          </Link>
          <Link href="/contact" passHref className={styles.navItem}>
            Contact
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <Head>
          <title>Search Page</title>
        </Head>

        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Enter your search term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key == "Enter") handleSearchClick();
              }}
            />
            <button type="button" onClick={handleSearchClick}>
              🔍
            </button>
          </div>
        </div>

<<<<<<< HEAD


    return (

        <div className={styles.body}>
            {/* Navigation Bar */}
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





            <div className={styles.container}>
                <Head>
                    <title>Search Page</title>
                </Head>

                <div className={styles.searchContainer}>
                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Enter your search term"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="button" onClick={handleSearchClick}>🔍</button>
=======
        {(fetchedData.length > 0 || additionalData) && (
          <main className={`${styles.main} ${styles.centeredContainer}`}>
            {/* Flashcards and its contents */}
            {/* Cards Container */}
            <div className={styles.flashcards}>
              {fetchedData.map((item, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={styles.termTitle}>{item.term}</h3>
                  <div>
                    <strong>Definitions:</strong>
                    <ul className={styles.definitionsList}>
                      {item.definition.map((def, defIndex) => (
                        <li key={defIndex}>{def}</li>
                      ))}
                    </ul>
                  </div>
                  {item.graphics && item.graphics.length > 0 && (
                    <div>
                      <strong>Graphics:</strong>
                      {item.graphics.map((graphic, imgIdx) => (
                        <div key={imgIdx} className={styles.graphicContainer}>
                          {/* Use video tag for mp4 files */}
                          <video
                            className={styles.graphicVideo}
                            autoPlay
                            loop
                            muted
                            controls
                            onError={(e) =>
                              console.error("Error loading video:", e)
                            }
                          >
                            <source src={graphic} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ))}
>>>>>>> 397d4b7714503729f1b9187400e7c5d2d06c04b1
                    </div>
                  )}

                  <div>
                    <strong>Examples:</strong>
                    <ul className={styles.examplesList}>
                      {" "}
                      {/* Apply class here */}
                      {item.examples.map((example, exIdx) => (
                        <li key={exIdx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Code:</strong>
                    <ul>
                      <CodeBlock
                        code={item.code}
                        language={"python"}
                      ></CodeBlock>
                      {/* <pre>
                                                <code className="language-python">
                                                    {item.code}
                                                </code>
                                            </pre> */}
                    </ul>
                  </div>
                </div>
              ))}
              {/* Conditionally render the card for additionalData */}
              {additionalData && (
                <div className={styles.card}>
                  <h3 className={styles.termTitle}>{additionalData.term}</h3>
                  <div>
                    <strong>Definitions:</strong>
                    <ul className={styles.definitionsList}>
                      {additionalData.definitions.map((def, defIndex) => (
                        <li key={defIndex}>{def}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Code:</strong>
                    <ul className={styles.definitionsList}>
                        <CodeBlock code={additionalData.code} language={"python"}></CodeBlock>
                    </ul>
                  </div>
                  {/* Assuming additionalData also has graphics and examples */}
                  {/* {additionalData.graphics && additionalData.graphics.length > 0 && (
                                    <div>
                                        <strong>Graphics:</strong>
                                        {additionalData.graphics.map((graphic, imgIdx) => (
                                            <div key={imgIdx} className={styles.graphic}>
                                                <Image src={graphic} alt={`${additionalData.term} graphic`} width={100} height={100} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div>
                                    <strong>Examples:</strong>
                                    <ul className={styles.examplesList}>
                                        {additionalData.examples.map((example, exIdx) => (
                                            <li key={exIdx}>{example}</li>
                                        ))}
                                    </ul>
                                </div> */}
                </div>
              )}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
