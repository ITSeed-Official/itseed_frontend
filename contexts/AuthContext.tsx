import { FC, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Info } from 'util/form';
import { getFormData } from 'api/application';
import { logout } from 'api/auth';
import { GOOGLE_LOGIN_LINK } from 'util/const';
import { appPath } from 'util/routing.config';

interface Context {
  nickname: string | undefined;
  avatar: string | undefined;
  signIn: Function;
  signOut: Function;
}

const defaultValue: Context = {
  nickname: '',
  avatar: '',
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = createContext(defaultValue);

export const AuthProvider: FC = ({ children }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<Info | null>(null);

  useEffect(() => {
    getFormData()
      .then((res) => {
        console.log('res', res);
        setUserInfo(res.data.info);
      })
      .catch((e) => {});
  }, []);

  const value = {
    nickname: userInfo?.nickname,
    avatar: userInfo?.avatar,
    signIn: () => {
      window.location.href = GOOGLE_LOGIN_LINK;
    },
    signOut: async () => {
      await logout();
      setUserInfo(null);
      router.push(appPath.home);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
