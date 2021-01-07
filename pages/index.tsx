import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  useEffect(() => {
    const nav = document.querySelector('#nav');
    const badge = document.querySelector('#badge');
    const showcase = document.querySelector('#showcase');

    const showcaseOptions = {
      rootMargin: '-10px 0px 0px 0px',
    };

    const showcaseObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.classList.add(styles.nav__scrolled);
          badge.classList.add(styles.nav__badge_show);
        } else {
          nav.classList.remove(styles.nav__scrolled);
          badge.classList.remove(styles.nav__badge_show);
        }
      });
    }, showcaseOptions);

    showcaseObserver.observe(showcase);
  }, []);

  return (
    <div>
      <Head>
        <title>Luis Manuel G.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav id="nav" className={styles.nav}>
          <div>
            <a id="badge" className={`${styles.nav__badge} ${styles.nav__link}`} href="#">Luis Manuel G.</a>
          </div>
          <div>
            <ul className={styles.nav__list}>
              <li className={styles.nav__list_item}>
                <a className={styles.nav__link} href="#languages">
                  Lenguajes y tecnologías
                </a>
              </li>
              <li className={styles.nav__list_item}>
                <a className={styles.nav__link} href="#projects">
                  Proyectos personales
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="showcase" className={styles.showcase}>
          <video src="./video.mp4" muted loop autoPlay />

          <div className={styles.text}>
            <h1>Luis Manuel</h1>
            <h2>Desarrollador Web Jr</h2>
          </div>
        </section>

        <section>
          <div id="languages" className={styles.languages}>
            Languages and tools
          </div>
        </section>

        <section>
          <div id="projects" className={styles.projects}>
            Projects
          </div>
        </section>
      </main>

      {/* <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
