import { Box, Flex, Grid, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Logo } from './logo';
import { ThemeSwitch } from './theme-switch';
import bgPatternMobile from './bg-pattern-header-mobile.svg';
import bgPatternTablet from './bg-pattern-header-tablet.svg';
import bgPatternDesktop from './bg-pattern-header-desktop.svg';

export const Layout = () => {
  const headerHeightBase = '8.4375rem';
  const headerHeightSm = '10rem';
  return (
    <Box h="full" pos="relative">
      <Box
        pos="absolute"
        w="full"
        h={{ base: headerHeightBase, sm: headerHeightSm }}
        backgroundImage={{ base: bgPatternMobile, sm: bgPatternTablet, lg: bgPatternDesktop }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius={{ sm: '0 0 0 100px' }}
        zIndex={-1}
      />
      <Grid
        templateRows={{ base: `${headerHeightBase} 1fr`, sm: `${headerHeightSm} 1fr` }}
        h="full"
        minW="18.75rem"
        w="fit-content"
        mx="auto"
      >
        <Flex
          as="header"
          justify="space-between"
          align="start"
          pt={{ base: '2rem', sm: '2.625rem' }}
        >
          <ChakraLink as={RouterLink} href="/" title="Home page">
            <Logo />
          </ChakraLink>
          <ThemeSwitch />
        </Flex>
        <Box as="main">
          <Outlet />
        </Box>
      </Grid>
    </Box>
  );
};
