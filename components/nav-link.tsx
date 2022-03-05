import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps, Link, useColorModeValue } from '@chakra-ui/react';

type Props = {
  path: string;
} & NextLinkProps &
  LinkProps;

const NavLink = ({ href, path, children, ...rest }: Props) => {
  const isActive = path === href;

  const color = useColorModeValue('dark.500', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        color={isActive ? color : 'gray.500'}
        _hover={{ color }}
        _focusWithin={{ color }}
        variant="ghost"
        {...rest}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavLink;
