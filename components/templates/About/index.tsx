import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { domain } from 'util/const';
import { CURRENT_SESSION } from 'util/const';
import { Graduate } from 'api/graduates';

import IntroSection from '../Home/IntroSection';
import DropDownMenu from 'components/templates/About/DropDownMenu';
import TableView from 'components/templates/About/TableView';
import OrganizationSection from 'components/templates/About/OrganizationSection';
import BannerContainer from 'components/molecules/BannerContainer';
import { BannerType } from 'components/molecules/BannerContainer/enum';
import SectionWrapper from 'components/molecules/SectionWrapper';
import NextSection from 'components/atoms/NextSection';

interface IProps {
  graduates: Graduate[];
}

const About: NextPage<IProps> = (props: IProps) => {
  const [session, setSession] = useState(CURRENT_SESSION);
  const [graduates, setGraduates] = useState(props.graduates);
  const isFirstRun = useRef(true);

  useEffect(() => {
    const fetchAPI = async (session: number) => {
      const graduates = await axios.get(`${domain}/graduates?session=${session}`).then((res: any) => {
        return res.data.map((graduate: Graduate) => {
          return {
            name: graduate.name,
            school: graduate.school,
            department: graduate.department,
          };
        });
      });
      setGraduates(graduates);
    };

    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      fetchAPI(session);
    }
  }, [session]);

  return (
    <>
      <BannerContainer type={BannerType.general} primaryTitle="關於資種" />
      <SectionWrapper>
        <IntroSection displayFeatureCard={false} />
      </SectionWrapper>
      <OrganizationSection />
      <SectionWrapper>
        <DropDownMenu
          changeSession={(newSession: number) => {
            setSession(newSession);
          }}
          session={session}
        />
        <TableView graduates={graduates} />
      </SectionWrapper>
      <NextSection title="計畫介紹" path="/plan" />
    </>
  );
};

export default About;
