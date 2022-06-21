import { FC } from 'react';
import classnames from 'classnames';
import { Graduate } from 'api/graduates';
import styles from './TableView.module.scss';

type TableViewProperty = {
  className?: string;
  graduates: Graduate[];
};

type GraduateKeyType = 'name' | 'school' | 'department';

const graduateKeyToValue: { [key in GraduateKeyType]: string } = {
  name: '姓名',
  school: '學校',
  department: '學系',
};

// 單一個學員資料元件
const GraduateEntity: FC<{ graduate: Graduate; isMobile: boolean; isBackgroundGreen?: boolean }> = ({
  graduate,
  isMobile,
  isBackgroundGreen = false,
}) => {
  return isMobile ? (
    <div>
      {Object.entries(graduate).map(([key, value]) => (
        <div key={key} className={styles.row}>
          <div className={classnames(styles.key, isBackgroundGreen ? styles.greenBackground : styles.grayBackground)}>
            {graduateKeyToValue[key as GraduateKeyType]}
          </div>
          <div className={styles.value}>{value}</div>
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.row}>
      <div>{graduate.name}</div>
      <div>{graduate.school}</div>
      <div>{graduate.department}</div>
    </div>
  );
};

const DesktopComponent: FC<TableViewProperty> = ({ graduates }) => {
  return (
    <div className={styles.desktopComponent}>
      <div className={styles.header}>
        <div>姓名</div>
        <div>學校</div>
        <div>學系</div>
      </div>
      {graduates.map((graduate: Graduate) => {
        return (
          <GraduateEntity
            key={`${graduate.name}-${graduate.school}-${graduate.department}`}
            graduate={graduate}
            isMobile={false}
          />
        );
      })}
    </div>
  );
};

const MobileComponent: FC<TableViewProperty> = ({ graduates }) => {
  return (
    <div className={styles.mobileComponent}>
      {graduates.map((graduate, index) => (
        <GraduateEntity
          key={`${graduate.name}-${graduate.school}-${graduate.department}`}
          graduate={graduate}
          isMobile
          isBackgroundGreen={index % 2 === 1}
        />
      ))}
    </div>
  );
};

const TableView: FC<TableViewProperty> = ({ className, graduates }) => {
  return (
    <div className={classnames(styles.tableView, className)}>
      <DesktopComponent graduates={graduates} />
      <MobileComponent graduates={graduates} />
    </div>
  );
};

export default TableView;
