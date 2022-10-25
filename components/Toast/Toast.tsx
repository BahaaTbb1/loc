/* eslint-disable no-console */
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useTimeout } from 'hooks/useTimeout';
import { ProgressBar, ToastContainer, ToastContent, Close } from './Toast.styles';
interface IToastProps {
  close: () => void;
  children: React.ReactNode;
  type: 'correct' | 'wrong' | 'waiting';
  progress: number;
}

const Toast = ({ close, children, type, progress }: IToastProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  useTimeout(close, progress);

  const move = useCallback(() => {
    let i = 0;
    if (i == 0) {
      i = 1;
      let width = 1;
      const id = setInterval(frame, progress / 100);
      // eslint-disable-next-line no-inner-declarations
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          if (progressRef.current) {
            progressRef.current.style.display = `none`;
          }
          i = 0;
        } else {
          width++;
          // make it smooth
          if (progressRef.current) {
            progressRef.current.style.width = `${width}%`;
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    move();
  }, [move, progress]);

  return (
    <ToastContainer>
      <ToastContent>
        <img src={`/assets/images/icons/common/submission-${type}.png`} />
        <div style={{ flex: '1' }}>{children}</div>
        <Close onClick={close} src="/assets/images/icons/common/close.svg" />
      </ToastContent>
      <ProgressBar onMouseEnter={console.log} ref={progressRef} />
    </ToastContainer>
  );
};
export default memo(Toast);
