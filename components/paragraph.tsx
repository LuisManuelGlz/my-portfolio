import React, { ReactNode } from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { AnimationProps, motion, Variants } from 'framer-motion';

const paragraphVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 10,
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const MotionText = motion<Omit<TextProps, 'transition'>>(Text);

type Props = {
  children: ReactNode;
  delay?: number;
} & AnimationProps;

const Paragraph = ({ children, delay = 0 }: Props) => {
  return (
    <MotionText
      as="p"
      mt={5}
      textAlign={{ base: 'center', sm: 'left' }}
      fontSize={{ base: 'sm', sm: 'md' }}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.8, delay }}
      variants={paragraphVariants}
    >
      {children}
    </MotionText>
  );
};

export default Paragraph;
