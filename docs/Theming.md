# Theming
## Applying a theme to the whole app

To enable custom theming, Shadow UI provides a ThemeProvider component. Wrap your root component with this provider to activate theme support throughout your application.

```tsx
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import App from './App';
import theme from './theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
     <App/>
    </ThemeProvider>
  );
};

export default Main;
```
## Accessing theme properties

Use the built-in useTheme() hook to get access to the theme's variables:

```tsx
import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Box } from './components';

export const HomeScreen = () => {
  const theme = useTheme<Theme>();

  return (
    <Box bg={theme.colors.primary} flex={1} />
  );
};
```

## Defining Your theme

Any project that uses this library should define a global theme object containing values for spacing, colors, breakpoints, and more. These theme values are accessible throughout all Restyle components — for example, you can set backgroundColor="cardPrimary" to use a named color from your theme. TypeScript further enhances this experience by restricting the backgroundColor property to only accept defined theme colors and offering autocomplete support in modern editors.

Our theme configuration:
```tsx
import { createTheme } from '@shopify/restyle';
import { Dimensions, Platform } from 'react-native';

import { colors } from './colors';

import { fontFamily, fontSizes, fontWeights, textVariants } from './variants/text-variants';

const { width, height } = Dimensions.get('window');

const sizes = {
  full: '100%',
  width,
  height,
  sideSpace: 20,
  safeWidth: width - 20 - 20,
  activeOpacity: 0.8,
  minHeaderHeight: 60,
};

const boxShadow = {
  ...Platform.select({
    ios: {
      shadowColor: colors.secondary100,
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.24,
      shadowRadius: 16,
    },
    android: {
      elevation: 2,
    },
  }),
};

const spacing = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 12,
  6: 16,
  7: 20,
  8: 24,
  9: 28,
  10: 32,
  12: 36,
  14: 40,
  16: 44,
  18: 48,
  20: 56,
  22: 64,
  24: 80,
  26: 96,
  27: 192,
};

const borderRadii = {
  none: 0,
  'rounded-xs': 4,
  'rounded-sm': 8,
  rounded: 12,
  'rounded-md': 16,
  'rounded-lg': 20,
  'rounded-xl': 24,
  'rounded-xxl': 28,
  'rounded-hu': 33,
  'rounded-full': 9999,
};

const zIndices = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};

const breakpoints = {};

const theme = createTheme({
  colors,
  borderRadii,
  spacing,
  boxShadow,
  fontWeights,
  fontFamily,
  fontSizes,
  sizes,
  zIndices,
  breakpoints,
});

export type Theme = typeof theme;

export default theme;
```
