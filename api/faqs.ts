import { DEFAULT_FAQ, DOMAIN } from 'util/const';
import { APIResponse, FAQ } from 'util/hooks/swr/useFAQs';

export const getFaqs = async (): Promise<FAQ[]> => {
  const response = await fetch(`${DOMAIN}/faq`);
  const data: APIResponse = await response.json();

  if (!data) {
    return [DEFAULT_FAQ];
  }

  return data.FAQ;
};
