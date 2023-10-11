import ForgotPassword from 'pages/Authentication/Forgot-password';
import Login from 'pages/Authentication/Login';
import Register from 'pages/Authentication/Register';
import ResetPassword from 'pages/Authentication/Reset-password';
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
    name: 'register',
    isPrivate: false,
    path: '/register',
    component: Register,
    exact: true,
    type: 'auth',
  },
  {
    name: 'verifiy-email',
    isPrivate: false,
    path: '/verify-email',
    component: Register,
    exact: true,
    type: 'auth',
  },
  {
    name: 'forgot-password',
    isPrivate: false,
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true,
    type: 'auth',
  },
  {
    name: 'verify-password-reset',
    isPrivate: false,
    path: '/verify-password-reset',
    component: ForgotPassword,
    exact: true,
    type: 'auth',
  },
  {
    name: 'reset-password',
    isPrivate: false,
    path: '/reset-password',
    component: ResetPassword,
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
