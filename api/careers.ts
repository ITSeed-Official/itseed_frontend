const domain = process.env.NEXT_PUBLIC_API_ORIGIN;

export type ExperienceCategory = "company" | "personalization" | "interview";

export interface CareerExperience {
  id: number;
  mentee: string;
  role: string;
  position: string;
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

type MentorDetailType = {
  id: string;
  name: string;
  image_url: string;
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
  image_url: string;
  mentors?: MentorDetailType[];
  published_at: string;
}

export const getCareerDetail = async (id: string) => {
  try {
    const response = await fetch(`${domain}/careers/${id}`);
    const data: CareerDetailType = await response.json();
    return data;
  } catch (error) {
    return {};
  }
};
