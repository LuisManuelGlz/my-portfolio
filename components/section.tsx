import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, AnimationProps } from 'framer-motion';

type Props = {
  children: ReactNode;
  delay?: number;
} & AnimationProps;

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);

const Section = ({ children, delay = 0, ...rest }: Props) => {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.8, delay }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      exit={{ y: 10, opacity: 0 }}
      paddingY={20}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default Section;
