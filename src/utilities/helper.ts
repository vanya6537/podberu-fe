import axios from 'axios';
import moment from 'moment';
import { isInt, isEmail, isMobilePhone, isStrongPassword } from 'validator';
import Toast from 'react-hot-toast';
import applyCaseMiddleware from 'axios-case-converter';

const useCookies = { withCredentials: true };
const client = applyCaseMiddleware(axios.create(useCookies));

export const throttle = (fn: () => null, wait: number) => {
  let time = Date.now();

  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};

export const injectLink = (link: string, href = '') => {
  const typoElt = document.getElementById('typography.js');

  if (typoElt) {
    typoElt.insertAdjacentHTML('afterend', link);
  }
};

export const getFontsStr = (typography: any) => {
  let fontsStr = '';
  if (typography.options.googleFonts) {
    const fonts = typography.options.googleFonts.map((font: any) => {
      let str = '';
      str += font.name.split(' ').join('+');
      str += ':';
      str += font.styles.join(',');

      return str;
    });

    fontsStr = fonts.join('|');
  }

  return fontsStr;
};

export const getFontsLink = (fontsStr: string) => {
  const href = `//fonts.googleapis.com/css?family=${fontsStr}`;
  const link = `<link href="${href}" rel="stylesheet" type="text/css" />`;
  return { link, href };
};

export const injectFonts = (typography: any) => {
  const fontsStr = getFontsStr(typography);
  if (fontsStr) {
    const { link, href } = getFontsLink(fontsStr);
    injectLink(link, href);
  }
};

export const isEmpty = (obj: any) => {
  return (
    obj === undefined ||
    obj === null ||
    (typeof obj === 'object' && Object.keys(obj).length === 0) ||
    (Array.isArray(obj) && obj.length === 0) ||
    (typeof obj === 'string' && obj.trim().length === 0)
  );
};

export const isEmptyObject = (obj: any) => {
  return !(typeof obj === 'object' && Object.keys(obj).length > 0);
};

export const onlyDefined = (obj: any) => {
  const newObj: any = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== '' && value !== 'undefined') {
      newObj[key] = value;
    }
  });

  return newObj;
};

/**
 * encodeB64
 *
 * encode string to base 64 using **`btoa`** library
 * @param {string} str
 * @returns {string}
 */
export const encodeB64 = (str: string) => {
  // return Buffer.from(str, 'binary').toString('base64');
  return btoa(str);
};

const responseHandler = ({ data = {} }, show: boolean | string) => {
  const { response, message, status_code: status, error, ...others }: any = data;
  if (show) {
    if (error) {
      Toast.error(typeof response === 'string' ? response : message || 'Could be your network!');
    } else {
      Toast.success(typeof show === 'string' ? show : message || 'Success');
    }
  }
  return { response, message, status, error, ...others };
};

const errorHandler = ({ response: { data } = { data: {} } }, show: boolean | string) => {
  const { response, message = 'Network Error', error = true, status_code: status }: any = data;
  if (show) {
    Toast.error(typeof response === 'string' ? response : message || 'Could be your network!');
  }
  return { response, message, status, error };
};

export const get = (url: string, config = {}, show: boolean | string = false) => {
  return client
    .get(url, { ...config })
    .then((x) => responseHandler(x, show))
    .catch((x) => errorHandler(x, show));
};

export const post = (url: string, body: any, config = {}, show = false) => {
  return client
    .post(url, body, { ...config })
    .then((x) => responseHandler(x, show))
    .catch((x) => errorHandler(x, show));
};

export const patch = (url: string, body: any, config = {}, show = false) => {
  return client
    .patch(url, body, { ...useCookies, ...config })
    .then((x) => responseHandler(x, show))
    .catch((x) => errorHandler(x, show));
};

export const upload = (url: string, body: any, config = {}, show = false) => {
  return client
    .post(url, body, { ...config })
    .then((x) => responseHandler(x, show))
    .catch((x) => errorHandler(x, show));
};

export const formatDate = (date: string | number, format = 'ddd MMM D YYYY h:ma') => {
  if (date) {
    return moment(date).format(format);
  }

  return date;
};

export const validator = (value: string, validate = '') => {
  const opts = validate.split('|');
  const options: any = {};

  const errors = opts
    .map((opt) => {
      let custom_message: any = opt.match(/\((.*)\)/);
      custom_message = custom_message && custom_message[1];

      if (opt.startsWith('required')) {
        return (value || '').trim() ? null : custom_message || 'Field required';
      }

      if (opt.startsWith('email')) {
        return isEmail(value) ? null : custom_message || 'Enter correct email address';
      }

      if (opt.startsWith('number')) {
        opt.split(',').forEach((o) => {
          const [x, y]: any = o.split(':');
          if (x && y) {
            options[x] = Number(y) ? parseInt(y, 10) : y;
          }
        });
        return isInt(value, options) ? null : custom_message || 'Invalid number entered';
      }

      if (opt.startsWith('phone_number')) {
        return isMobilePhone(value) ? null : custom_message || 'Phone number invalid';
      }

      if (opt.startsWith('password')) {
        return isStrongPassword(value)
          ? null
          : custom_message ||
              'Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and minimum of 8 characters';
      }
      return null;
    })
    .filter((e) => !!e);

  return errors;
};
