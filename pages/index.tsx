import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Header from '../components/header';
import Project from '../components/project';
import { getAllProjects } from '../lib/api';
import IProject from '../types/project';

type Props = {
  allProjects: IProject[];
};

const Home = ({ allProjects }: Props) => {
  // const allProjects: IProject[] = [
  //   {
  //     _id: '68c6-452e-9771',
  //     description: 'Aplicación para comentar y calificar películas',
  //     image: { asset: { url: 'https://i.ibb.co/3NHjDcW/paint-2.png' } },
  //     members: [
  //       {
  //         _id: 'e586-490f-b57f',
  //         github: 'https://github.com/LuisManuelGlz',
  //         name: 'Luis Manuel',
  //       },
  //       {
  //         _id: 'dc65-4a57-a50b',
  //         github: 'https://github.com/LuisManuelGlz',
  //         name: 'Luis Manuel',
  //       },
  //       {
  //         _id: '96f2-48bf-95de',
  //         github: 'https://github.com/LuisManuelGlz',
  //         name: 'Luis Manuel',
  //       },
  //     ],
  //     repo: 'https://github.com/LuisManuelGlz/MovieDuck',
  //     tags: ['Django', 'Python', 'HTML', 'MongoDB', 'Bootstrap'],
  //     title: 'MovieDuck',
  //     website: 'https://movieduck.herokuapp.com',
  //   },
  //   {
  //     _id: '5478-4fc6-87d9',
  //     description: 'App de notas',
  //     image: { asset: { url: 'https://i.ibb.co/5LkJFRP/paint-4.png' } },
  //     members: [
  //       {
  //         _id: '96f2-48bf-95de',
  //         github: 'https://github.com/LuisManuelGlz',
  //         name: 'Luis Manuel',
  //       },
  //     ],
  //     repo: 'https://github.com/LuisManuelGlz/noteate-client',
  //     tags: ['TypeScript', 'Angular', 'Bootstrap'],
  //     title: 'Aplicación de notas',
  //     website: 'https://noteate.vercel.app',
  //   },
  // ];

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
            {allProjects.map((project, index) => (
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

export const getStaticProps = async () => {
  const allProjects = await getAllProjects();

  return {
    props: { allProjects },
  };
};
