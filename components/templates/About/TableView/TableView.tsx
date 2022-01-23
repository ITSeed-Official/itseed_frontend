import { FC } from 'react';
import classnames from 'classnames';
import { Graduate } from 'api/graduates';
import styles from './TableView.module.scss';

type TableViewProperty = {
  className?: string;
  graduates: Graduate[];
};

const TableView: FC<TableViewProperty> = ({ className, graduates }) => {
  return (
    <div className={classnames(styles.content, className)}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.td}>姓名</th>
            <th className={styles.td}>學校</th>
            <th className={styles.td}>學系</th>
          </tr>
        </thead>
        <tbody>
          {graduates.map((graduate: Graduate, index: number) => {
            return (
              <tr key={index} className={styles.tr}>
                <td className={styles.td}>{graduate.name}</td>
                <td className={styles.td}>{graduate.school}</td>
                <td className={styles.td}>{graduate.department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
