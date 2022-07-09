import { Image } from 'util/type';
import { domain } from 'util/const';
import { AlumniCategory } from 'util/enum';

export interface Alumni {
  id: number;
  name: string;
  title: string;
  position: string;
  category: AlumniCategory;
  content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: Image;
}

export const getAlumniList: () => Promise<Alumni[]> = async () => {
  try {
    const response = await fetch(`${domain}/testimonies`);
    const data: Alumni[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getAlumniDetail: (id: string) => Promise<Alumni> = async (id) => {
  try {
    const response = await fetch(`${domain}/testimonies/${id}`);
    const data: Alumni = await response.json();
    return data;
  } catch (error) {
    return {} as Alumni;
  }
};
