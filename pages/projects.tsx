import React, { useState } from 'react';
import Head from 'next/head';
import { SimpleGrid } from '@chakra-ui/react';
import {
  motion,
  Variants,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion';
import useTranslation from '../hooks/useTranslation';
import IProject from '../types/project';
import ProjectItem from '../components/project-item';
import Section from '../components/section';
import Title from '../components/title';
import Paragraph from '../components/paragraph';
import ProjectCard from '../components/project-card';
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
  const [selectedId, setSelectedId] = useState<string | null>(null);

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

        <Paragraph delay={0.4}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          porro magnam iusto commodi et consequuntur fuga impedit? Itaque quas
          ut harum rerum ea, optio amet aliquam fuga eos! Voluptatibus excepturi
          libero harum architecto enim dignissimos culpa sapiente consequatur
          cumque quidem aliquid sed, maxime corrupti cupiditate veniam
          laboriosam nesciunt aliquam velit.
        </Paragraph>

        <SimpleGrid columns={[1, 2, 3]} gap={10} mt={20}>
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              {...project}
              handleClick={() => setSelectedId(project._id)}
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
