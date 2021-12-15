import { FC, useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import Button, { ButtonIcon } from "components/atoms/Button";
import SectionWrapper from "components/molecules/SectionWrapper";
import dStyles from "./Header.desktop.module.scss";
import mStyles from "./Header.mobile.module.scss";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileHeader: FC = () => {
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpened(false);
    };
    router.events.on("routeChangeStart", closeMenu);
    return () => {
      router.events.off("routeChangeStart", closeMenu);
    };
  }, [router]);

  return (
    <header
      className={classNames(mStyles.header, {
        [mStyles.isMenuOpened]: isMenuOpened,
      })}
    >
      <nav className={mStyles.headerNav}>
        <div className={mStyles.headerNavContent}>
          <Link href="/" passHref>
            <Image
              alt="logo"
              layout="fixed"
              src="/images/common/pics/header_mobile_logo@3x.png"
              width={131}
              height={24}
            />
          </Link>
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
                計畫內容
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
                <li>
                  <Link href="/plan#classes" passHref>
                    <a className={mStyles.subMenuItem}>講座內容</a>
                  </Link>
                </li>
                <li>
                  <Link href="/plan#projects" passHref>
                    <a className={mStyles.subMenuItem}>專案內容</a>
                  </Link>
                </li>
                <li>
                  <Link href="/plan#visitations" passHref>
                    <a className={mStyles.subMenuItem}>企業參訪</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                <Link href="/admission">招生資訊</Link>
              </div>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                職涯體驗
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
                <li>
                  <Link href="/career#personal" passHref>
                    <a className={mStyles.subMenuItem}>個人指導</a>
                  </Link>
                </li>
                <li>
                  <Link href="/career#company" passHref>
                    <a className={mStyles.subMenuItem}>公司實習</a>
                  </Link>
                </li>
                <li>
                  <Link href="/career#interview" passHref>
                    <a className={mStyles.subMenuItem}>職涯發展</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                校友評價
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
                <li>
                  <Link href="/sharing#graduate" passHref>
                    <a className={mStyles.subMenuItem}>學長姐怎麼看</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sharing#leader" passHref>
                    <a className={mStyles.subMenuItem}>領導者怎麼看</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sharing#trainee" passHref>
                    <a className={mStyles.subMenuItem}>學員怎麼看</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <Link href="/about" passHref>
                <a className={mStyles.menuItem}>關於資種</a>
              </Link>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <Link href="/faq">
                <a className={mStyles.menuItem}>常見問題</a>
              </Link>
            </li>
          </ul>
          <div className={mStyles.buttonWrapper}>
            <Button icon={ButtonIcon.arrow}>立即報名</Button>
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
        <Link href="/" passHref>
          <Image
            className={dStyles.headerLogo}
            alt="logo"
            src="/images/common/pics/header_desktop_logo@2x.png"
            width={170}
            height={31}
          />
        </Link>
        <ul className={dStyles.navList}>
          <li className={dStyles.navItem}>
            <span>
              <Link href="/plan">計畫內容</Link>
            </span>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href="/plan#classes">講座內容</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href="/plan#projects">專案內容</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href="/plan#visitations">企業參訪</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <Link href="/admission">招生資訊</Link>
          </li>
          <li className={dStyles.navItem}>
            <span>
              <Link href="/career">職涯體驗</Link>
            </span>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href="/career#personal">個人指導</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href="/career#company">公司實習</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href="/career#interview">職涯發展</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <Link href="/sharing">校友評價</Link>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href="/sharing#graduate">學長姐怎麼看</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href="/sharing#leader">領導者怎麼看</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href="/sharing#trainee">學員怎麼看</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <Link href="/about">關於資種</Link>
          </li>

          <li className={dStyles.navItem}>
            <Link href="/faq">常見問題</Link>
          </li>
        </ul>
        <Button icon={ButtonIcon.arrow}>立即報名</Button>
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
