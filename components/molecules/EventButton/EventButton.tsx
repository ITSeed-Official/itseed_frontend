import { FC, useMemo, useState } from 'react';

import { Campaign } from 'api/campaign';
import Icon from 'components/atoms/Icon/Icon';

import styles from './EventButton.module.scss';

type EventButtonProps = {
  campaignList: Campaign[];
};

const EventButton: FC<EventButtonProps> = ({ campaignList }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const campaignListSorted = useMemo(() => {
    campaignList.sort(
      (campaign_front, campaign_back) =>
        new Date(campaign_front.ended_at).getTime() - new Date(campaign_back.ended_at).getTime()
    );

    return campaignList.filter(({ started_at }) => new Date(started_at).getTime() <= new Date().getTime());
  }, [campaignList]);

  return isMenuOpen ? (
    <div className={styles.eventOpen}>
      <div className={styles.eventMenu}>
        <div role="button" className={styles.topButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Icon iconSrc={'/images/common/icons/arrow_up.svg'} height={24} width={24} />
          <p>TOP</p>
        </div>
        {campaignListSorted.map(({ text, image, url }) => (
          <a key={text} className={styles.event} href={url} target="blank">
            <Icon iconSrc={image.url} />
            <p>{text}</p>
          </a>
        ))}
      </div>
      <Icon width={40} height={40} iconSrc={'/images/icons/icon-close.svg'} onClick={() => setIsMenuOpen(false)} />
    </div>
  ) : (
    <Icon
      className={styles.eventClose}
      width={40}
      height={40}
      iconSrc={'/images/icons/icon-menu.svg'}
      onClick={() => setIsMenuOpen(true)}
    />
  );
};

export default EventButton;
