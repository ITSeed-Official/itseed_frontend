import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';

import { CURRENT_SESSION } from 'util/const';
import { appPath } from 'util/routing.config';
import { useTab } from 'util/hooks/useTab';
import { getGraduates, Graduate } from 'api/graduates';
import { scrollTo } from 'util/scroll';

import IntroSection from 'components/templates/Home/IntroSection';
import DropDownMenu from 'components/templates/About/DropDownMenu';
import TableView from 'components/templates/About/TableView';
import OrganizationSection from 'components/templates/About/OrganizationSection';
import TemplateWrapper from 'components/organisms/TemplateWrapper';
import TabNav from 'components/molecules/TabNav';
import SectionWrapper from 'components/molecules/SectionWrapper';

interface IProps {
  graduates: Graduate[];
}

const tabs = ['計畫簡介', '組織架構', '歷屆名單'].map((text) => ({ key: text, text }));

const About: NextPage<IProps> = ({ graduates: data }) => {
  const [session, setSession] = useState(CURRENT_SESSION);
  const [graduates, setGraduates] = useState(data);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, false);

  const introRef = useRef<HTMLDivElement>(null);
  const organizationRef = useRef<HTMLDivElement>(null);
  const rosterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session !== CURRENT_SESSION || !isFirstRender) {
      if (isFirstRender) {
        setIsFirstRender(false);
        return;
      }

      const fetchAPI = async (session: number) => {
        const graduates = await getGraduates(session);
        setGraduates(graduates);
      };

      fetchAPI(session);
    }
  }, [session, isFirstRender]);

  useEffect(() => {
    if (!introRef && !organizationRef && !rosterRef) return;

    switch (activeTab) {
      case '計畫簡介':
        scrollTo(introRef);
        break;
      case '組織架構':
        scrollTo(organizationRef);
        break;
      case '歷屆名單':
        scrollTo(rosterRef);
        break;
    }
  }, [activeTab, introRef, organizationRef, rosterRef]);

  return (
    <TemplateWrapper primaryTitle="關於資種" nextSectionPath={appPath.faq} nextSectionTitle="常見問題">
      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={(tab: string) => {
          if (activeTab !== tab) {
            setActiveTab(tab);
            return;
          }
          setActiveTab('');
        }}
        onStickyChange={setIsSubNavStuck}
      />
      <div ref={introRef}>
        <IntroSection displayFeatureCard={false} />
      </div>
      <div ref={organizationRef}>
        <OrganizationSection />
      </div>
      <div ref={rosterRef}>
        <SectionWrapper title="歷屆名單">
          <DropDownMenu
            changeSession={(newSession: number) => {
              setSession(newSession);
            }}
            session={session}
          />
          <TableView graduates={graduates} />
        </SectionWrapper>
      </div>
    </TemplateWrapper>
  );
};

export default About;
