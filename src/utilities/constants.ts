export const BASE_URL = 'https://podberu-backend.herokuapp.com/api';

export const API_URL = {
  LOGIN: `${BASE_URL}/auth`,
  SEND_CODE: `${BASE_URL}/send_code`,
};

export const STORAGE = {
  USER: 'pick-up-user',
  TOKEN: 'pick-up-token',
};

export const ROUTES = {
  HOME: { path: '/home', meta: { title: 'Home' } },
  ACCOUNT: { path: '/account', meta: { title: 'Account' } },
  DEBIT: { path: '/debit', meta: { title: 'Debit' } },
  CREDIT: { path: '/credit', meta: { title: 'Credit' } },
  REGISTER: { path: '/register', meta: { title: 'Register' } },
  LANDING: { path: '/', meta: { title: 'Landing' } },
  SIGN_IN: { path: '/auth/signin', showHeader: true, showFooter: true, meta: { title: 'Sign In' } },
  SIGN_UP: { path: '/auth/signup', meta: { title: 'Sign Up' } },
  DASHBOARD: { path: '/dashboard', meta: { title: 'Dashboard' } },
  NOT_FOUND: { path: '/404', meta: { title: 'Not Found' } },
};

export const ROLES = {
  AGENT: 'agent',
  CLIENT: 'client',
};
