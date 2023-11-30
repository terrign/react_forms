import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/Main';
import ControlledFormPage from '../pages/ControlledForm';
import UnControlledFormPage from '../pages/UnControlledForm';
import PageNotFound from '../pages/404';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/controlled',
    element: <ControlledFormPage />,
  },
  {
    path: '/uncontrolled',
    element: <UnControlledFormPage />,
  },
  {
    path: '/*',
    element: <PageNotFound />,
  },
];

export default routes;
