import Recruit from 'components/templates/Recruit';
import PageMeta from 'components/atoms/PageMeta';
import { getSeos } from 'api/seos';

export async function getServerSideProps() {
  const [meta] = await Promise.all([getSeos('recruit')]);

  return {
    props: {
      meta,
    },
  };
}

export default PageMeta(Recruit);
