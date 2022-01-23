import Faq from 'components/templates/Faq';
import PageMeta from 'components/atoms/PageMeta';
import { getFaqs } from 'api/faqs';
import { getSeos } from 'api/seos';

export async function getServerSideProps() {
  const [meta, faqs] = await Promise.all([getSeos('faq'), getFaqs()]);

  return {
    props: {
      meta: meta,
      faqs: faqs,
    },
  };
}

export default PageMeta(Faq);
