import { lazy, Suspense } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';
import { ROUTES } from './utilities/constants';
import { Switch, Router, Redirect, AuthRoute, PublicRoute, PrivateRoute } from './router/Router';
import GlobalStyle from './GlobalStyle';
import { AuthProvider } from './context/AuthContext';

const Landing = lazy(() => import('./pages/Landing'));
const Home = lazy(() => import('./pages/home/Home'));
const Account = lazy(() => import('./pages/account/Account'));
const DebitCards = lazy(() => import('./pages/home/components/DebitCards'));
const RegisterDeal = lazy(() => import('./pages/home/components/RegisterDeal'));
const Signin = lazy(() => import('./pages/auth/Signin'));

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" />

      <Suspense fallback={<Loader />}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact component={Home} {...ROUTES.HOME} />
              <PrivateRoute exact component={Account} {...ROUTES.ACCOUNT} />
              <PrivateRoute exact component={DebitCards} {...ROUTES.DEBIT} />
              <PrivateRoute exact component={RegisterDeal} {...ROUTES.REGISTER} />
              <PublicRoute exact component={Landing} {...ROUTES.LANDING} />
              <AuthRoute exact component={Signin} {...ROUTES.SIGN_IN} />
              <PrivateRoute exact component={Signin} {...ROUTES.NOT_FOUND} />
              {/* <AuthRoute exact component={<>Hello</>} {...ROUTES.SIGN_IN} /> */}
              <Redirect path="*" to={ROUTES.HOME.path} />
            </Switch>
          </AuthProvider>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
