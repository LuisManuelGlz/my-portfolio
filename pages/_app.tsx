import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import theme from '../lib/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ChakraProvider>
  );
};

export default MyApp;
