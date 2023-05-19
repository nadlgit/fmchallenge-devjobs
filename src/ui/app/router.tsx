import { createHashRouter } from 'react-router-dom';
import { Layout, NotFound, RouteScrollToTop } from '@/ui/components';
import { Detail, Home } from '@/ui/pages';

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <RouteScrollToTop />
        <Layout />
      </>
    ),
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
