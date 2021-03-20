import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES, STORAGE } from '../utilities/constants';
import { localGet, localRemove } from '../utilities/forage';

const AuthContext = createContext({});

// isSignedIn: null, used to check know that signed in state has not been checked yet
const initialState: { user: object | null; isSignedIn: boolean | null } = {
  user: null,
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

  const signIn = ({ email, password }: { email: string; password: string }) => {
    // TODO:: Update
    setAuthData((d) => ({ ...d, isSignedIn: true }));
  };

  return (
    <AuthContext.Provider value={{ signOut, signIn, getProfile, ...authData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
