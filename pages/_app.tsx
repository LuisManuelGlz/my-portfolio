import '@fontsource/open-sans';
import '@fontsource/montserrat';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../layout/main';

import { LanguageProvider } from '../contexts/LanguageContext';
import theme from '../lib/theme';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </LanguageProvider>
    </ChakraProvider>
  );
};

export default MyApp;
