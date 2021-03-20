import { lazy, Suspense } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';
import { ROUTES } from './utilities/constants';
import { Switch, Router, Redirect, AuthRoute, PublicRoute, PrivateRoute } from './router/Router';
import GlobalStyle from './GlobalStyle';

const Landing = lazy(() => import('./pages/Landing'));

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <PublicRoute exact component={Landing} {...ROUTES.LANDING} />
            <PrivateRoute exact component={<>Hello</>} {...ROUTES.SIGN_IN} />
            <AuthRoute exact component={<>Hello</>} {...ROUTES.SIGN_IN} />
            <Redirect path="*" to={ROUTES.LANDING.path} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
