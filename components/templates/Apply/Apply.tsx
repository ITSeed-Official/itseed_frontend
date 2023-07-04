import type { NextPage } from 'next';
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import moment from 'moment';
import { START_TIME, END_TIME } from 'util/const';

import { AuthContext } from 'contexts/AuthContext';
import { appPath } from 'util/routing.config';
import { EMAIL, FB_PAGE } from 'util/const';
import { stepMap } from 'util/form';

import SectionWrapper from 'components/molecules/SectionWrapper';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

import styles from './Apply.module.scss';

const Apply: NextPage<any> = () => {
  const { isLogin, nickname, step, signIn, signOut, updateUserInfo } = useContext(AuthContext);
  const domRouter = useRouter();

  useEffect(() => {
    const startDate = moment(START_TIME, 'YYYY-MM-DD HH:mm:ss');
    const endDate = moment(END_TIME, 'YYYY-MM-DD HH:mm:ss');
    const now = moment();
    // Temporary Hack Method
    const devMode = document.cookie.includes('DEV_MODE=true');

    // if (!devMode && !now.isBetween(startDate, endDate)) {
    //   alert('報名尚未開始');
    //   domRouter.back();
    // }

    updateUserInfo(); // 每次回此畫面就重新抓一次 step 的資訊
  }, []);

  // 已經完成報名，直接跳轉至繳費頁面
  if (step === 4) {
    router.push(appPath.applySteps);
    return <></>;
  }

  return (
    <SectionWrapper className={styles.section} isBackgroundGreen>
      {/*TODO: 登入成功時的頁面狀態 */}
      <div className={styles.container}>
        {isLogin ? (
          <>
            <Image
              alt="welcome"
              className={styles.image}
              src={'/images/apply/pics/welcome.png'}
              width={212}
              height={212}
              layout="fixed"
            />
            <h2 className={styles.title}>{nickname}，您好！</h2>
            {step !== undefined && (
              <p className={styles.description}>
                {step === 0 ? (
                  <>
                    歡迎來到資訊種子培訓計畫報名頁面，勇敢加入資種的行列吧！
                    <br />
                    接下來將邀請您填寫報名相關資訊，總共分為五個部分，每部分皆可儲存進度。
                    <br />
                    第一部分為「特質調查」，共有 10題，幫助您回想過去合作經驗，也讓我們更了解您！
                    填答完畢會直接進入下一部分，且
                    <span style={{ color: '#00702D', fontWeight: 400 }}>特質調查填答內容不會作為書審評分的標準</span>
                    ，請安心填寫。
                  </>
                ) : (
                  <>
                    歡迎回到資訊種子培訓計畫報名頁面，您先前已填寫至：
                    <span className={styles.stepName}>{stepMap[step - 1]}</span>
                    <br />
                    點選下方「開始填寫」按鈕前往下一階段：
                    <span className={styles.stepName}>{stepMap[step]}</span>
                    繼續進行報名流程。
                  </>
                )}
              </p>
            )}
            <div className={styles.buttons}>
              <Button>
                <Link href={appPath.applySteps}>開始填寫</Link>
              </Button>
              <Button onClick={() => signOut()}>登出</Button>
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.title}>登入</h2>
            <p className={styles.description}>邀請您先登入 Google 帳號以利報名作業進行。</p>
            <Button onClick={() => signIn()}>
              <Icon className={styles.loginIcon} iconSrc={'/images/icons/icons-google-login.svg'} />
              Sign in with Google
            </Button>
          </>
        )}
      </div>
      <p>
        目前僅開放 Google 帳號註冊/登入，如有任何其他相關問題，請私訊
        <a className={styles.link} href={FB_PAGE} target="blank">
          資訊種子粉絲專頁
        </a>
        ，或寄信至 ITSeed 信箱（{EMAIL}
        ）將由專人為您解答！
      </p>
    </SectionWrapper>
  );
};

export default Apply;
