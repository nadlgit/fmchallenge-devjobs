import { Box, Flex, Grid, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Logo } from './logo';
import { ThemeSwitch } from './theme-switch';
import bgPatternMobile from './bg-pattern-header-mobile.svg';
import bgPatternTablet from './bg-pattern-header-tablet.svg';
import bgPatternDesktop from './bg-pattern-header-desktop.svg';

export const Layout = () => {
  const bgImage = useBreakpointValue({
    base: bgPatternMobile,
    tablet: bgPatternTablet,
    desktop: bgPatternDesktop,
  });
  const headerSizes = useBreakpointValue({
    base: { height: '8.4375rem', spaceTop: '2rem' },
    tablet: { height: '10rem', spaceTop: '2.625rem' },
  });
  const spaceInline = useBreakpointValue({
    base: 'max(1.5rem, calc(4.07vw + 0.546rem))',
    tablet: 'max(2.5rem, calc(18.6vw - 6.43rem))',
  });

  return (
    <Box pos="relative" h="full" minW="18.75rem">
      <Box
        pos="absolute"
        h={headerSizes?.height}
        w="full"
        backgroundImage={bgImage}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderBottomLeftRadius={{ md: '100px' }}
        zIndex={-1}
      />
      <Grid templateRows={`${headerSizes?.height} 1fr`} h="full" px={spaceInline}>
        <Flex as="header" justify="space-between" align="start" pt={headerSizes?.spaceTop}>
          <ChakraLink as={RouterLink} href="/" title="Home page">
            <Logo />
          </ChakraLink>
          <ThemeSwitch />
        </Flex>
        <Box as="main" pos="relative">
          <Outlet />
        </Box>
      </Grid>
    </Box>
  );
};
