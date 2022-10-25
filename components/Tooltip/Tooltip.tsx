import React, { useEffect, useRef } from 'react';
import ToolTipStyles from './Tooltip.styles';

interface ITooltip {
  children: React.ReactNode;
  text: string;
}

const ToolTip: React.FC<ITooltip> = ({ children, text, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const ContainerElement = ContainerRef.current;
    if (ContainerElement) {
      element?.addEventListener('mouseenter', () => {
        ContainerElement.style.display = 'block';
      });

      element?.addEventListener('mouseleave', () => {
        ContainerElement.style.display = 'none';
      });
      ContainerElement.addEventListener('mouseenter', () => {
        ContainerElement.style.display = 'block';
      });

      ContainerElement.addEventListener('mouseleave', () => {
        ContainerElement.style.display = 'none';
      });
    }
    return () => {
      if (ContainerElement) {
        element?.removeEventListener('mouseenter', () => {
          ContainerElement.style.display = 'block';
        });
        element?.removeEventListener('mouseleave', () => {
          ContainerElement.style.display = 'none';
        });
      }
    };
  }, []);

  return (
    <ToolTipStyles.Container>
      <ToolTipStyles.Box ref={ContainerRef}>
        {text}
        <ToolTipStyles.Arrow />
      </ToolTipStyles.Box>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </ToolTipStyles.Container>
  );
};
export default ToolTip;
