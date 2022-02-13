import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Image,
  ImageProps,
  SimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';
import {
  motion,
  Variants,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTranslation from '../hooks/useTranslation';
import IProject from '../types/project';
import styles from '../styles/Home.module.scss';
import ProjectItem from '../components/project-item';
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

const MotionImage = motion<Omit<ImageProps, 'transition'>>(Image);

type Props = {
  projects: Array<IProject>;
};

const Projects = ({ projects }: Props) => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <AnimateSharedLayout type="crossfade">
      <Head>
        <title>{t('projects')} | Luis Manuel</title>
      </Head>

      <Section delay={0.1}>
        <Title>
          <motion.span variants={headingTextVariants}>{t('my')}</motion.span>
          <motion.span variants={headingTextVariants}>
            {t('projects')}
          </motion.span>
        </Title>

        <SimpleGrid columns={[1, 2, 3]} gap={10} mt={10}>
          {projects.map((project) => (
            <MotionImage
              key={project._id}
              src={project.image.asset.url}
              alt={project.title}
              objectFit="cover"
              borderRadius="2xl"
              layoutId={`card-container-${project._id}`}
              cursor="pointer"
              onClick={() => setSelectedId(project._id)}
              // isSelected={project._id === selectedId}
            />
          ))}
        </SimpleGrid>
      </Section>

      <AnimatePresence>
        {selectedId && (
          <ProjectItem
            id={selectedId}
            projects={projects}
            handleClick={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: { projects },
  };
};
