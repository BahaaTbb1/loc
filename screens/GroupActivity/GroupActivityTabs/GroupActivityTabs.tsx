/* eslint-disable react/no-unescaped-entities */
import { Resource, TabContent, TabNavItem } from 'components';
import { S } from 'globalstyles';
import React, { useState } from 'react';
import { TabList, Tabs, TabPanel, OverviewDescription } from './GroupActivityTabs.styles';
interface IGroupActivityTabs {
  resources:
    | [
        {
          id: number;
          name: string;
          link: string;
        }
      ]
    | undefined;

  description: string | undefined;
}
const GroupActivityTabs = ({ resources, description }: IGroupActivityTabs) => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <Tabs>
      <TabList className="nav">
        <TabNavItem title="Overview" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Resources" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
      </TabList>

      <TabPanel>
        <TabContent id="tab1" activeTab={activeTab}>
          <OverviewDescription>{!!description ? description : 'No description was provided'}</OverviewDescription>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <S.Flex gap="16" style={{ flexWrap: 'wrap' }}>
            {resources?.map(({ id, link, name }) => {
              return <Resource type={'link'} title={name} key={id} link={link} />;
            })}
          </S.Flex>
        </TabContent>
      </TabPanel>
    </Tabs>
  );
};

export default GroupActivityTabs;
