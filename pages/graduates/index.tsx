import Graduates from "../../components/templates/Graduates/Graduates";
import PageMeta from "../../components/atoms/PageMeta";
import { getGraduates, getSeos } from "../../lib/api";
import { CURRENT_SESSION } from "../../util/common/setting";

export async function getServerSideProps() {
  const meta = await getSeos("graduates");
  const graduates = await getGraduates(CURRENT_SESSION);

  return {
    props: {
      meta: meta,
      graduates: graduates,
    },
  };
}

export default PageMeta(Graduates);
