const domain = process.env.NEXT_PUBLIC_API_ORIGIN;

export interface Visitation {
  id: number;
  name: string;
  description: string;
}

export const getVisitations = async () => {
  try {
    const response = await fetch(`${domain}/visitations`);
    const data: Visitation[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
