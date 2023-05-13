import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <Box minH="full">
    <Outlet />
  </Box>
);
