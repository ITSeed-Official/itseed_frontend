import { DEFAULT_FAQ } from 'lib/constants';
import { APIResponse, FAQ } from 'util/hooks/swr/useFAQs';

export const getFaqs = async (): Promise<FAQ[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/faq`);
  const data: APIResponse = await response.json();

  if (!data) {
    return [DEFAULT_FAQ];
  }

  return data.FAQ;
};
