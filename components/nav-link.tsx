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
        as="button"
        p={2}
        colorScheme={isActive ? 'primary' : useColorModeValue('dark', 'gray')}
        _hover={{
          bg: useColorModeValue('gray.100', 'dark.400'),
        }}
        _focusWithin={{
          bg: useColorModeValue('gray.100', 'dark.400'),
        }}
        variant="ghost"
        {...rest}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default NavLink;
