import type { NextPage } from 'next';
import BannerContainer from 'components/molecules/BannerContainer';
import DropDownMenu from 'components/templates/About/DropDownMenu';
import TableView from 'components/templates/About/TableView';
import { CURRENT_SESSION } from '../../../util/common/setting';
import { useState, useEffect, useRef } from 'react';
import { BannerType } from '../../molecules/BannerContainer/enum';
import axios from 'axios';
import SectionWrapper from 'components/molecules/SectionWrapper';

interface Graduate {
  name: string;
  school: string;
  department: string;
}

interface IProps {
  graduates: Graduate[];
}

const About: NextPage<IProps> = (props: IProps) => {
  const [session, setSession] = useState(CURRENT_SESSION);
  const [graduates, setGraduates] = useState(props.graduates);
  const isFirstRun = useRef(true);

  useEffect(() => {
    const fetchAPI = async (session: number) => {
      const domain = process.env.NEXT_PUBLIC_API_ORIGIN;
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
        <DropDownMenu
          changeSession={(newSession: number) => {
            setSession(newSession);
          }}
          session={session}
        />
        <TableView graduates={graduates} />
      </SectionWrapper>
    </>
  );
};

export default About;
