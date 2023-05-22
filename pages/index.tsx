import { GetStaticProps } from 'next';

import { getSeos } from 'api/seos';
import { getAlumniList } from 'api/alumni';
import { DEFAULT_REVALIDATE } from 'util/const';

import Home from 'components/templates/Home';
import PageMeta from 'components/atoms/PageMeta';
import { getCampaigns } from 'api/campaign';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, alumniList, campaignList] = await Promise.all([getSeos('home'), getAlumniList(), getCampaigns()]);
  return {
    props: {
      meta,
      data: {
        alumniList,
        campaignList,
      },
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(Home);
