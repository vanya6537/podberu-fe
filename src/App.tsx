import { lazy, Suspense } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';
import { ROUTES } from './utilities/constants';
import { Switch, Router, Redirect, AuthRoute, PublicRoute, PrivateRoute } from './router/Router';
import GlobalStyle from './GlobalStyle';

const Landing = lazy(() => import('./pages/Landing'));
const Home = lazy(() => import('./pages/home/Home'));
const DebitCards = lazy(() => import('./pages/home/DebitCards'));
// const RegisterDeal = lazy(() => import('./pages/home/RegisterDeal'));
const Signin = lazy(() => import('./pages/auth/Signin'));

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {/* <PublicRoute exact component={Home} {...ROUTES.HOME} /> */}
            <PublicRoute exact component={DebitCards} {...ROUTES.HOME} />
            <PublicRoute exact component={Landing} {...ROUTES.LANDING} />
            <AuthRoute exact component={Signin} {...ROUTES.SIGN_IN} />
            <PrivateRoute exact component={Signin} {...ROUTES.NOT_FOUND} />
            {/* <AuthRoute exact component={<>Hello</>} {...ROUTES.SIGN_IN} /> */}
            <Redirect path="*" to={ROUTES.LANDING.path} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
