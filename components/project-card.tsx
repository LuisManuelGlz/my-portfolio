import React, { ReactNode, useContext } from 'react';
import { Box, Image, ImageProps, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import ImageType from '../types/image';
import LocaleBlockType from '../types/localeBlock';
import CommonLink from './common-link';
import { LanguageContext } from '../contexts/LanguageContext';
import useTranslation from '../hooks/useTranslation';

const MotionImage = motion<Omit<ImageProps, 'transition'>>(Image);

type Props = {
  _id: string;
  title: string;
  description: LocaleBlockType;
  tags: Array<string>;
  handleClick: () => void;
  image: ImageType;
};

const ProjectCard = ({
  _id,
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
    <Box>
      <MotionImage
        src={image.asset.url}
        alt={title}
        objectFit="cover"
        borderRadius="2xl"
        layoutId={`card-container-${_id}`}
        cursor="pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.1, y: -5 }}
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
    </Box>
  );
};

export default ProjectCard;
