import React from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import ToggleModeButton from './toggle-mode-button';
import NavLink from './nav-link';
import LocaleMenu from './locale-menu';

type Props = {
  siteName: string;
};

const Navigation = ({ siteName }: Props) => {
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
          <NavLink href="/projects" path="/projects">
            {t('projects')}
          </NavLink>
          <NavLink href="/contact" path="/projects">
            {t('contact')}
          </NavLink>
        </Stack>

        <Heading size="lg">{siteName}</Heading>

        <Stack direction={{ base: 'column', sm: 'row' }}>
          <LocaleMenu />
          <ToggleModeButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navigation;
