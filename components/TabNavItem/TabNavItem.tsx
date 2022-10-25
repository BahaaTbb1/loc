import { S } from 'globalstyles/index';
import React from 'react';
import { ActivateLine, Li } from './TabNavItem.styles';

interface ITabNavItemProps {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (_id: string) => void;
}

const TabNavItem: React.FC<ITabNavItemProps> = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <S.Flex direction="column" style={{ cursor: 'pointer' }}>
      <Li onClick={handleClick} active={activeTab === id}>
        {title}
      </Li>
      {activeTab === id && <ActivateLine />}
    </S.Flex>
  );
};

export default TabNavItem;
