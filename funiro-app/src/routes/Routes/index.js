import React from 'react';
import LandingPage from '../../pages/LandingPage';
import routePath from '../RoutePath';

const routes = [
  {
    path: routePath.HOME,
    exact: true,
    component: <LandingPage />,
  },
];

export default routes;
