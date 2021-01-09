import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Header from '../components/header';
import Project from '../components/project';

const Home = () => {
  const projects = [
    {
      _id: '1',
      title: 'Acrylic Painting One',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus minima quam maiores dicta blanditiis et repellat quo totam fugit impedit.',
      members: [
        {
          name: 'Luis Manuel',
          github:
            'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        },
        {
          name: 'Luis Manuel',
          github:
            'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        },
      ],
      tags: ['HTML', 'CSS'],
      image: { asset: { url: 'https://i.ibb.co/VvC0vpN/paint-1.png' } },
      website:
        'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      repo:
        'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    },
    {
      title: 'Acrylic Painting One',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus minima quam maiores dicta blanditiis et repellat quo totam fugit impedit.',
      members: [
        {
          name: 'Luis Manuel',
          github:
            'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        },
        {
          name: 'Luis Manuel',
          github:
            'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        },
      ],
      tags: ['HTML', 'CSS'],
      image: { asset: { url: 'https://i.ibb.co/VvC0vpN/paint-1.png' } },
      website:
        'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      repo:
        'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    },
  ];

  return (
    <div>
      <Head>
        <title>Luis Manuel G.</title>
      </Head>

      <Header />

      <Layout>
        <section id="showcase" className={styles.showcase}>
          <video src="./video.mp4" muted loop autoPlay />

          <div className={styles.text}>
            <h1>Luis Manuel</h1>
            <h2>Desarrollador Web Jr</h2>
          </div>
        </section>

        <section id="about" className={styles.about}>
          About
        </section>

        <section id="projects" className={styles.projects}>
          <h3 className={styles.section__title}>Proyectos personales</h3>
          <div className={styles.projects__container}>
            {projects.map((project, index) => (
              <Project
                key={project._id}
                fade={index / 2 === 0 ? 'fade-left' : 'fade-right'}
                title={project.title}
                description={project.description}
                members={project.members}
                tags={project.tags}
                image={project.image.asset.url}
                website={project.website}
                repo={project.repo}
              />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
