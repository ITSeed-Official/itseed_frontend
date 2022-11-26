import { API2_DOMAIN } from 'util/const';
import { APIResponse } from 'util/hooks/swr/useUser';
import { ErrorWithCode, ErrorCode } from 'util/error';

export const getMe = async (): Promise<any> => {
  const response = await fetch(`${API2_DOMAIN}/users/me`, { credentials: 'include' });
  console.log(response);
  if (response.status === 401) {
    throw new ErrorWithCode('No auth', ErrorCode.NoAuth);
  }
  const result: APIResponse = await response.json();
  return result;
};
