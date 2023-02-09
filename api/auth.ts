import { API2_DOMAIN } from 'util/const';

export const logout = async (): Promise<any> => {
  const response = await fetch(`${API2_DOMAIN}/auth/logout`, { credentials: 'include', method: 'POST' });
  const data: any = await response.json();

  return data;
};
