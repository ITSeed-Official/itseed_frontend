import { FC } from "react";
import classnames from "classnames";
import { Graduate } from "../../../../lib/api";
import styles from "./TableView.module.scss";

type TableViewProperty = {
  className?: string;
  graduates: Graduate[];
};

const TableView: FC<TableViewProperty> = ({ className, graduates }) => {
  return (
    <div className={classnames(styles.content, className)}>
      <table className={classnames(styles.table, className)}>
        <thead className={classnames(styles.thead, className)}>
          <tr>
            <th className={classnames(styles.td, className)}>姓名</th>
            <th className={classnames(styles.td, className)}>學校</th>
            <th className={classnames(styles.td, className)}>學系</th>
          </tr>
        </thead>
        <tbody>
          {graduates.map((graduate: any, index: number) => {
            return (
              <tr key={index}>
                <td className={classnames(styles.td, className)}>
                  {graduate.name}
                </td>
                <td className={classnames(styles.td, className)}>
                  {graduate.school}
                </td>
                <td className={classnames(styles.td, className)}>
                  {graduate.department}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
