import { FC, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import Button from "components/atoms/Button";
import SectionWrapper from "components/molecules/SectionWrapper";
import dStyles from "./Header.desktop.module.scss";
import mStyles from "./Header.mobile.module.scss";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileHeader: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <header
      className={classNames(mStyles.header, {
        [mStyles.isMenuOpened]: isMenuOpened,
      })}
    >
      <nav className={mStyles.headerNav}>
        <div className={mStyles.headerNavContent}>
          <Image
            alt="logo"
            layout="fixed"
            src="/images/header_mobile_logo@3x.png"
            width="131"
            height="24"
          />
          <button
            onClick={() => {
              setIsMenuOpened(!isMenuOpened);
            }}
            className={mStyles.menuButton}
          >
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={mStyles.main}>
        <div className={mStyles.content}>
          <ul className={mStyles.menuList}>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                <span>計畫內容</span>
                <FontAwesomeIcon
                  className={mStyles.unexpandedSubMenuIcon}
                  icon={faChevronRight}
                />
                <FontAwesomeIcon
                  className={mStyles.expandedSubMenuIcon}
                  icon={faChevronDown}
                />
              </div>
              <ul className={mStyles.subMenuList}>
                <li className={mStyles.subMenuItem}>講座內容</li>
                <li className={mStyles.subMenuItem}>專案內容</li>
                <li className={mStyles.subMenuItem}>企業參訪</li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>招生資訊</div>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                <span>職涯體驗</span>
                <FontAwesomeIcon
                  className={mStyles.unexpandedSubMenuIcon}
                  icon={faChevronRight}
                />
                <FontAwesomeIcon
                  className={mStyles.expandedSubMenuIcon}
                  icon={faChevronDown}
                />
              </div>
              <ul className={mStyles.subMenuList}>
                <li className={mStyles.subMenuItem}>個人指導</li>
                <li className={mStyles.subMenuItem}>公司實習</li>
                <li className={mStyles.subMenuItem}>職涯發展</li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                <span>校友評價</span>
                <FontAwesomeIcon
                  className={mStyles.unexpandedSubMenuIcon}
                  icon={faChevronRight}
                />
                <FontAwesomeIcon
                  className={mStyles.expandedSubMenuIcon}
                  icon={faChevronDown}
                />
              </div>
              <ul className={mStyles.subMenuList}>
                <li className={mStyles.subMenuItem}>學長姐怎麼看</li>
                <li className={mStyles.subMenuItem}>領導者怎麼看</li>
                <li className={mStyles.subMenuItem}>學員怎麼看</li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>關於資種</div>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>常見問題</div>
            </li>
          </ul>
          <div className={mStyles.buttonWrapper}>
            <Button>立即報名</Button>
          </div>
        </div>
        <div className={mStyles.mask}></div>
      </div>
    </header>
  );
};

const DesktopHeader: FC = () => {
  return (
    <header className={dStyles.header}>
      <SectionWrapper className={dStyles.headerContent}>
        <Image
          alt="logo"
          src="/images/header_desktop_logo@2x.png"
          width={170}
          height={31}
        />
        <ul className={dStyles.navList}>
          <li className={dStyles.navItem}>
            <span>計畫內容</span>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>講座內容</li>
                <li className={dStyles.subNavListItem}>專案內容</li>
                <li className={dStyles.subNavListItem}>企業參訪</li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>招生資訊</li>
          <li className={dStyles.navItem}>
            <span>職涯體驗</span>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>個人指導</li>
                <li className={dStyles.subNavListItem}>公司實習</li>
                <li className={dStyles.subNavListItem}>職涯發展</li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <span>校友評價</span>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>學長姐怎麼看</li>
                <li className={dStyles.subNavListItem}>領導者怎麼看</li>
                <li className={dStyles.subNavListItem}>學員怎麼看</li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>關於資種</li>
          <li className={dStyles.navItem}>常見問題</li>
        </ul>
        <Button text="立即報名" />
      </SectionWrapper>
    </header>
  );
};
const Header: FC = () => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
};

export default Header;
