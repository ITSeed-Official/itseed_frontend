import { Image } from 'util/common/entities';

const domain = process.env.NEXT_PUBLIC_API_ORIGIN;

export type ExperienceCategory = 'company' | 'personalization' | 'interview';

export interface CareerExperience {
  id: string;
  mentee: string;
  role: string;
  position: string;
  image: Image;
  company: string | null;
  content: string;
  category: ExperienceCategory;
  overview_content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  mentee_school: string;
  priority: number;
  mentor_session: string;
  mentors_overview: string;
  mentor: string;
}

export const getCareerList = async () => {
  try {
    const response = await fetch(`${domain}/careers`);
    const data: CareerExperience[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export type MentorDetailType = {
  id: string;
  name: string;
  image: Image;
  description: string;
  facebook_link: string;
  linkedin_url: string;
  email_address: string;
};

export interface CareerDetailType {
  id: string;
  mentee: string;
  mentee_school: string;
  position: string;
  content: string;
  category: ExperienceCategory;
  overview_content: string;
  company: string;
  image: Image;
  mentors?: MentorDetailType[];
  published_at: string;
}

export const getCareerDetail: (id: string) => Promise<CareerDetailType> = async (id) => {
  try {
    const response = await fetch(`${domain}/careers/${id}`);
    const data: CareerDetailType = await response.json();
    return data;
  } catch (error) {
    return {} as CareerDetailType;
  }
};
