import { FC } from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <div className={styles.linksRow}>
          <span>
            <Image
              alt="facebook"
              src="/images/icons/icon-facebook.svg"
              width="24"
              height="24"
            />
          </span>
          <span>
            <Image
              alt="medium"
              src="/images/icons/icon-medium.svg"
              width="24"
              height="24"
            />
          </span>
          <span>
            <Image
              alt="mail"
              src="/images/icons/icon-mail.svg"
              width="24"
              height="24"
            />
          </span>
        </div>
        <div className={styles.ownerRow}>
          <span>主辦單位：新北市電腦商業同業公會</span>
          <Image
            alt="NTCA"
            src="/images/NTCA-logo.svg"
            width="46"
            height="11"
          />
        </div>
        <span className={styles.copywritingRow}>
          Copyright © 2021 - 資訊種子培訓計畫
        </span>
      </section>
    </footer>
  );
};

export default Footer;
