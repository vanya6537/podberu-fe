import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post } from '../utilities/helper';
import { API_URL, ROLES, ROUTES, STORAGE } from '../utilities/constants';
import { localGet, localRemove, localSet } from '../utilities/forage';
import { getProfile } from '../api';
import { AuthContextType, ProfileDataType } from '../utilities/models';

// isSignedIn: null, used to check know that signed in state has not been checked yet

const initialState: AuthContextType = {
  user: null,
  isSignedIn: null,
  isAgent: false,
  getUserData: getProfile,
  signOut: () => {},
  setUserData: () => {},
};

const AuthContext = createContext<AuthContextType>(initialState);

const AuthProvider = ({ children }: any) => {
  const [user, setUserData] = useState<ProfileDataType | null | any>(null);

  const history = useHistory();

  useEffect(
    (async () => {
      const token: string = (await localGet(STORAGE.TOKEN)) as string;
      const userData: ProfileDataType = (await localGet(STORAGE.USER)) as ProfileDataType;

      setUserData({ ...user, ...userData, token, isSignedIn: !!token });
    }) as any,
    []
  );

  function signOut() {
    localRemove(Object.values(STORAGE));
    setUserData({ ...initialState, isSignedIn: false });
    history.push(ROUTES.SIGN_IN.path);
  }

  const sendAuthCode = ({ phone }: { phone: string }) => {
    // TODO:: Update
    return post(
      API_URL.SEND_CODE,
      null,
      { params: { phone: phone.replace('+', '').trim() } },
      true
    );
  };

  const completeSignIn = ({ phone, code }: { phone: string; code: string }) => {
    // TODO:: Update
    const userData: any = {
      phone: phone.replace('+', '').trim(),
      role: code.toLowerCase() === ROLES.AGENT ? ROLES.AGENT : ROLES.CLIENT,
    };

    return post(
      API_URL.LOGIN,
      null,
      { params: { phone: phone.replace('+', '').trim(), code } },
      true
    ).then(({ error, isAgent }: any) => {
      if (!error) {
        setUserData({ ...user, ...userData, isAgent: !!isAgent, isSignedIn: true });
        localSet({ key: STORAGE.USER, data: { ...user, ...userData } });
        localSet({ key: STORAGE.TOKEN, data: !!code });
        history.push(ROUTES.HOME.path);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...initialState,
        sendAuthCode,
        completeSignIn,
        signOut,
        setUserData,
        user,
        ...user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
