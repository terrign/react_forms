import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

function MainPage() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default MainPage;
