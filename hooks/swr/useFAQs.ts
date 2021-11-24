import useSWR from "swr";
import axios, { AxiosError } from "axios";

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface APIResponse {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  FAQ: FAQ[];
}

interface Response {
  faqs: FAQ[];
  isLoading: boolean;
  isError: boolean;
}

const domain = process.env.NEXT_PUBLIC_API_ORIGIN;
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useFAQs = (): Response => {
  const { data, error } = useSWR<APIResponse, AxiosError>(
    `${domain}/faq`,
    fetcher
  );

  return {
    faqs: (data && data.FAQ) || [],
    isLoading: !error && !data,
    isError: !!error,
  };
};
