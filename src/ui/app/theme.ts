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
    violetalpha1: 'hsla(235, 69%, 61%, 0.1)',
    violetalpha2: 'hsla(235, 69%, 61%, 0.35)',
    whitealpha1: 'hsla(0, 0%, 100%, 0.1)',
    whitealpha2: 'hsla(0, 0%, 100%, 0.35)',
    verydarkblue: 'hsla(219, 29%, 14%, 1)',
    verydarkbluealpha: 'hsla(219, 29%, 14%, 0.1)',
    midnight: 'hsla(219, 29%, 10%, 1)',
    lightgrey: 'hsla(217, 26%, 97%, 1)',
    grey: 'hsla(212, 23%, 69%, 1)',
    darkgrey: 'hsla(214, 17%, 51%, 1)',
    darkgreyalpha: 'hsla(214, 17%, 51%, 0.2)',
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
        checkbox: { default: 'verydarkbluealpha', _dark: 'whitealpha1' },
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
      sizes: {
        h1: { fontSize: '1.75rem', lineHeight: '2.125rem' },
        h2: { fontSize: '1.5rem', lineHeight: '1.875rem' },
        h3: { fontSize: '1.25rem', lineHeight: '1.5rem' },
        h4: { fontSize: '0.875rem', lineHeight: '1.125rem' },
      },
    },
    Button: {
      baseStyle: { fontSize: '1rem', lineHeight: '1.25rem' },
      variants: {
        button1: {
          color: 'white',
          backgroundColor: 'violet',
          _hover: { backgroundColor: 'lightviolet' },
        },
        button2: {
          color: 'violet',
          backgroundColor: 'violetalpha1',
          _hover: { backgroundColor: 'violetalpha2' },
          _dark: {
            color: 'white',
            backgroundColor: 'whitealpha1',
            _hover: { backgroundColor: 'whitealpha2' },
          },
        },
      },
    },
    Input: {
      variants: {
        app: {
          field: {
            backgroundColor: 'bg.base',
            color: 'text.contrast',
            fontSize: '1rem',
            lineHeight: '1.25rem',
          },
        },
      },
    },
    Checkbox: {
      variants: {
        app: {
          control: {
            height: '1.5rem',
            width: '1.5rem',
            border: 'none',
            backgroundColor: 'bg.checkbox',
            _checked: {
              color: 'white',
              backgroundColor: 'violet',
              _hover: { backgroundColor: 'violet' },
            },
          },
          label: {
            color: 'text.contrast',
            fontSize: '1rem',
            lineHeight: '1.25rem',
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});
