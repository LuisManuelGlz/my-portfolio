import React, { ReactNode, useContext } from 'react';
import {
  Box,
  BoxProps,
  Heading,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import IProject from '../types/project';
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

  const { title, image, tags, description } = projects.find(
    (project) => project._id === id
  )!;

  return (
    <>
      {/* Overlay */}
      <MotionBox
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        onClick={handleClick}
        variants={projectVariants}
        position="fixed"
        background="rgba(0, 0, 0, 0.8)"
        inset={0}
      />

      {/* Card */}
      <Box
        width="100%"
        height="100%"
        pointerEvents="none"
        inset={0}
        position="fixed"
        paddingY={{ sm: 0, md: '40px' }}
      >
        <MotionBox
          position="relative"
          borderRadius="3xl"
          background={useColorModeValue('whiteAlpha.800', '#1c1c1e')}
          overflow="hidden"
          width="100%"
          height="100%"
          margin="0 auto"
          maxWidth="700px"
          layoutId={`card-container-${id}`}
        >
          {/* <Box
            bgGradient="linear(to-b, black, transparent)"
            // background="linear-gradient(to bottom, black, transparent)"
            width="100%"
            height="100%"
            zIndex={100}
          /> */}
          <MotionBox
            position="absolute"
            overflow="hidden"
            height="420px"
            width="100vw"
            layoutId={`card-image-container-${id}`}
          >
            <Image src={image.asset.url} alt={title} />
          </MotionBox>

          <MotionBox
            position="absolute"
            top="30px"
            left="30px"
            layoutId={`title-container-${id}`}
          >
            {tags.map((tag, index) => (
              <Badge key={index} marginRight="7px" colorScheme="gray">
                {tag}
              </Badge>
            ))}
            <Heading as="h2" size="md" color="whiteAlpha.900">
              {title}
            </Heading>
          </MotionBox>

          <MotionBox
            paddingX="35px"
            paddingBottom="35px"
            paddingTop="460px"
            width="90vw"
            animate
          >
            <BlockContent
              blocks={description[locale]}
              serializers={{ marks: { link } }}
            />
          </MotionBox>
        </MotionBox>
      </Box>
    </>
  );
};

export default ProjectItem;
