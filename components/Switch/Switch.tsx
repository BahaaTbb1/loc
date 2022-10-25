import React, { Fragment, memo } from 'react';
import { SwitchButton, SwitchInput, SwitchLabel } from './Switch.styles';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
interface ISwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch = ({ checked, onChange }: ISwitchProps) => {
  return (
    <Fragment>
      <SwitchInput id={'switch'} checked={checked} onChange={onChange} type="checkbox" />
      <SwitchLabel htmlFor="switch" style={{ background: checked ? `${defaultTheme.color.main.mainBlue}` : '' }}>
        <SwitchButton />
      </SwitchLabel>
    </Fragment>
  );
};

export default memo(Switch);
