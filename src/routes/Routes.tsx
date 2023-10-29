import { lazy } from 'react';

const ForgotPassword = lazy(() => import('pages/Authentication/Forgot-password'));
const Login = lazy(() => import('pages/Authentication/Login'));
const Register = lazy(() => import('pages/Authentication/Register'));
const ResetPassword = lazy(() => import('pages/Authentication/Reset-password'));
const GetStarted = lazy(() => import('pages/Get-started'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));
const Plans = lazy(() => import('pages/Plans'));

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
    name: 'get-started',
    isPrivate: true,
    path: '/get-started',
    component: GetStarted,
    exact: true,
    type: 'dashboard',
  },
  {
    name: 'plans',
    isPrivate: true,
    path: '/',
    component: Plans,
    exact: true,
    type: 'dashboard',
  },
  {
    path: '*',
    name: 'Page Not Found',
    component: PageNotFound,
    isPrivate: true,
    type: '404',
  },
];
