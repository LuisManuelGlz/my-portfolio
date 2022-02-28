import React, { ReactNode, useContext } from 'react';
import { Box, BoxProps, Image, ImageProps, Text } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import ImageType from '../types/image';
import LocaleBlockType from '../types/localeBlock';
import TagType from '../types/tag';
import { LanguageContext } from '../contexts/LanguageContext';
import useTranslation from '../hooks/useTranslation';
import MarkLink from '../components/mark-link';

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
const MotionImage = motion<Omit<ImageProps, 'transition'>>(Image);

const variants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
  exit: (i: number) => ({
    opacity: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};

type Props = {
  _id: string;
  index: number;
  title: string;
  description: LocaleBlockType;
  tags: Array<TagType>;
  handleClick: () => void;
  image: ImageType;
};

const ProjectCard = ({
  _id,
  index,
  title,
  description,
  tags,
  handleClick,
  image,
}: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();

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
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      exit="exit"
      custom={index}
      variants={variants}
    >
      <Box
        position="relative"
        _hover={{
          _before: {
            inset: 0,
          },
        }}
        _before={{
          content: "''",
          position: 'absolute',
          inset: '48px',
          filter: 'blur(25px)',
          transform: 'scale(1)',
          background: 'primaryGradient',
          transition: 'inset 2s 0.5s',
          zIndex: -10,
        }}
      >
        <MotionImage
          src={image.asset.url}
          alt={title}
          objectFit="cover"
          borderRadius="2xl"
          layoutId={`card-container-${_id}`}
          cursor="pointer"
          onClick={handleClick}
          whileHover={{ scale: 1.1, y: -5, transition: { delay: 0.6 } }}
        />
      </Box>
      <Text as="h4" marginTop={2} fontWeight="semibold" textAlign="center">
        {title}
      </Text>
      <BlockContent
        blocks={description[locale]}
        serializers={{
          marks: { link: MarkLink },
          types: { block: blockRenderer },
        }}
      />
    </MotionBox>
  );
};

export default ProjectCard;
