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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/graduates?session=${session}`);
  const data: GraduatesAPIData[] = await response.json();

  if (!data.length) {
    return [{ name: '', school: '', department: '' }];
  }
  const graduates: Graduate[] = data.map((graduate: GraduatesAPIData) => {
    return {
      name: graduate.name,
      school: graduate.school,
      department: graduate.department,
    };
  });

  return graduates;
};
