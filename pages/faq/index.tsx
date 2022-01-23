import Faq from "components/templates/Faq";
import PageMeta from "components/atoms/PageMeta";
import { getSeos, getFaqs } from "lib/api";

export async function getServerSideProps() {
  const [meta, faqs] = await Promise.all([getSeos("faq"), getFaqs()]);

  return {
    props: {
      meta: meta,
      faqs: faqs,
    },
  };
}

export default PageMeta(Faq);
