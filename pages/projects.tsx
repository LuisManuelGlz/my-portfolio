import React, { useEffect, useState, useContext, ReactNode } from 'react';
import Head from 'next/head';
import {
  Image,
  ImageProps,
  SimpleGrid,
  SimpleGridProps,
  Box,
  Text,
  TextProps,
} from '@chakra-ui/react';
import {
  motion,
  Variants,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion';
import useTranslation from '../hooks/useTranslation';
import IProject from '../types/project';
import styles from '../styles/Home.module.scss';
import ProjectItem from '../components/project-item';
import Section from '../components/section';
import Title from '../components/title';
import { LanguageContext } from '../contexts/LanguageContext';
// import { getAllProjects } from '../lib/api';
import { getAllProjects } from '../lib/api.dev';
import CommonLink from '../components/common-link';
import BlockContent from '@sanity/block-content-to-react';

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
const MotionText = motion<Omit<TextProps, 'transition'>>(Text);

type Props = {
  projects: Array<IProject>;
};

const Projects = ({ projects }: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const link = ({
    mark: { href },
    children,
  }: {
    mark: { href: string };
    children: ReactNode;
  }) => <CommonLink href={href}>{children}</CommonLink>;

  const blockRenderer = ({ children }: { children: ReactNode }) => (
    <Text
      noOfLines={[3, 2, 3]}
      textAlign="center"
      paddingX={5}
      marginTop={1}
      fontSize="sm"
    >
      {children}
    </Text>
  );

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

        <Text as="p" mt={5}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          porro magnam iusto commodi et consequuntur fuga impedit? Itaque quas
          ut harum rerum ea, optio amet aliquam fuga eos! Voluptatibus excepturi
          libero harum architecto enim dignissimos culpa sapiente consequatur
          cumque quidem aliquid sed, maxime corrupti cupiditate veniam
          laboriosam nesciunt aliquam velit.
        </Text>

        <SimpleGrid columns={[1, 2, 3]} gap={10} mt={20}>
          {projects.map((project) => (
            <Box>
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
              <Text
                as="h4"
                marginTop={2}
                fontWeight="semibold"
                textAlign="center"
              >
                {project.title}
              </Text>
              <BlockContent
                blocks={project.description[locale]}
                serializers={{
                  marks: { link },
                  types: { block: blockRenderer },
                }}
              />
            </Box>
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
