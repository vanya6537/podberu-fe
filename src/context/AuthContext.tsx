import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post } from '../utilities/helper';
import { API_URL, ROLES, ROUTES, STORAGE } from '../utilities/constants';
import { localGet, localRemove, localSet } from '../utilities/forage';

const AuthContext = createContext({});

// isSignedIn: null, used to check know that signed in state has not been checked yet
const initialState: { user: object | null; isSignedIn: boolean | null } = {
  user: {},
  isSignedIn: null,
};

const AuthProvider = ({ children }: any) => {
  const [authData, setAuthData] = useState(initialState);
  const history = useHistory();

  useEffect(
    (async () => {
      const token: string = (await localGet(STORAGE.TOKEN)) as string;
      const user: object = (await localGet(STORAGE.USER)) as object;

      setAuthData({ user: { ...user, token }, isSignedIn: !!token });
    }) as any,
    []
  );

  const signOut = () => {
    localRemove(Object.values(STORAGE));
    setAuthData({ ...initialState, isSignedIn: false });
    history.push(ROUTES.SIGN_IN.path);
  };

  const getProfile = () => {};

  const sendAuthCode = ({ phone }: { phone: string }) => {
    // TODO:: Update
    return post(API_URL.SEND_CODE, null, { params: { phone } }, true);
  };

  const completeSignIn = ({ phone, code }: { phone: string; code: string }) => {
    // TODO:: Update
    const user: any = {
      phone,
      role: code.toLowerCase() === ROLES.AGENT ? ROLES.AGENT : ROLES.CLIENT,
    };

    return post(API_URL.LOGIN, null, { params: { phone, code } }, true).then(({ error }: any) => {
      if (!error) {
        setAuthData({ user, isSignedIn: true });
        localSet({ key: STORAGE.USER, data: user });
        localSet({ key: STORAGE.TOKEN, data: !!code });
        history.push(ROUTES.HOME.path);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{ signOut, sendAuthCode, completeSignIn, getProfile, ...authData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
