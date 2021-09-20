import { createContext, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post } from '../utilities/helper';
import { API_URL, ROUTES, STORAGE } from '../utilities/constants';
import { localGet, localRemove, localSet } from '../utilities/forage';
import { getProfile, logout as logoutApiCall } from '../api';
import { AuthContextType, ProfileDataType } from '../utilities/models';

// isSignedIn: null, used to check know that signed in state has not been checked yet

const initialState: AuthContextType = {
  user: null,
  isSignedIn: true, // not to reload page on every refresh
  isAgent: false,
  getUserData: getProfile,
  setUserData: () => {},
  logout: logoutApiCall,
};

const AuthContext = createContext<AuthContextType>(initialState);

const AuthProvider = ({ children }: any) => {
  const [user, setUserData] = useState<ProfileDataType | null | any>(null);

  const history = useHistory();

  useEffect(() => {
    localGet<ProfileDataType>(STORAGE.USER).then((userData) => {
      const mergedUserData = {
        ...user,
        ...userData,
        isSignedIn: !!user?.phone || !!userData?.phone,
      };
      setUserData(mergedUserData);
    });
  }, []);

  const logoutCallback = useCallback(() => {
    localRemove(Object.values(STORAGE));
    setUserData(null);
    history.push(ROUTES.SIGN_IN.path);
    logoutApiCall().then(() => history.push(ROUTES.SIGN_IN.path));
  }, [logoutApiCall]);

  const sendAuthCode = ({ phone }: { phone: string }) => {
    // TODO:: Update
    return post(
      API_URL.SEND_CODE,
      null,
      { params: { phone: phone.replace('+', '').trim() } },
      true
    );
  };

  const completeSignIn = useCallback(({ phone, code }: { phone: string; code: string }) => {
    return post(
      API_URL.LOGIN,
      null,
      { params: { phone: phone.replace('+', '').trim(), code } },
      true
    ).then(({ error, isAgent }: any) => {
      if (!error) {
        const userData = {
          ...(user || {}),
          phone: phone.replace('+', '').trim(),
          isAgent: !!isAgent,
          isSignedIn: true,
        };
        setUserData(userData);
        localSet({ key: STORAGE.USER, data: userData });
        // localSet({ key: STORAGE.TOKEN, data: !!code });
        history.push(ROUTES.HOME.path);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...initialState,
        sendAuthCode,
        completeSignIn,
        setUserData,
        user,
        ...user,
        logout: logoutCallback,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
