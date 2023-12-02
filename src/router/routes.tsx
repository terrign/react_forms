import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ControlledFormPage from '../pages/ControlledForm';
import UnControlledFormPage from '../pages/UnControlledForm';
import PageNotFound from '../pages/404';
import ErrorPage from '../pages/ErrorPage';
import Root from '../pages/Root';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
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
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <PageNotFound />,
  },
];

export default routes;
