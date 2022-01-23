import { FC, useState } from "react";
import classnames from "classnames";
import Image from "next/image";

import arrow from "public/images/common/arrow.png";

import styles from "./DropDownMenu.module.scss";
import { CURRENT_SESSION } from "../../../../util/common/setting";

type ChangeSession = (newSession: number) => void;

type DropDownMenuProperty = {
  className?: string;
  changeSession: ChangeSession;
  session: number;
};

const DropDownMenu: FC<DropDownMenuProperty> = ({
  className,
  changeSession,
  session,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classnames(styles.dropDownMenu, className)}>
      <div
        className={classnames(styles.dropDownHeader, isOpen && styles.open)}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className={styles.title}>{`${session} 屆`}</span>
        <Image
          className={classnames(styles.arrow, isOpen && styles.arrowReverse)}
          alt="arrow"
          src={arrow}
          width={24}
          height={24}
        />
      </div>
      {isOpen && generateSessionNavList(changeSession, setOpen)}
    </div>
  );
};

const generateSessionNavList = (changeSession: ChangeSession, setOpen: any) => {
  let subNavListItems = Array.from({ length: CURRENT_SESSION }, (_, i) => i + 1)
    .reverse()
    .map((session: number, index: number) => {
      return (
        <li
          key={index}
          className={styles.subNavListItem}
          onClick={() => {
            changeSession(session);
            setOpen(false);
          }}
        >
          {session}
        </li>
      );
    });

  return <ul className={styles.subNavList}>{subNavListItems}</ul>;
};

export default DropDownMenu;
