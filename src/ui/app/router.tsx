import { createHashRouter } from 'react-router-dom';
import { Layout } from '@/ui/components';
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
    ],
  },
]);
