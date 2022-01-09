import type { NextPage } from "next";
import BannerContainer from "components/molecules/BannerContainer";
import DropDownMenu from "components/templates/Graduates/DropDownMenu";
import TableView from "components/templates/Graduates/TableView";
import { CURRENT_SESSION } from "../../../util/common/setting";
import { useState, useEffect } from "react";
import { BannerType } from "../../molecules/BannerContainer/enum";
import axios from "axios";
import SectionWrapper from "components/molecules/SectionWrapper";

const INITIAL_COUNTER = 0;

const Graduates: NextPage = (props: any) => {
  const [session, setSession] = useState(CURRENT_SESSION);
  const [renderCounter, setRenderCounter] = useState(INITIAL_COUNTER);
  const [graduates, setGraduates] = useState(props.graduates);

  useEffect(() => {
    setRenderCounter(renderCounter + 1);

    if (renderCounter <= INITIAL_COUNTER) {
      return;
    }

    const fetchAPI = async (session: number) => {
      const domain = process.env.NEXT_PUBLIC_API_ORIGIN;
      const graduates = await axios
        .get(`${domain}/graduates?session=${session}`)
        .then((res: any) => {
          return res.data.map((graduate: any) => {
            return {
              name: graduate.name,
              school: graduate.school,
              department: graduate.department,
            };
          });
        });
      setGraduates(graduates);
    };

    fetchAPI(session);
  }, [session]);

  return (
    <>
      <BannerContainer
        type={BannerType.general}
        backgroundImage="images/homepage/pics/banner.png"
        primaryTitle="歷屆名單"
      />
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

export default Graduates;
