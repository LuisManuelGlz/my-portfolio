import React, { ReactNode, useContext } from 'react';
import { Box, BoxProps, Image, ImageProps, Text } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import ImageType from '../types/image';
import LocaleBlockType from '../types/localeBlock';
import CommonLink from './common-link';
import { LanguageContext } from '../contexts/LanguageContext';
import useTranslation from '../hooks/useTranslation';

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
  tags: Array<string>;
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
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      exit="exit"
      custom={index}
      variants={variants}
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
      <Text as="h4" marginTop={2} fontWeight="semibold" textAlign="center">
        {title}
      </Text>
      <BlockContent
        blocks={description[locale]}
        serializers={{
          marks: { link },
          types: { block: blockRenderer },
        }}
      />
    </MotionBox>
  );
};

export default ProjectCard;
