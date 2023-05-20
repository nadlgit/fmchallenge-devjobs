import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { JobProvider, sampleJobs } from '@/data';
import { router } from './router';
import { theme } from './theme';

export const App = () => (
  <JobProvider jobs={sampleJobs}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </JobProvider>
);
