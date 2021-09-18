import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';
import { ROUTES } from './utilities/constants';
import { AuthRoute, PrivateRoute, PublicRoute, Redirect, Router, Switch } from './router/Router';
import './App.css';
import GlobalStyle from './GlobalStyle';
import { AuthProvider } from './context/AuthContext';
import Loader from './components/Loader';

const Landing = lazy(() => import('./pages/Landing'));
const Home = lazy(() => import('./pages/home/Home'));
const Account = lazy(() => import('./pages/account/Account'));
const OffersPage = lazy(() => import('./pages/home/OffersPage'));
const RegisterDeal = lazy(() => import('./pages/home/components/RegisterDeal'));
const Signin = lazy(() => import('./pages/auth/Signin'));

const theme = createMuiTheme({}, ruRU);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toaster position="top-center" />

      <Suspense fallback={<Loader />}>
        <Router>
          <AuthProvider>
            <Switch>
              <PublicRoute exact component={Home} {...ROUTES.HOME} />
              <PublicRoute exact component={Account} {...ROUTES.ACCOUNT} />
              <PublicRoute component={RegisterDeal} {...ROUTES.REGISTER} />
              <PublicRoute exact component={Landing} {...ROUTES.LANDING} />
              <AuthRoute exact component={Signin} {...ROUTES.SIGN_IN} />
              <PrivateRoute exact component={Signin} {...ROUTES.NOT_FOUND} />
              <PublicRoute component={OffersPage} {...ROUTES.OFFERS_BY_TYPE} />
              <PublicRoute component={OffersPage} {...ROUTES.OFFERS_GENERAL} />
              <PublicRoute exact component={OffersPage} {...ROUTES.ALL_OFFERS} />

              {/* <AuthRoute exact component={<>Hello</>} {...ROUTES.SIGN_IN} /> */}
              <Redirect path="*" to={ROUTES.HOME.path} />
            </Switch>
          </AuthProvider>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
