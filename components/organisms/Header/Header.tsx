import { FC, useState, useEffect, useContext, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import classNames from 'classnames';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LayoutContext } from 'contexts/LayoutContext';
import { AuthContext } from 'contexts/AuthContext';
import { appPath } from 'util/routing.config';
import { useOnClickOutside } from 'util/hooks/useOnclickOutside';

import Button, { ButtonIcon } from 'components/atoms/Button';
import SectionWrapper from 'components/molecules/SectionWrapper';
import dStyles from './Header.desktop.module.scss';
import mStyles from './Header.mobile.module.scss';
import Icon from 'components/atoms/Icon';

const MobileHeader: FC = () => {
  const router = useRouter();
  const { isSubNavStuck } = useContext(LayoutContext);
  const { nickname, avatar, signOut } = useContext(AuthContext);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', closeMenu);
    window.addEventListener('hashchange', () => {
      closeMenu();
    });
    return () => {
      router.events.off('routeChangeStart', closeMenu);
      window.removeEventListener('hashchange', closeMenu);
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
            <a className={mStyles.logoWrapper}>
              <Image
                alt="logo"
                layout="fixed"
                src="/images/common/pics/header_mobile_logo@3x.png"
                width={131}
                height={24}
              />
            </a>
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
                <li onClick={closeMenu}>
                  <Link href={appPath.careerCompany} passHref>
                    <a className={mStyles.subMenuItem}>公司實習</a>
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={appPath.careerPersonalization} passHref>
                    <a className={mStyles.subMenuItem}>個人指導</a>
                  </Link>
                </li>
                <li onClick={closeMenu}>
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
                <li onClick={closeMenu}>
                  <Link href={appPath.alumniSenior} passHref>
                    <a className={mStyles.subMenuItem}>學長姐怎麼看</a>
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={appPath.alumniLeader} passHref>
                    <a className={mStyles.subMenuItem}>領導者怎麼看</a>
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={appPath.alumniJunior} passHref>
                    <a className={mStyles.subMenuItem}>學員怎麼看</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <div className={mStyles.menuItem}>
                關於資種
                <FontAwesomeIcon className={mStyles.unexpandedSubMenuIcon} icon={faChevronRight} />
                <FontAwesomeIcon className={mStyles.expandedSubMenuIcon} icon={faChevronDown} />
              </div>
              <ul className={mStyles.subMenuList}>
                <li onClick={closeMenu}>
                  <Link href={appPath.aboutPlan} passHref>
                    <a className={mStyles.subMenuItem}>計畫簡介</a>
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={appPath.aboutOrganization} passHref>
                    <a className={mStyles.subMenuItem}>組織架構</a>
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href={appPath.aboutMember} passHref>
                    <a className={mStyles.subMenuItem}>歷屆名單</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={mStyles.menuItemWrapper}>
              <Link href={appPath.faq}>
                <a className={mStyles.menuItem}>常見問題</a>
              </Link>
            </li>
            {nickname && (
              <li className={mStyles.menuItemWrapper}>
                <div className={mStyles.menuItem}>
                  歡迎，{nickname}
                  <FontAwesomeIcon className={mStyles.unexpandedSubMenuIcon} icon={faChevronRight} />
                  <FontAwesomeIcon className={mStyles.expandedSubMenuIcon} icon={faChevronDown} />
                </div>
                <ul className={mStyles.subMenuList}>
                  <li onClick={closeMenu}>
                    <Link href={appPath.applySteps} passHref>
                      <a className={mStyles.subMenuItem}>報名進度</a>
                    </Link>
                  </li>
                  <li onClick={closeMenu}>
                    <a className={mStyles.subMenuItem} onClick={() => signOut()}>
                      登出
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
          <>
            {nickname === undefined && (
              <div className={mStyles.buttonWrapper}>
                <Button icon={ButtonIcon.arrow}>
                  <Link href={appPath.apply}>立即報名</Link>
                </Button>
              </div>
            )}
          </>
        </div>
        <div className={mStyles.mask}></div>
      </div>
    </header>
  );
};

const DesktopHeader: FC = () => {
  const { isSubNavStuck } = useContext(LayoutContext);
  const { avatar, signOut } = useContext(AuthContext);
  const [isPanelShow, setIsPanelShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = () => {
    setIsPanelShow(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <header ref={ref} className={classNames([dStyles.header, { [dStyles.isSubNavStuck]: isSubNavStuck }])}>
      <SectionWrapper className={dStyles.headerContent}>
        <Link href="/">
          <a className={dStyles.logoWrapper}>
            <Image
              className={dStyles.headerLogo}
              alt="logo"
              src="/images/common/pics/header_desktop_logo@2x.png"
              width={170}
              height={31}
            />
          </a>
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
            <Link href={appPath.careerCompany}>職涯體驗</Link>
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.careerCompany}>公司實習</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.careerPersonalization}>個人指導</Link>
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
            <div className={dStyles.subNavList}>
              <ul className={dStyles.subNavListContent}>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.aboutPlan}>計畫簡介</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.aboutOrganization}>組織架構</Link>
                </li>
                <li className={dStyles.subNavListItem}>
                  <Link href={appPath.aboutMember}>歷屆名單</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={dStyles.navItem}>
            <Link href={appPath.faq}>常見問題</Link>
          </li>
        </ul>
        <>
          {avatar ? (
            <div className={dStyles.user}>
              <Icon iconSrc={avatar} className={dStyles.avatar} onClick={() => setIsPanelShow(true)} />
              {isPanelShow && (
                <div ref={ref} className={dStyles.panel}>
                  <p onClick={() => router.push(appPath.applySteps)}>報名進度</p>
                  <p onClick={() => signOut()}>登出</p>
                </div>
              )}
            </div>
          ) : (
            <Button icon={ButtonIcon.arrow}>
              <Link href={appPath.apply}>立即報名</Link>
            </Button>
          )}
        </>
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
