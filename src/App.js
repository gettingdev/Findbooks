import logo from './logo.svg';
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import Masuk from './pages/masuk';
import Main from './pages/main';
import Genre from './pages/genre';
import Template from './pages/template';
import Find from './pages/find';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <h1 className='flex h-[100vh] items-center justify-center text-[40px] bg-black text-white font-bold'>404.</h1>
    },
    {
      path: '/login',
      element: <Masuk />
    },
    {
      path: '/app',
      element: (
        <Template>
          <Outlet />
        </Template>
      ),
      children: [
        {
          index: true,
          element: <Main />
        },
        {
          path: 'genre',
          element: <Genre />
        },
        {
          path: 'find/:query',
          element: <Find />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}
