import { DOMAIN } from 'util/const';

export interface Visitation {
  id: number;
  name: string;
  description: string;
}

export const getVisitations = async () => {
  try {
    console.debug(`${DOMAIN}/visitations`);
    const response = await fetch(`${DOMAIN}/visitations`);
    const data: Visitation[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
