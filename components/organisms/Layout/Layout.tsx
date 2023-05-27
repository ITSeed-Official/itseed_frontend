import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getCampaigns, Campaign } from 'api/campaign';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import EventButton from 'components/molecules/EventButton';

import styles from './Layout.module.scss';
import { appPath } from 'util/routing.config';

if (process.env.NODE_ENV === 'production') console.log('本網頁由 18 屆張宇承、15 屆陳建宇 呂紹靖、13 屆薛翔文共同開發');

const Layout: FC = ({ children }) => {
  // TODO: 把 EventButton 搬來這邊
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  useEffect(() => {
    const api = async () => {
      const campaigns = await getCampaigns();
      setCampaigns(campaigns);
    };
    api();
  }, []);

  if (process.env.NODE_ENV !== 'production') console.log('RENDER');

  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
      {!router.pathname.includes(appPath.apply) && <EventButton campaignList={campaigns} />}
    </div>
  );
};

export default Layout;
