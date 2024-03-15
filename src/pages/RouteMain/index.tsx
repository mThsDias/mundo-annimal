import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';

const RouteMain = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default RouteMain;
