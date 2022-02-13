import React, { ReactNode, useContext } from 'react';
import {
  Box,
  BoxProps,
  Heading,
  Image,
  Badge,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import BlockContent from '@sanity/block-content-to-react';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import IProject from '../types/project';
import styles from './project-footer/project-footer.module.scss';
import CommonLink from './common-link';

const projectVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

type Props = {
  id: string;
  handleClick: () => void;
  projects: Array<IProject>;
};

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);

const ProjectItem = ({ id, handleClick, projects }: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();

  const link = ({
    mark: { href },
    children,
  }: {
    mark: { href: string };
    children: ReactNode;
  }) => <CommonLink href={href}>{children}</CommonLink>;

  const { title, image, tags, description, website, repo } = projects.find(
    (project) => project._id === id
  )!;

  return (
    <Box position="fixed" inset={0} padding={{ base: '20px', sm: '40px' }}>
      {/* Overlay */}
      <MotionBox
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.2, delay: 0.15 }}
        onClick={handleClick}
        variants={projectVariants}
        position="fixed"
        background="rgba(0, 0, 0, 0.8)"
        inset={0}
      />

      {/* Card */}
      <MotionBox
        position="relative"
        borderRadius="3xl"
        background={useColorModeValue('whiteAlpha.900', '#1c1c1c')}
        overflow="hidden" // this prevents that the image container form being displayed
        width="100%"
        height="100%"
        margin="0 auto"
        maxWidth="700px"
        layoutId={`card-container-${id}`}
      >
        {/* Banner container */}
        <MotionBox
          position="relative"
          width="100%"
          layoutId={`card-image-container-${id}`}
        >
          <Image objectFit="cover" src={image.asset.url} alt={title} />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-b, rgba(0, 0, 0, 0.7), transparent)"
          />

          {/* Header */}
          <MotionBox
            position="absolute"
            top={7}
            left={7}
            right={7}
            display="flex"
            justifyContent="space-between"
            layoutId={`title-container-${id}`}
          >
            <Box>
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  marginRight="7px"
                  variant="solid"
                  colorScheme="gray"
                >
                  {tag}
                </Badge>
              ))}
              <Heading
                as="h3"
                marginTop={5}
                // size="md"
                fontSize={{ sm: 'lg', md: 'xl' }}
                color="whiteAlpha.900"
              >
                {title}
              </Heading>
            </Box>
            <IconButton
              aria-label="Close Card"
              icon={<IoClose />}
              onClick={handleClick}
            />
          </MotionBox>

          {/* <Box className={styles.projectFooterContainer}>
            <a
              className={styles.projectFooterGoToSiteButton}
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('goToSite')}
            </a>

            <a
              className={styles.projectFooterSeeCodeButton}
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('seeCode')}
            </a>
          </Box> */}
        </MotionBox>

        {/* Description */}
        <MotionBox padding="35px" animate pointerEvents="all">
          <BlockContent
            blocks={description[locale]}
            serializers={{ marks: { link } }}
          />
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default ProjectItem;
