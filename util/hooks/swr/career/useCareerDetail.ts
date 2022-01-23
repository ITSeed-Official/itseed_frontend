import useSWR from 'swr';
import axios, { AxiosError } from 'axios';

import { CareerDetailType } from 'api/careers';

type APIResponse = CareerDetailType;

interface Response {
  data: CareerDetailType | undefined;
  isLoading: boolean;
  isError: boolean;
}

const domain = process.env.NEXT_PUBLIC_API_ORIGIN;
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useCareerDetail = (id: string): Response => {
  const { data, error } = useSWR<APIResponse, AxiosError>(`${domain}/careers/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
  };
};
