import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import Cookies from 'js-cookie';
import {
  Redirect,
  Route,
  RouteProps,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import AuthLayout from './AuthLayout';
import DashboardLayout from './DashboardLayout';
import OnboardingLayout from './OnboardingLayout';
import { dashboardRoutes } from './Routes';
import SessionTimeout from './SessionTimeout';
import { useEffect } from 'react';

const renderRoutes = () => {
  const dispatch = useAppDispatch();

  const {
    login: { data, loading: loginLoading },
  } = useAppSelector(({ auth }) => auth);

  const renderRoute = (
    routerProps: RouteProps,
    Component: any,
    isPrivate = false,
    type: string,
    path: string
  ) => {
    if (Component) {
      const componentProps = {
        ...routerProps,
      };

      if (isPrivate) {
        const token = Cookies.get('token');
        const isLoggedIn = Boolean(token);
        const tokenTime = Cookies.get('tokenExp') as any;

        const authExpired = () => {
          return isLoggedIn && new Date().getTime() > +tokenTime;
        };

        if (authExpired()) {
          // dispatch(logout());
        }

        // if (isUnverified && type !== 'onboarding')
        //   return <Redirect to="/get-started" />;

        // if (!isLoggedIn) return <Redirect to="/login" />;

        return (
          <SessionTimeout>
            <DashboardLayout>
              <Component {...componentProps} />
            </DashboardLayout>
          </SessionTimeout>
        );
      }

      return (
        <AuthLayout>
          <Component {...componentProps} />
        </AuthLayout>
      );
    }
    return null;
  };

  return dashboardRoutes.map(route => (
    <Route
      key={route.name}
      exact={route.exact}
      path={route.path}
      render={routerProps =>
        renderRoute(
          routerProps,
          route.component,
          route.isPrivate,
          route.type,
          route.path
        )
      }
    />
  ));
};

const AppRouter = () => <Switch>{renderRoutes()}</Switch>;

export default AppRouter;
