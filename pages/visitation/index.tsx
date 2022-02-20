import Visitation from 'components/templates/Visitation';
import PageMeta from 'components/atoms/PageMeta';
import { getVisitations } from 'api/visitations';
import { getSeos } from 'api/seos';

export async function getServerSideProps() {
  const [meta, visitations] = await Promise.all([getSeos('visitation'), getVisitations()]);

  return {
    props: {
      meta,
      visitations,
    },
  };
}

export default PageMeta(Visitation);
