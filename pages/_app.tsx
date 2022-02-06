import type { AppProps } from 'next/app';
// import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // <ChakraProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    // </ChakraProvider>
  );
};

export default MyApp;
