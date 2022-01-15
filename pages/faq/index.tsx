import Faq from "components/templates/Faq/Faq";
import PageMeta from "components/atoms/PageMeta";
import { getSeos } from "lib/api";

export async function getServerSideProps() {
  const meta = getSeos("faq");

  return {
    props: meta,
  };
}

export default PageMeta(Faq);
