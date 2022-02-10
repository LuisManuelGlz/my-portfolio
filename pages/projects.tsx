import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTranslation from '../hooks/useTranslation';
import IProject from '../types/project';
import styles from '../styles/Home.module.scss';
import Project from '../components/project';
// import { getAllProjects } from '../lib/api';
import { getAllProjects } from '../lib/api.dev';

type Props = {
  projects: Array<IProject>;
};

const Projects = ({ projects }: Props) => {
  const { t } = useTranslation();

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
      <Head>
        <title>{t('projects')} | Luis Manuel</title>
      </Head>

      {/* projects */}
      <section id="projects">
        <div className={styles.projectsContainer}>
          <h3 className={styles.projectsHeader}>
            <span>{t('my')}</span>
            <span>{t('projects')}</span>
          </h3>
          <div className={styles.projectsListContainer}>
            {projects.map((project, index) => (
              <Project
                key={project._id}
                effect={index % 2 === 0 ? 'zoom-in-up' : 'zoom-in-down'}
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
    </div>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: { projects },
  };
};
