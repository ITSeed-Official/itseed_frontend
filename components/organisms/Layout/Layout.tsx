import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getCampaigns, Campaign } from 'api/campaign';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import EventButton from 'components/molecules/EventButton';

import styles from './Layout.module.scss';
import { appPath } from 'util/routing.config';

const Layout: FC = ({ children }) => {
  // TODO: 把 EventButton 搬來這邊
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  useEffect(() => {
    const api = async () => {
      const campaigns = await getCampaigns();
      setCampaigns(campaigns);
    };

    console.log('useEffect Layout');
    api();
  }, []);

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
