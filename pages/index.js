import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import { getColorValuesForProject1 } from "../helpers/appColors";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [colorSet1, setColorSet1] = useState([]);
  const [colorSet2, setColorSet2] = useState([]);

  const fetchApp1Colors = async () => {
    const response = await fetch("/api/app1Colors");
    const data = await response.json();
    setColorSet1(getColorValuesForProject1(data));
  };

  const fetchApp2Colors = async () => {
    const response = await fetch("/api/app2Colors");
    const data = await response.json();
    setColorSet2(getColorValuesForProject1(data));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Colors Challenge</title>
        <meta name="cma" content="simple color models loading app" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <h1>Colors Challenge</h1>
      <main className={styles.main}>
        <section className={styles.colorSection}>
          <div className={styles.colorHeader}>
            <h2 className={styles.title}>Stage 1</h2>
            <button onClick={fetchApp1Colors}>Load Colors</button>
          </div>

          <div className={styles.swatcheList}>
            {colorSet1.map((colorSwatche) => {
              return (
                <div
                  key={colorSwatche.id}
                  className={styles.swatche}
                  style={{ backgroundColor: colorSwatche.value }}
                />
              );
            })}
          </div>
        </section>

        <section className={styles.colorSection}>
          <div className={styles.colorHeader}>
            <h2 className={styles.title}>Stage 2</h2>
            <button onClick={fetchApp2Colors}>Load Colors</button>
          </div>
          <div className={styles.swatcheList}>
            {colorSet2.map((colorSwatche) => {
              return (
                <div
                  key={colorSwatche.id}
                  className={styles.swatche}
                  style={{ backgroundColor: colorSwatche.value }}
                />
              );
            })}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Colors Challenge &nbsp;</p>
        <Image src="/cma.png" alt="CMA Logo" width={24} height={24} />
        <p>&nbsp; 2022</p>
      </footer>
    </div>
  );
}
