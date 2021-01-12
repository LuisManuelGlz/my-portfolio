import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import Project from '../components/project';
import IProject from '../types/project';
import { getAllProjects } from '../lib/api';

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

  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Layout>
        <Head>
          <title>Luis Manuel</title>
        </Head>

        <Header />

        <Container>
          {/* showcase */}
          <section>
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="text-primary text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                Hola, soy Luis.
              </h1>
              <h2 className="text-gray text-xl md:text-2xl lg:text-3xl">
                Soy un Desarrollador Web Jr
              </h2>
            </div>
          </section>

          {/* projects */}
          <section id="projects">
            <div className="py-16 text-light">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                Mis <span className="block text-primary">proyectos</span>
              </h3>
              <div className="flex flex-col items-center">
                {allProjects.map((project, index) => (
                  <Project
                    key={project._id}
                    effect={index / 2 === 0 ? 'zoom-in-up' : 'zoom-in-down'}
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
            </div>
          </section>

          {/* about */}
          <section id="about">
            <div className="text-light py-16">
              <h3 className="text-5xl md:text-6xl lg:text-7xl text-primary font-bold mb-8">
                Acerca de
              </h3>
              <p className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 text-light text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                assumenda maiores autem at numquam quibusdam, accusantium alias
                iusto fugit obcaecati recusandae et eligendi repellat,
                praesentium sequi aut. A, alias. Excepturi?
              </p>
            </div>
          </section>
        </Container>
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
