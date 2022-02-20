import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode('whiteAlpha.900', '#131516')(props),
    },
  }),
};

const colors = {
  primary: {
    50: '#80ccff',
    100: '#66c2ff',
    200: '#4db8ff',
    300: '#33adff',
    400: '#1aa3ff',
    500: '#0099ff',
    600: '#008ae6',
    700: '#007acc',
    800: '#006bb3',
    900: '#005c99',
  },
  dark: {
    50: '#8e8e8e',
    100: '#777777',
    200: '#606060',
    300: '#494949',
    400: '#333333',
    500: '#1c1c1c',
    600: '#191919',
    700: '#161616',
    800: '#141414',
    900: '#111111',
  },
};

const components = {
  Link: {
    baseStyle: {
      color: 'primary.500',
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
});

export default theme;
