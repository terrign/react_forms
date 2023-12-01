import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/Main';
import ControlledFormPage from '../pages/ControlledForm';
import UnControlledFormPage from '../pages/UnControlledForm';
import PageNotFound from '../pages/404';
import ErrorPage from '../pages/ErrorPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/controlled',
        element: <ControlledFormPage />,
      },
      {
        path: '/uncontrolled',
        element: <UnControlledFormPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <PageNotFound />,
  },
];

export default routes;
