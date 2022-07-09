import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';

import { CURRENT_SESSION } from 'util/const';
import { appPath } from 'util/routing.config';
import { useTab } from 'util/hooks/useTab';
import { getGraduates, Graduate } from 'api/graduates';

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
  const elRef = useRef<HTMLDivElement>(null);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, false);

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

  return (
    <TemplateWrapper primaryTitle="關於資種" nextSectionPath={appPath.plan} nextSectionTitle="計畫介紹">
      <div ref={elRef}>
        <TabNav
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={(tab: string) => {
            if (activeTab !== tab) {
              setActiveTab(tab);
              const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
              const contentOffsetTop = elRef.current?.offsetTop || 0;
              window.scrollTo({ left: 0, top: contentOffsetTop - headerHeight, behavior: 'smooth' });
              return;
            }
            setActiveTab('');
          }}
          onStickyChange={setIsSubNavStuck}
        />
        {(activeTab === '' || activeTab === '計畫簡介') && <IntroSection displayFeatureCard={false} />}
        {(activeTab === '' || activeTab === '組織架構') && <OrganizationSection />}
        {(activeTab === '' || activeTab === '歷屆名單') && (
          <SectionWrapper title="歷屆名單">
            <DropDownMenu
              changeSession={(newSession: number) => {
                setSession(newSession);
              }}
              session={session}
            />
            <TableView graduates={graduates} />
          </SectionWrapper>
        )}
      </div>
    </TemplateWrapper>
  );
};

export default About;
