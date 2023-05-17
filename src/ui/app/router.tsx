import { createHashRouter } from 'react-router-dom';
import { Layout, NotFound } from '@/ui/components';
import { Detail, Home } from '@/ui/pages';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':jobId',
        element: <Detail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
