import { get } from '../utilities/helper';
import { API_URL, DEFAULTS } from '../utilities/constants';
import { GetProfileResponseType } from '../utilities/models';

export const getApplications = () => get(API_URL.CLIENT.APPLICATIONS, {}, true);

export const getDocuments = () => get(API_URL.CLIENT.APPLICATIONS, {}, true);

export const getProfile = (): Promise<GetProfileResponseType> =>
  get(API_URL.CLIENT.PERSONAL_INFO, {}, true);

export const getOffersTypes = (page: number = DEFAULTS.page, size: number = DEFAULTS.pageSize) =>
  get(API_URL.OFFERS.TYPES, { params: { page: page || 1, size: size || 12 } }, true);

export const getOffersByType = (
  offerType: string,
  page: number = DEFAULTS.page,
  size: number = DEFAULTS.pageSize
) =>
  get(
    API_URL.OFFERS.ROOT,
    { params: { type: offerType, page: page || 1, size: size || 12 } },
    true
  );
