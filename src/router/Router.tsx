import { useContext } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Container from '../layout/Container';
import { ROUTES } from '../utilities/constants';
import { AuthContext } from '../context/AuthContext';

const PublicRoute = ({
  component: Component,
  showHeader = true,
  showFooter = true,
  onComponent = {},
  path,
  meta,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Container showHeader={showHeader} showFooter={showFooter} meta={meta}>
          <Component {...props} {...onComponent} />
        </Container>
      )}
    />
  );
};

const RestrictedRoute = ({
  component: Component,
  allowNavigation = false,
  showHeader = true,
  showFooter = true,
  onComponent,
  path,
  meta,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        allowNavigation ? (
          <Container showHeader={showHeader} showFooter={showFooter} meta={meta}>
            <Component {...props} {...onComponent} />
          </Container>
        ) : (
          <Redirect to={ROUTES.NOT_FOUND.path} />
        )
      }
    />
  );
};

const PrivateRoute = ({
  component: Component,
  allowNavigation = false,
  showHeader = true,
  showFooter = true,
  onComponent,
  path,
  meta,
  ...rest
}: any) => {
  const { isSignedIn }: any = useContext(AuthContext);

  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        isSignedIn !== null &&
        (isSignedIn ? (
          <Container showHeader={showHeader} showFooter={showFooter} meta={meta}>
            <Component {...props} {...onComponent} />
          </Container>
        ) : (
          <Redirect to={ROUTES.SIGN_IN.path} />
        ))
      }
    />
  );
};

const AuthRoute = ({
  component: Component,
  path,
  meta,
  showHeader = false,
  showFooter = false,
  ...rest
}: any) => {
  const { isSignedIn }: any = useContext(AuthContext);

  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        !isSignedIn ? (
          <Container showHeader={showHeader} showFooter={showFooter} meta={meta}>
            <Component {...props} />
          </Container>
        ) : (
          <Redirect to={ROUTES.HOME.path} />
        )
      }
    />
  );
};

export { Router, Switch, Redirect, AuthRoute, PublicRoute, PrivateRoute, RestrictedRoute };
