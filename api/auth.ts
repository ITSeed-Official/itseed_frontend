import { API2_DOMAIN } from 'util/const';
import { ErrorCode, ErrorWithCode } from 'util/error';

export const authCheck = async (): Promise<any> => {
  try {
    await fetch(`${API2_DOMAIN}/users/me`, { credentials: 'include' });
    return true;
  } catch (e) {
    if (e instanceof ErrorWithCode) {
      if (e.errorCode === ErrorCode.NoAuth) {
        return false;
      }
      throw e;
    }
  }
};

export const logout = async (): Promise<any> => {
  const response = await fetch(`${API2_DOMAIN}/auth/logout`, { credentials: 'include', method: 'POST' });
  const data: any = await response.json();

  return data;
};
