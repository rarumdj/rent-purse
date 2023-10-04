import Login from 'pages/Authentication/Login';
import PageNotFound from 'pages/PageNotFound';

// const Dashboard = lazy(() => import('pages/dashboard'));

export const dashboardRoutes = [
  {
    name: 'login',
    isPrivate: false,
    path: '/login',
    component: Login,
    exact: true,
    type: 'auth',
  },

  {
    path: '*',
    name: 'Page Not Found',
    component: PageNotFound,
    isPrivate: true,
    type: '404',
  },
];
