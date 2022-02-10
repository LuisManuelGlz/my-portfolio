import React from 'react';
import Link from 'next/link';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import ToggleModeButton from './toggle-mode-button';
import NavLink from './nav-link';
import LocaleMenu from './locale-menu';

type Props = {
  path: string;
};

const Navigation = ({ path }: Props) => {
  const { t } = useTranslation();

  return (
    <Box as="nav" w="100%">
      <Container
        display="flex"
        maxW="container.md"
        alignItems="center"
        p={2}
        justifyContent="space-between"
      >
        <Stack direction={{ base: 'column', sm: 'row' }}>
          <NavLink href="/projects" path={path}>
            {t('projects')}
          </NavLink>
          <NavLink href="/contact" path={path}>
            {t('contact')}
          </NavLink>
        </Stack>

        <Heading size="lg">
          <Link href="/">Luis Manuel</Link>
        </Heading>

        <Stack direction={{ base: 'column', sm: 'row' }}>
          <LocaleMenu />
          <ToggleModeButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navigation;
