import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, AnimationProps } from 'framer-motion';

type Props = {
  children: ReactNode;
} & AnimationProps;

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);

const Section = ({ children, ...rest }: Props) => {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default Section;
