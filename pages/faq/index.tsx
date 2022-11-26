import { GetStaticProps } from 'next';

import { getFaqs } from 'api/faqs';
import { getSeos } from 'api/seos';
import { DEFAULT_REVALIDATE } from 'util/const';

import Faq from 'components/templates/Faq';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, faqs] = await Promise.all([getSeos('faq'), getFaqs()]);

  return {
    props: {
      meta: meta,
      faqs: faqs,
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(Faq);
