import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteMain from './pages/RouteMain';
import Home from './pages/Home';
import About from './pages/About';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteMain />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
