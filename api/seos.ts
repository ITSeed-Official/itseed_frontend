import { DEFAULT_META, DOMAIN } from 'util/const';
import { Meta } from 'components/atoms/PageMeta/PageMeta';

export const getSeos = async (path: string): Promise<Meta> => {
  const response = await fetch(`${DOMAIN}/seos?path=${path}`);
  const data = await response.json();

  if (!data.length) {
    return DEFAULT_META;
  }

  const meta = data.pop().meta;

  return meta;
};
