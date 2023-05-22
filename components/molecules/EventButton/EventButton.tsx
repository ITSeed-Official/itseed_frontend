import { FC, useState } from 'react';

import { Campaign } from 'api/campaign';
import Icon from 'components/atoms/Icon/Icon';

import styles from './EventButton.module.scss';

type EventButtonProps = {
  campaignList: Campaign[];
};

const EventButton: FC<EventButtonProps> = ({ campaignList }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return isMenuOpen ? (
    <div className={styles.eventOpen}>
      <div className={styles.eventMenu}>
        {campaignList.map(({ text, image, url }) => (
          <a key={text} className={styles.event} href={url} target="blank">
            <Icon iconSrc={image.url} />
            <p>{text}</p>
          </a>
        ))}
      </div>
      <Icon width={40} height={40} iconSrc={'/images/homepage/icons/close.svg'} onClick={() => setIsMenuOpen(false)} />
    </div>
  ) : (
    <Icon
      className={styles.eventClose}
      width={40}
      height={40}
      iconSrc={'/images/homepage/icons/dot.svg'}
      onClick={() => setIsMenuOpen(true)}
    />
  );
};

export default EventButton;
