import { FC, useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LayoutContext } from 'contexts/LayoutContext';
import { appPath } from 'util/routing.config';

import Button, { ButtonIcon } from 'components/atoms/Button';
import SectionWrapper from 'components/molecules/SectionWrapper';
import dStyles from './Header.desktop.module.scss';
import mStyles from './Header.mobile.module.scss';

const MobileHeader: FC = () => {
  const router = useRouter();
  const { isSubNavStuck } = useContext(LayoutContext);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpened(false);
    };
    router.events.on('routeChangeStart', closeMenu);
    return () => {
      router.events.off('routeChangeStart', closeMenu);
    };
  }, [router]);

  return (
    <header
      className={classNames(mStyles.header, {
        [mStyles.isMenuOpened]: isMenuOpened,
      })}
    >
      <nav className={classNames([mStyles.headerNav, { [mStyles.isSubNavStuck]: isSubNavStuck }])}>
        <div className={mStyles.headerNavContent}>
          <Link href="/" passHref>
            <div>
              <Image
                alt="logo"
                layout="fixed"
                src="/images/common/pics/header_mobile_logo@3x.png"
                width={131}
                height={24}
              />
            </div>
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
                <FontAwesomeIcon className={mStyles.unexpandedSubMenuIcon} icon={faChevronRight} />
                <FontAwesomeIcon className={mStyles.expandedSubMenuIcon} icon={faChevronDown} />
              </div>
              <ul className={mStyles.subMenuList}>
                <li>
                  <Link href={appPath.courses} passHref>
                    <a className={mStyles.subMenuItem}>講座課程</a>
                  </Link>
                </li>
                <li>
                  <Link href={appPath.projects} passHref>
                    <a className={mStyles.subMenuItem}>專案內容</a>
                  </Link>
                </li>
                <li>
                  <Link href={appPath.visitation} passHref>
                    <a className={mStyles.subMenuItem}>企業參訪</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                <Link href={appPath.recruit}>招生資訊</Link>
              </div>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                職涯體驗
                <FontAwesomeIcon className={mStyles.unexpandedSubMenuIcon} icon={faChevronRight} />
                <FontAwesomeIcon className={mStyles.expandedSubMenuIcon} icon={faChevronDown} />
              </div>
              <ul className={mStyles.subMenuList}>
                <li>
                  <Link href={appPath.careerPersonalization} passHref>
                    <a className={mStyles.subMenuItem}>個人指導</a>
                  </Link>
                </li>
                <li>
                  <Link href={appPath.careerCompany} passHref>
                    <a className={mStyles.subMenuItem}>公司實習</a>
                  </Link>
                </li>
                <li>
                  <Link href={appPath.careerInterview} passHref>
                    <a className={mStyles.subMenuItem}>職涯訪談</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                校友評價
                <FontAwesomeIcon className={mStyles.unexpandedSubMenuIcon} icon={faChevronRight} />
                <FontAwesomeIcon className={mStyles.expandedSubMenuIcon} icon={faChevronDown} />
              </div>
              <ul className={mStyles.subMenuList}>
                <li>
                  <Link href={appPath.alumniSenior} passHref>
                    <a className={mStyles.subMenuItem}>學長姐怎麼看</a>
                  </Link>
                </li>
                <li>
                  <Link href={appPath.alumniLeader} passHref>
                    <a className={mStyles.subMenuItem}>領導者怎麼看</a>
                  </Link>
                </li>
                <li>
                  <Link href={appPath.alumniJunior} passHref>
                    <a className={mStyles.subMenuItem}>學員怎麼看</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <Link href={appPath.about} passHref>
                <a className={mStyles.menuItem}>關於資種</a>
              </Link>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <Link href={appPath.faq}>
                <a className={mStyles.menuItem}>常見問題</a>
              </Link>
            </li>
          </ul>
          <div className={mStyles.buttonWrapper}>
            <Button icon={ButtonIcon.arrow}>
              <Link href={appPath.apply}>立即報名</Link>
            </Button>
          </div>
        </div>
        <div className={mStyles.mask}></div>
      </div>
    </header>
  );
};

const DesktopHeader: FC = () => {
  const { isSubNavStuck } = useContext(LayoutContext);

  return (
    <header className={classNames([dStyles.header, { [dStyles.isSubNavStuck]: isSubNavStuck }])}>
      <SectionWrapper className={dStyles.headerContent}>
        <Link href="/" passHref>
          <div>
            <Image
              className={dStyles.headerLogo}
              alt="logo"
              src="/images/common/pics/header_desktop_logo@2x.png"
              width={170}
              height={31}
            />
          </div>
        </Link>
        <ul className={dStyles.navList}>
          <li className={dStyles.navItem}>
            <Link href={appPath.plan}>計畫內容</Link>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.courses}>講座課程</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.projects}>專案內容</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.visitation}>企業參訪</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <Link href={appPath.recruit}>招生資訊</Link>
          </li>
          <li className={dStyles.navItem}>
            <Link href={appPath.career}>職涯體驗</Link>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.careerPersonalization}>個人指導</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.careerCompany}>公司實習</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.careerInterview}>職涯訪談</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <Link href={appPath.alumni}>校友評價</Link>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.alumniSenior}>學長姐怎麼看</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.alumniLeader}>領導者怎麼看</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.alumniJunior}>學員怎麼看</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <Link href={appPath.about}>關於資種</Link>
          </li>
          <li className={dStyles.navItem}>
            <Link href={appPath.faq}>常見問題</Link>
          </li>
        </ul>
        <Button icon={ButtonIcon.arrow}>
          <Link href={appPath.apply}>立即報名</Link>
        </Button>
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
