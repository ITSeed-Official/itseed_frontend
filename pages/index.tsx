import Home from './home';
import PageMeta from '../components/atoms/PageMeta';
import { getSeos } from 'api/seos';
import { Meta } from '../components/atoms/PageMeta/PageMeta';

export async function getServerSideProps() {
  const meta: Meta = await getSeos('home');

  return {
    props: { meta: meta },
  };
}

export default PageMeta(Home);
