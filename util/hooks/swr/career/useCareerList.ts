import useSWR from 'swr';
import axios, { AxiosError } from 'axios';

import { CareerExperience } from 'api/careers';

type APIResponse = CareerExperience[];

interface Response {
  careerExperiences: CareerExperience[];
  isLoading: boolean;
  isError: boolean;
}

const domain = process.env.NEXT_PUBLIC_API_ORIGIN;
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useCareerList = (): Response => {
  const { data, error } = useSWR<APIResponse, AxiosError>(`${domain}/careers`, fetcher);

  return {
    careerExperiences: data || [],
    isLoading: !error && !data,
    isError: !!error,
  };
};
