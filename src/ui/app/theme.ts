import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: { initialColorMode: 'system' },
  fonts: {
    body: 'Kumbh Sans, sans-serif',
    heading: 'Kumbh Sans, sans-serif',
  },
  colors: {
    violet: 'hsla(235, 69%, 61%, 1)',
    lightviolet: 'hsla(235, 82%, 77%, 1)',
    verydarkblue: 'hsla(219, 29%, 14%, 1)',
    midnight: 'hsla(219, 29%, 10%, 1)',
    lightgrey: 'hsla(217, 26%, 97%, 1)',
    grey: 'hsla(212, 23%, 69%, 1)',
    darkgrey: 'hsla(214, 17%, 51%, 1)',
  },
  semanticTokens: {
    colors: {
      text: {
        base: { default: 'darkgrey', _dark: 'grey' },
        contrast: { default: 'verydarkblue', _dark: 'white' },
      },
      bg: {
        base: { default: 'white', _dark: 'verydarkblue' },
        app: { default: 'lightgrey', _dark: 'midnight' },
      },
    },
  },
  styles: {
    global: {
      'html, body, #root': {
        height: '100%',
      },
      body: {
        fontSize: '1rem',
        lineHeight: '1.625rem',
        color: 'text.base',
        backgroundColor: 'bg.app',
      },
    },
  },
  components: {
    Heading: {
      variants: {
        h1: { fontSize: '1.75rem', lineHeight: '2.125rem' },
        h2: { fontSize: '1.5rem', lineHeight: '1.875rem' },
        h3: { fontSize: '1.25rem', lineHeight: '1.5rem' },
        h4: { fontSize: '0.875rem', lineHeight: '1.125rem' },
      },
    },
  },
});
