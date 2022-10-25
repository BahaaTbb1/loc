import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Wrapper, Header, StyledModal, CloseButton, Content, Backdrop, BottomBlur } from './modal.styles';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string | React.ReactNode;
  position: 'top-left' | 'top-right' | 'middle';
  height?: string;
}

export const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, modalContent, headerText, position, height }) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [isShown]);

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <div>
      <Backdrop onClick={hide} />
      <Wrapper position={position} aria-modal tabIndex={-1} role="dialog">
        <StyledModal>
          <Header>
            <CloseButton data-dismiss="modal" aria-label="Close" onClick={hide}>
              <img src="/assets/images/icons/common/close-dark.svg" />
            </CloseButton>
            <div style={{ flex: 1 }}>{headerText}</div>
          </Header>
          <Content height={height}>{modalContent}</Content>
          <BottomBlur />
        </StyledModal>
      </Wrapper>
    </div>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
