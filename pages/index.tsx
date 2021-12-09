import Home from "./home";
import PageMeta from "../components/atoms/PageMeta";
import { getSeos } from "../lib/api";

export async function getServerSideProps() {
  const meta = getSeos("home");

  return {
    props: meta,
  };
}

export default PageMeta(Home);
