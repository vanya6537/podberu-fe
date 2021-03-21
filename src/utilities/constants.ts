export const BASE_URL = 'https://base-url.com';

export const API_URL = {};

export const STORAGE = {
  USER: 'pick-up-user',
  TOKEN: 'pick-up-token',
};

export const ROUTES = {
  HOME: { path: '/home', meta: { title: 'Home' } },
  ACCOUNT: { path: '/account', meta: { title: 'Account' } },
  LANDING: { path: '/', meta: { title: 'Landing' } },
  SIGN_IN: { path: '/auth/signin', showHeader: true, showFooter: true, meta: { title: 'Sign In' } },
  SIGN_UP: { path: '/auth/signup', meta: { title: 'Sign Up' } },
  DASHBOARD: { path: '/dashboard', meta: { title: 'Dashboard' } },
  NOT_FOUND: { path: '/404', meta: { title: 'Not Found' } },
};
