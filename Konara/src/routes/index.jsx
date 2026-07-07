import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Bipv from '../pages/Bipv';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'bipv',
        element: <Bipv />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
    ],
  },
]);
