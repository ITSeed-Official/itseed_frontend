import { DEFAULT_META } from "./constants";
import { Meta } from "../components/atoms/PageMeta/PageMeta";

export const getSeos = async (path: string): Promise<Meta> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ORIGIN}/seos?path=${path}`
  );
  const data = await response.json();

  if (!data.length) {
    return DEFAULT_META;
  }

  const meta = data.pop().meta;

  return meta;
};

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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ORIGIN}/graduates?session=${session}`
  );
  const data: GraduatesAPIData[] = await response.json();

  if (!data.length) {
    return [{ name: "", school: "", department: "" }];
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

// TODO Faq page need to implement server side render.
export const getFaqs = async (): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/faq`);
  const data = await response.json();

  if (!data.length) {
    return;
  }

  const faqs = data.FAQ;

  return faqs;
};
