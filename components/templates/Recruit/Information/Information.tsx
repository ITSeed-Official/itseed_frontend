import SectionWrapper from 'components/molecules/SectionWrapper';
import Icon from 'components/atoms/Icon';
import SproutIcon from 'public/images/common/icons/sprout.png';
import styles from './Information.module.scss';
import { informations, Information } from './informations';

const Information = () => {
  return (
    <>
      <SectionWrapper>
        <div>
          <div>
            <h2 className={styles.introTitle}>招生資訊</h2>
            <div className={styles.sectionBackground}>
              {informations.map((information_group: Information[], index: number) => {
                return (
                  <div className={styles.block} key={index}>
                    {information_group.map((information: Information, infoBlockIndex: number) => {
                      return (
                        <div className={styles.infoBlock} key={infoBlockIndex}>
                          <h3>
                            <Icon iconSrc={SproutIcon} />
                            {information.title}
                          </h3>
                          <hr />
                          <p>{information.description}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Information;
