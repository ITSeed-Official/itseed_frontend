import { DOMAIN } from 'util/const';
import { Image } from 'util/type';

export interface Campaign {
  id: number;
  text: string;
  url: string;
  started_at: string;
  ended_at: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: Image;
}

export const getCampaigns = async () => {
  try {
    const response = await fetch(`${DOMAIN}/campaigns`);
    const data: Campaign[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
