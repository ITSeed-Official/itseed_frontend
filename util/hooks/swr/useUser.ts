import useSWR from 'swr';
import axios, { AxiosError } from 'axios';

interface Survey {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface CustomQuestion {
  id: number;
  question: string;
  answer: string;
}

interface File {
  path: string;
  name: string;
}

export interface APIResponse {
  info: {
    name: string;
    email: string;
    mobile: string;
    school: string;
    department: string;
    recommender: string;
    referal: string[];
  };
  survey: Survey[];
  answer: CustomQuestion[];
  files: {
    resume: File;
    certificate: File;
  };
}

interface Response {
  user: APIResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}

import { API2_DOMAIN } from 'util/const';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useUser = (): Response => {
  const { data, error } = useSWR<APIResponse, AxiosError>(`${API2_DOMAIN}/users/me`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: !!error,
  };
};
