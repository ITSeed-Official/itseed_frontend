import { FC } from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <div className={styles.linksRow}>
          <span>
            <a
              href="https://www.facebook.com/iloveitseed"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                alt="facebook"
                src="/images/icons/icon-facebook.svg"
                width="24"
                height="24"
              />
            </a>
          </span>
          <span>
            <a
              href="https://medium.com/%E6%88%91%E8%88%87%E8%B3%87%E7%A8%AE-itseed-%E8%B3%87%E8%A8%8A%E7%A8%AE%E5%AD%90-%E5%AE%98%E6%96%B9%E9%83%A8%E8%90%BD%E6%A0%BC"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                alt="medium"
                src="/images/icons/icon-medium.svg"
                width="24"
                height="24"
              />
            </a>
          </span>
          <span>
            <a
              href="mailto:itseedsystem@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                alt="mail"
                src="/images/icons/icon-mail.svg"
                width="24"
                height="24"
              />
            </a>
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
          Copyright © {new Date().getFullYear()} - 資訊種子培訓計畫
        </span>
      </section>
    </footer>
  );
};

export default Footer;
