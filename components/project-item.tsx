import React, { ReactNode, useContext } from 'react';
import {
  Box,
  BoxProps,
  Text,
  Heading,
  Image,
  Badge,
  IconButton,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import BlockContent from '@sanity/block-content-to-react';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import Project from '../types/project';
import MarkLink from '../components/mark-link';

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
  projects: Array<Project>;
};

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);

const ProjectItem = ({ id, handleClick, projects }: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();

  const blockRenderer = ({ children }: { children: ReactNode }) => (
    <Text marginTop={3} fontSize={{ base: 'sm', sm: 'md' }}>
      {children}
    </Text>
  );

  const { title, compressedImage, tags, description, website, repo } =
    projects.find((project) => project._id === id)!;

  return (
    <Box
      position="fixed"
      inset={0}
      padding={{ base: '20px', sm: '25px' }}
      zIndex={10}
    >
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
        backdropFilter="auto"
        backdropBlur="5px"
        inset={0}
      />

      {/* Card */}
      <MotionBox
        position="relative"
        borderRadius="3xl"
        background={useColorModeValue('whiteAlpha.900', 'dark.500')}
        overflow="hidden" // this prevents that the image container form being displayed
        width="100%"
        height="100%"
        margin="0 auto"
        maxWidth="700px"
        layoutId={`card-container-${id}`}
      >
        {/* Banner container */}
        <MotionBox position="relative" width="100%">
          <Image
            objectFit="cover"
            src={compressedImage.asset.url}
            alt={title}
          />
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
          >
            <Box>
              <Heading
                as="h3"
                // size="md"
                fontSize={{ sm: 'lg', md: 'xl' }}
                color="whiteAlpha.900"
              >
                {title}
              </Heading>
            </Box>
            <IconButton
              colorScheme="gray"
              aria-label="Close Card"
              icon={<IoClose />}
              onClick={handleClick}
            />
          </MotionBox>

          <MotionBox
            position="absolute"
            right={7}
            bottom={7}
            display={{ base: 'none', sm: 'flex' }}
            gap={5}
            mt={5}
          >
            <Button
              as="a"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="lg"
              colorScheme="primary"
              color="whiteAlpha.900"
            >
              {t('goToSite')}
            </Button>

            <Button
              as="a"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="lg"
              colorScheme="dark"
              color="whiteAlpha.900"
            >
              {t('seeCode')}
            </Button>
          </MotionBox>
        </MotionBox>

        {/* Description */}
        <MotionBox paddingY="20px" paddingX="25px" animate pointerEvents="all">
          {tags.map(({ _id, name, site, backgroundColor }) => (
            <Badge
              as="a"
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              fontSize={{ base: 'x-small', sm: 'xs' }}
              key={_id}
              marginRight="7px"
              variant="solid"
              backgroundColor={backgroundColor.hex}
              color="whiteAlpha.900"
            >
              {name}
            </Badge>
          ))}

          <BlockContent
            blocks={description[locale]}
            serializers={{
              marks: { link: MarkLink },
              types: { block: blockRenderer },
            }}
          />

          <Box
            display={{ base: 'flex', sm: 'none' }}
            flexDirection="column"
            gap={5}
            mt={5}
          >
            <Button
              as="a"
              width="full"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="lg"
              colorScheme="primary"
              color="whiteAlpha.900"
            >
              {t('goToSite')}
            </Button>

            <Button
              as="a"
              width="full"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="lg"
              variant="ghost"
            >
              {t('seeCode')}
            </Button>
          </Box>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default ProjectItem;
