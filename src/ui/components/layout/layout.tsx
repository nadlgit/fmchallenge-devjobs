import { Box, Flex, Grid, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Logo } from './logo';
import { ThemeSwitch } from './theme-switch';
import bgPatternMobile from './bg-pattern-header-mobile.svg';
import bgPatternTablet from './bg-pattern-header-tablet.svg';
import bgPatternDesktop from './bg-pattern-header-desktop.svg';

export const Layout = () => {
  const headerHeightBase = '8.4375rem';
  const headerHeightLarger = '10rem';
  return (
    <Box h="full" pos="relative">
      <Box
        pos="absolute"
        w="full"
        h={{ base: headerHeightBase, md: headerHeightLarger }}
        backgroundImage={{ base: bgPatternMobile, md: bgPatternTablet, lg: bgPatternDesktop }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderBottomLeftRadius={{ md: '100px' }}
        zIndex={-1}
      />
      <Grid
        templateRows={{ base: `${headerHeightBase} 1fr`, md: `${headerHeightLarger} 1fr` }}
        h="full"
        minW={{ base: '18.75rem', md: '43rem' }}
        w="max"
        mx="auto"
      >
        <Flex
          as="header"
          justify="space-between"
          align="start"
          pt={{ base: '2rem', md: '2.625rem' }}
        >
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
