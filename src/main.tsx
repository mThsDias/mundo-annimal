import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import './global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800, // duração da animação em milissegundos
  easing: 'ease-in-out', // tipo de easing
  offset: 200, // deslocamento em pixels do início da animação
  once: false, // se a animação deve ocorrer apenas uma vez
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
