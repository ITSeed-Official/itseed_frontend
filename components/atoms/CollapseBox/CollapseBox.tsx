import { FC, useState } from "react";
import classnames from "classnames";
import Image from "next/image";

import arrow from "public/images/common/arrow.png";

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
        className={classnames(styles.collapseHeader, isOpen && styles.open)}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className={styles.title}>{title}</span>
        <Image
          className={classnames(styles.arrow, isOpen && styles.arrowReverse)}
          alt="arrow"
          src={arrow}
          width={36}
          height={36}
        />
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CollapseBox;
