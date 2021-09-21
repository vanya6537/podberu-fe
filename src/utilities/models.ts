import { Dispatch, SetStateAction } from 'react';

export type ProfileDataType = {
  id: number; // 16
  fullName: null | string;
  phone: string;
  email: null | string;
  photo: null | string;
  passport: null | any;
  snils: null | any;
  inn: null | any;
  isAgent: boolean;
  referred_agent: null;
  token?: string;
  isSignedIn?: boolean | null;
  fundsAvailable: number;
};

export type ApplicationCardType = { title: string; subtitle: string };
export type ApplicationType = Record<string, any> & { offer: { type: string }; createdAt: string };
export type ApplicationResponseDataType = Record<string, ApplicationType[]>;

export type GetProfileResponseType = { data: ProfileDataType; error: string };

export type AuthContextType = Record<string, any> & {
  user: ProfileDataType | null;
  isSignedIn: boolean | null;
  logout: any;
  getUserData: () => Promise<GetProfileResponseType>;
  setUserData: Dispatch<SetStateAction<any>>;
};

export type OfferType = {
  id: number;
  name: string;
  header: string;
  description: string;
  type: string;
  thumbnail: string;
};

export type OfferDescriptionType = {
  id: number;
  name: string;
  header: string;
  descriptionImage: string;
  type: number;
  thumbnail: string;
  description: string;
  weight: number;
};
