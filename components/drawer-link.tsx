import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ButtonProps, Button, useColorModeValue } from '@chakra-ui/react';

type Props = {
  path: string;
} & NextLinkProps &
  ButtonProps;

const NavLink = ({ href, path, children, ...rest }: Props) => {
  const isActive = path === href;

  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        p={2}
        variant={isActive ? 'solid' : 'ghost'}
        colorScheme={useColorModeValue('blackAlpha', 'blue')}
        {...rest}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default NavLink;
