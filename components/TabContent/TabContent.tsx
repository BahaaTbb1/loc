import React from 'react';
import { TabContentContainer } from './TabContent.styles';

interface ITabContentProps {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}

const TabContent: React.FC<ITabContentProps> = ({ id, activeTab, children }) => {
  return activeTab === id ? <TabContentContainer>{children}</TabContentContainer> : null;
};

export default TabContent;
