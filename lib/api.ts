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
