import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Solutions from '../pages/Solutions';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import ErrorPage from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />, // global error boundary
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
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'solutions',
        element: <Solutions />,
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
