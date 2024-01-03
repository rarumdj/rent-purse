import ForgotPassword from 'pages/Authentication/Forgot-password';
import Login from 'pages/Authentication/Login';
import Register from 'pages/Authentication/Register';
import ResetPassword from 'pages/Authentication/Reset-password';
import GetStarted from 'pages/Get-started';
import PageNotFound from 'pages/PageNotFound';
import Plans from 'pages/Plans';
import AllPlans from 'pages/Plans/AllPlans';
import Contributors from 'pages/Plans/Contributors';
import PlanDetails from 'pages/Plans/PlanDetails';

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
    name: 'plans',
    isPrivate: true,
    path: '/plan/details',
    component: PlanDetails,
    exact: true,
    type: 'dashboard',
  },
  {
    name: 'plans',
    isPrivate: true,
    path: '/plan/details/contributors',
    component: Contributors,
    exact: true,
    type: 'dashboard',
  },
  {
    name: 'plans',
    isPrivate: true,
    path: '/plan/all',
    component: AllPlans,
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
