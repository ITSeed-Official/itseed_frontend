import type { NextPage } from 'next';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from 'contexts/AuthContext';
import { ErrorCode, ErrorWithCode } from 'util/error';
import { getFormData } from 'api/application';

import TemplateWrapper from 'components/organisms/TemplateWrapper';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button from 'components/atoms/Button';

import styles from './Apply.module.scss';
import { appPath } from 'util/routing.config';

const Apply: NextPage<any> = () => {
  const [data, setData] = useState(null);
  const { signIn, signOut } = useContext(AuthContext);

  const getData = async () => {
    try {
      const data = await getFormData();
      setData(data);
    } catch (e) {
      if (e instanceof ErrorWithCode) {
        if (e.errorCode === ErrorCode.NoAuth) {
          signIn();
          return;
        }
        throw e;
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TemplateWrapper primaryTitle="立即報名" description="報名">
      <SectionWrapper className={styles.section}>
        {/*TODO: 登入成功時的頁面狀態 */}
        {data ? (
          <>
            <textarea name="" id="" cols={30} rows={10} value={JSON.stringify(data, null, 2)} readOnly />
            <div>
              <Button>
                <Link href={appPath.applySteps}>開始填寫</Link>
              </Button>
            </div>
            <div>
              <button onClick={() => signOut()}>logout</button>
            </div>
          </>
        ) : (
          'loading...'
        )}
      </SectionWrapper>
    </TemplateWrapper>
  );
};

export default Apply;
