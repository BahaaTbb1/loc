/* eslint-disable react/no-unescaped-entities */
import { Resource, TabContent, TabNavItem } from 'components';
import { S } from 'globalstyles';
import React, { useState } from 'react';
import { TabList, Tabs, TabPanel, OverviewDescription } from './GroupActivityTabs.styles';

const GroupActivityTabs = () => {
  const [activeTab, setActiveTab] = useState('tab2');
  return (
    <Tabs>
      <TabList className="nav">
        <TabNavItem title="Overview" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Resources" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
      </TabList>

      <TabPanel>
        <TabContent id="tab1" activeTab={activeTab}>
          <OverviewDescription></OverviewDescription>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <S.Flex gap="16" style={{ flexWrap: 'wrap' }}></S.Flex>
        </TabContent>
      </TabPanel>
    </Tabs>
  );
};

export default GroupActivityTabs;
