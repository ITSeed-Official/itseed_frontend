import { FC, useState } from "react";
import classnames from "classnames";
import Image from "next/image";

import arrowUp from "../../../public/images/up-arrow.png";
import arrowDown from "../../../public/images/down-arrow.png";

import styles from "./CollapseBox.module.scss";

type CollapseBoxProperty = {
  className?: string;
  title: string;
};

const CollapseBox: FC<CollapseBoxProperty> = ({
  className,
  title,
  children,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classnames(styles.collapseBox, className)}>
      <div
        className={classnames(
          styles.collapseHeader,
          isOpen ? styles.open : styles.close
        )}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className={styles.title}>{title}</span>
        <Image
          alt="arrow"
          src={isOpen ? arrowUp : arrowDown}
          width={36}
          height={36}
        />
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CollapseBox;
