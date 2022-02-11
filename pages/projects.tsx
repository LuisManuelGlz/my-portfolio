import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion, Variants } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTranslation from '../hooks/useTranslation';
import IProject from '../types/project';
import styles from '../styles/Home.module.scss';
import Project from '../components/project';
import Section from '../components/section';
import Title from '../components/title';
// import { getAllProjects } from '../lib/api';
import { getAllProjects } from '../lib/api.dev';

const headingTextVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

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

      <Section delay={0.1}>
        <div className={styles.projectsContainer}>
          <Title>
            <motion.span variants={headingTextVariants}>{t('my')}</motion.span>
            <motion.span variants={headingTextVariants}>
              {t('projects')}
            </motion.span>
          </Title>

          {/* <div className={styles.projectsListContainer}>
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
          </div> */}
        </div>
      </Section>
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
