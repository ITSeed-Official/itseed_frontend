import About from "./About";
import PageMeta from "../../components/atoms/PageMeta";
import { getSeos } from "../../lib/api";

export async function getServerSideProps() {
  const meta = getSeos("about");

  return {
    props: { meta: meta },
  };
}

export default PageMeta(About);
