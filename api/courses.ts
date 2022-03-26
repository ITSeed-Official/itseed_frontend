const domain = process.env.NEXT_PUBLIC_API_ORIGIN;

export type CourseDetailType = {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  lecturer: string;
  lecturer_company: string;
  lecturer_position: string;
  lecturer_background: string;
  agenda: string;
  experience: string;
  sharer: string;
  sharer_education: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: {
    id: string;
    name: string;
    url: string;
  };
};

export const getCourses = async () => {
  try {
    const response = await fetch(`${domain}/courses`);
    const data: CourseDetailType[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getCourseDetail: (id: string) => Promise<CourseDetailType> = async (id) => {
  try {
    const response = await fetch(`${domain}/courses/${id}`);
    const data: CourseDetailType = await response.json();
    return data;
  } catch (error) {
    return {} as CourseDetailType;
  }
};
