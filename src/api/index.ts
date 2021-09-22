import { get, post } from '../utilities/helper';
import { API_URL, DEFAULTS, ORDER_TYPES } from '../utilities/constants';
import { GetProfileResponseType } from '../utilities/models';

export const logout = () => get(API_URL.LOGOUT, {});

export const getWithdrawals = () => get(API_URL.AGENT.WITHDRAW, {});

export const getApplications = () => get(API_URL.CLIENT.APPLICATIONS, {});

export const getDocuments = () => get(API_URL.CLIENT.APPLICATIONS, {});

export const getProfile = (): Promise<GetProfileResponseType> =>
  get(API_URL.CLIENT.PERSONAL_INFO, {});

export const getOffersTypes = (page: number = DEFAULTS.page, size: number = DEFAULTS.pageSize) =>
  get(API_URL.OFFERS.TYPES, { params: { page: page || 1, size: size || 12 } });

export const getOffersByType = (
  offerType: string,
  page: number = DEFAULTS.page,
  size: number = DEFAULTS.pageSize
) => get(API_URL.OFFERS.ROOT, { params: { type: offerType, page: page || 1, size: size || 12 } });

export const sendDealInfo = (offerType: string, offerData: any) => {
  let id;
  switch (offerType) {
    case ORDER_TYPES.RKO:
      id = '3';
      break;
    case ORDER_TYPES.MFO:
      id = '2';
      break;
    case ORDER_TYPES.CREDIT:
      id = '6';
      break;
    case ORDER_TYPES.DEBIT:
      id = '4';
      break;
    case ORDER_TYPES.BUSINESS_CREDIT:
      id = '5';
      break;
    default:
      id = '4';
  }
  const formData = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, val] of Object.entries(offerData)) {
    // @ts-ignore
    formData.append(key, val);
  }
  formData.append('offer', id);
  return post(`${API_URL.ORDERS.ROOT}/${offerType}`, formData, {
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const saveProfileInfo = (profileData: any) => {
  const formData = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, val] of Object.entries(profileData)) {
    if (key.includes('photo')) {
      try {
        formData.append(key, (val as any)[0]);
      } catch {
        formData.append(key, val as any);
      }
    } else if (val) formData.append(key, val as any);
  }

  console.log(formData);
  return post(`${API_URL.CLIENT.PERSONAL_INFO}`, formData, {
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const saveDocument = (documentType: string, formDataPrimary: any) => {
  const formData = new FormData();
  const { number, scan } = formDataPrimary;
  formData.append('number', number);
  try {
    formData.append('scan', scan[0]);
  } catch {
    formData.append('scan', scan);
  }
  console.log(`saveDoc ${documentType}`);
  console.log({ formDataPrimary, formData });
  return post(
    `${API_URL.CLIENT.ROOT}${documentType}`,
    formData,
    {
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    },
    true
  );
};
