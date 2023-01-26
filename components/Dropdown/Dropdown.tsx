// Vendors
import React, { memo, useRef } from 'react';
import { Wrapper } from './Dropdown.styles';
import useOnClickOutside from 'hooks/useOnClickOutside';

interface DropdownProps {
  isOpen: boolean;
  onClickOutside: () => void;
  component: JSX.Element;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
}

const Dropdown = ({ isOpen, onClickOutside, component, height, width, top, right, left, bottom }: DropdownProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(wrapperRef, onClickOutside);

  if (wrapperRef.current) {
    // dropDown goes up if it reaches the bottom of the screen in the current scroll position
    const dropDown = wrapperRef.current.getBoundingClientRect().bottom;
    const screenHeight = window.innerHeight;
    if (dropDown > screenHeight) {
      wrapperRef.current.style.top = `${screenHeight - dropDown - 50}px`;
    }

    // dropDown goes left if it reaches the right of the screen in the current scroll position
    const dropDownLeft = wrapperRef.current.getBoundingClientRect().right;
    const screenWidth = window.innerWidth;
    if (dropDownLeft > screenWidth) {
      wrapperRef.current.style.left = `${screenWidth - dropDownLeft - 50}px`;
    }
  }

  return (
    <Wrapper
      height={height}
      width={width}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      isOpen={isOpen}
      ref={wrapperRef}
    >
      {component}
    </Wrapper>
  );
};

const Memoized = memo(Dropdown);
export default Memoized;
