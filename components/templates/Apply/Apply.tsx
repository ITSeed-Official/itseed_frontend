import type { NextPage } from 'next';
import { useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from 'contexts/AuthContext';

import TemplateWrapper from 'components/organisms/TemplateWrapper';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button from 'components/atoms/Button';

import styles from './Apply.module.scss';
import { appPath } from 'util/routing.config';

const Apply: NextPage<any> = () => {
  const { isLogin, nickname, signIn, signOut } = useContext(AuthContext);

  return (
    <TemplateWrapper primaryTitle="立即報名" description="報名">
      <SectionWrapper className={styles.section} isBackgroundGreen>
        {/*TODO: 登入成功時的頁面狀態 */}
        <div className={styles.container}>
          {isLogin ? (
            <>
              <h2 className={styles.title}>{nickname}，您好！</h2>
              <p className={styles.description}>
                歡迎來到資訊種子培訓計畫報名頁面！接下來將邀請您填寫報名相關資訊，
                總共分為五個部分，需時約X小時（可儲存進度），還請您耐心填寫。
              </p>
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
              <p className={styles.description}>邀請您先登入Ｇoogle帳號以利報名作業進行。</p>
              <Button onClick={() => signIn()}>Sign in with Google</Button>
            </>
          )}
        </div>
      </SectionWrapper>
    </TemplateWrapper>
  );
};

export default Apply;
