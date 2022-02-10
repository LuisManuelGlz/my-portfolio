import React, { ReactNode } from 'react';
import { GetStaticProps } from 'next';
import { Router } from 'next/router';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ISocialLinks from '../types/socialLinks';
import { getSiteSettings } from '../lib/api.dev';

type Props = {
  children: ReactNode;
  router: Router;
};

const main = ({ children, router }: Props) => {
  const { t } = useTranslation();

  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Luis Manuel's portfolio" />
        <meta name="author" content="Luis Manuel González" />
        <meta name="author" content="LuisManuelGlz" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{t('home')} | Luis Manuel</title>
      </Head>

      <Navigation path={router.asPath} />

      <Container maxW="container.xl">{children}</Container>

      <Footer socialLinks={undefined} />
    </Box>
  );
};

export default main;
