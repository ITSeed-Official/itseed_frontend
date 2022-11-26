import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TemplateWrapper from 'components/organisms/TemplateWrapper';
import SectionWrapper from 'components/molecules/SectionWrapper';

import { GOOGLE_LOGIN_LINK } from 'util/const';
import { ErrorCode, ErrorWithCode } from 'util/error';
import { logout } from 'api/auth';
import { getMe } from 'api/user';

import styles from './Apply.module.scss';

const Apply: NextPage<any> = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const data = await getMe();
      setData(data);
    } catch (e) {
      if (e instanceof ErrorWithCode) {
        if (e.errorCode === ErrorCode.NoAuth) {
          window.location.href = GOOGLE_LOGIN_LINK;
          return;
        }
        throw e;
      }
    }
  };

  const onLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (e) {
      router.push('/');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TemplateWrapper primaryTitle="立即報名" description="報名">
      <SectionWrapper className={styles.section}>
        {data ? (
          <>
            <textarea name="" id="" cols={30} rows={10}>
              {JSON.stringify(data, null, 2)}
            </textarea>
            <div>
              <button onClick={onLogout}>logout</button>
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
