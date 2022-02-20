import About from 'components/templates/About';
import PageMeta from 'components/atoms/PageMeta';

import { getSeos } from 'api/seos';
import { getGraduates } from 'api/graduates';

import { CURRENT_SESSION } from 'util/common/setting';

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
