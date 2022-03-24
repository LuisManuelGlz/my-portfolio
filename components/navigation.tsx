import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  useColorModeValue,
  useDisclosure,
  IconButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  HStack,
  Box,
} from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';
import useTranslation from '../hooks/useTranslation';
import ToggleModeButton from './toggle-mode-button';
import NavLink from './nav-link';
import DrawerLink from './drawer-link';
import LocaleMenu from './locale-menu';

type Props = {
  path: string;
};

const Navigation = ({ path }: Props) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const [isBackgroundTransparent, setIsBackgroundTransparent] = useState(true);
  const backgroundColor = useColorModeValue('whiteAlpha.800', 'blackAlpha.800');
  const backgroundBase = useColorModeValue('white', 'black');

  useEffect(() => {
    const handleScrollChange = () =>
      setIsBackgroundTransparent(window.scrollY < 100);

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScrollChange);
    }

    return () => window.removeEventListener('scroll', handleScrollChange);
  }, []);

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        w="100%"
        backdropFilter="auto"
        backdropSaturate="180%"
        backdropBlur="5px"
        zIndex={10}
        backgroundColor={{
          base: backgroundBase,
          md: isBackgroundTransparent ? 'transparent' : backgroundColor,
        }}
        transitionProperty="background"
        transitionDuration="500ms"
        transitionTimingFunction="ease-in"
      >
        <Container
          display="flex"
          maxW={{ base: 'container.sm', md: 'container.md' }}
          alignItems="center"
          p={2}
          justifyContent="space-between"
        >
          <HStack display={{ base: 'none', md: 'block' }}>
            <NavLink href="/projects" path={path}>
              {t('projects')}
            </NavLink>
            <NavLink href="/contact" path={path}>
              {t('contact')}
            </NavLink>
          </HStack>

          <Heading size="lg">
            <Link href="/" scroll={false}>
              Luis Manuel
            </Link>
          </Heading>

          <HStack display={{ base: 'none', md: 'block' }}>
            <LocaleMenu />
            <ToggleModeButton />
          </HStack>

          <Box display={{ base: 'inline-block', md: 'none' }}>
            <IconButton
              aria-label="Close Card"
              icon={<IoMenu />}
              onClick={onOpen}
            />
          </Box>
        </Container>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay
          background="rgba(0, 0, 0, 0.8)"
          backdropFilter="auto"
          backdropBlur="5px"
        />
        <DrawerContent
          background={useColorModeValue('whiteAlpha.900', 'dark.500')}
          bgGradient={useColorModeValue(
            'linear(to-b, transparent, blue.200)',
            'linear(to-b, transparent, rgba(0, 0, 0, 0.5))'
          )}
        >
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Stack mt={5}>
              <DrawerLink href="/projects" path={path} onClick={onClose}>
                {t('projects')}
              </DrawerLink>
              <DrawerLink href="/contact" path={path} onClick={onClose}>
                {t('contact')}
              </DrawerLink>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Stack direction="row">
              <LocaleMenu />
              <ToggleModeButton />
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navigation;
