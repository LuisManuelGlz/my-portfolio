import React, { useRef, MutableRefObject } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  ButtonProps,
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
  const btnRef: any = useRef();

  return (
    <>
      <Box as="nav" w="100%">
        <Container
          display="flex"
          maxW="container.lg"
          alignItems="center"
          p={2}
          justifyContent="space-between"
        >
          <Stack
            display={{ base: 'none', md: 'block' }}
            direction={{ base: 'column', sm: 'row' }}
          >
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

          <Stack
            display={{ base: 'none', md: 'block' }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <LocaleMenu />
            <ToggleModeButton />
          </Stack>

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
          <DrawerHeader></DrawerHeader>

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
