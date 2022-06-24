import { domain } from 'util/const';
interface GraduatesAPIData {
  id: number;
  session: number;
  name: string;
  school: string;
  department: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Graduate {
  name: string;
  school: string;
  department: string;
}

export const getGraduates = async (session: number): Promise<Graduate[]> => {
  const response = await fetch(`${domain}/graduates?session=${session}`);
  const data: GraduatesAPIData[] = await response.json();

  if (!data.length) {
    return [];
  }
  const graduates: Graduate[] = data.map(({ name, school, department }) => {
    return {
      name,
      school,
      department,
    };
  });

  return graduates;
};
