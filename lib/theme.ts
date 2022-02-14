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
  primary: '#0099ff',
  dark: '#1c1c1c',
};

const theme = extendTheme({
  config,
  styles,
  colors,
});

export default theme;
