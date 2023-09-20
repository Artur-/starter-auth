import Placeholder from 'Frontend/components/placeholder/Placeholder.js';
import AuthControl from 'Frontend/views/AuthControl.js';
import HelloWorldView from 'Frontend/views/helloworld/HelloWorldView.js';
import LoginView from 'Frontend/views/login/LoginView.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

export const routes: RouteObject[] = [
  {
    element: (
      <AuthControl fallback={<Placeholder />}>
        <MainLayout />
      </AuthControl>
    ),
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <HelloWorldView />, handle: { title: 'Hello World', requiresLogin: true } },
      { path: '/about', element: <AboutView />, handle: { title: 'About', requiresLogin: true } },
    ],
  },
  { path: '/login', element: <LoginView /> },
];

export default createBrowserRouter(routes);
