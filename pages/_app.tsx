import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import Layout from '../layout/main';

import { LanguageProvider } from '../contexts/LanguageContext';
import theme from '../lib/theme';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ChakraProvider>
  );
};

export default MyApp;
