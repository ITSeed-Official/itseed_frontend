import About from '../../components/templates/About';
import PageMeta from '../../components/atoms/PageMeta';
import { getGraduates, getSeos } from '../../lib/api';
import { CURRENT_SESSION } from '../../util/common/setting';

export async function getServerSideProps() {
  const [meta, graduates] = await Promise.all([getSeos('graduates'), getGraduates(CURRENT_SESSION)]);

  return {
    props: {
      meta: meta,
      graduates: graduates,
    },
  };
}

export default PageMeta(About);
