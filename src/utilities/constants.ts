export const BASE_URL = 'https://api.podberu.su';
export const BASE_API_URL = `${BASE_URL}/api/v1`;

export const API_URL = {
  LOGIN: `${BASE_API_URL}/auth/login`,
  LOGOUT: `${BASE_API_URL}/auth/logout`,

  SEND_CODE: `${BASE_API_URL}/auth/send_code`,
  CLIENT: {
    APPLICATIONS: `${BASE_API_URL}/clients/orders`,
    INN: `${BASE_API_URL}/clients/inn`,
    PASSPORT: `${BASE_API_URL}/clients/passport`,
    PERSONAL_INFO: `${BASE_API_URL}/clients/personal-info`,
    SNILS: `${BASE_API_URL}/clients/snils`,
  },
  AGENT: {
    APPLICATIONS: `${BASE_API_URL}/agents/order`,
    WITHDRAW: `${BASE_API_URL}/agents/withdrawals`,
    REFERRAL: `${BASE_API_URL}/agents/referral`,
  },
  OFFERS: {
    ROOT: `${BASE_API_URL}/offers`,
    TYPES: `${BASE_API_URL}/offers/types`,
  },
  ORDERS: {
    ROOT: `${BASE_API_URL}/orders`,
  },
};

export const STORAGE = {
  USER: 'pick-up-user',
  TOKEN: 'pick-up-token',
};

export const ROUTES = {
  HOME: { path: '/', meta: { title: 'Home' } },
  ACCOUNT: { path: '/account', meta: { title: 'Account' } },
  OFFERS_BY_TYPE: { path: '/offers/:offerType/:id' },
  OFFERS_GENERAL: { path: '/offers/:offerType' },
  ALL_OFFERS: { path: '/offers' },
  CREDIT: { path: '/credit', meta: { title: 'Credit' } },
  REGISTER: { path: '/register/:offerType/:bankName', meta: { title: 'Register' } },
  LANDING: { path: '/landing', meta: { title: 'Landing' } },
  SIGN_IN: { path: '/auth/signin', showHeader: true, showFooter: true, meta: { title: 'Sign In' } },
  SIGN_UP: { path: '/auth/signup', meta: { title: 'Sign Up' } },
  DASHBOARD: { path: '/dashboard', meta: { title: 'Dashboard' } },
  NOT_FOUND: { path: '/404', meta: { title: 'Not Found' } },
};

export const ROLES = {
  AGENT: 'agent',
  CLIENT: 'client',
};

export const DEFAULTS = {
  pageSize: 10,
  page: 1,
};

export const ORDER_TYPES = {
  RKO: 'rko',
  MFO: 'mfo',
  CREDIT: 'credit',
  DEBIT: 'debit',
  BUSINESS_CREDIT: 'business_credit',
};

export const getDefaultCard = (onClick: () => void) => ({
  title: 'Альфа-банк',
  subtitle: 'Описание предложенного бренда.',
  body: [
    'Преимущества:',
    '•бесплатное обслуживание;',
    '•до 100 дней без процентов;',
    '•0% за снятие наличных;',
    '•бесплатное пополнение с ',
    'карт любых банков.',
  ],
  icon: 'typography',
  button: {
    value: 'Подробнее',
    size: 'md',
    onClick,
    margin: [24, 0, 0, 0],
    padding: [0, 24],
  },
});

export const getTitle = (offerType: string) => {
  switch (offerType) {
    case ORDER_TYPES.RKO:
      return 'РКО';
    case ORDER_TYPES.MFO:
      return 'Микрозаймы';
    case ORDER_TYPES.CREDIT:
      return 'Кредиты';
    case ORDER_TYPES.DEBIT:
      return 'Дебетовые карты';
    case ORDER_TYPES.BUSINESS_CREDIT:
      return 'Кредит для бизнеса';
    default:
      return 'Все предложения';
  }
};
