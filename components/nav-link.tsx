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
        bg={isActive ? 'primary' : undefined}
        color={
          isActive
            ? 'whiteAlpha.900'
            : useColorModeValue('gray.700', 'whiteAlpha.900')
        }
        {...rest}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default NavLink;
