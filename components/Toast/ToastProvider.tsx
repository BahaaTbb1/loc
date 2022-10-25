/* eslint-disable react/display-name */
import React, { useState, useMemo, memo } from 'react';

import { ToastContext } from './ToastContext';
import Toast from './Toast';
import { ToastWrapper } from './Toast.styles';
import { generateUEID } from 'utils/common';

// Create a random ID

interface IToastProviderProps {
  children: React.ReactNode;
}
interface IToast {
  id: string;
  message: string | React.ReactNode;
  type: 'correct' | 'wrong' | 'waiting';
  progress: number;
}

export const ToastProvider = memo(({ children }: IToastProviderProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const open = (message: string | React.ReactNode, type: 'correct' | 'wrong' | 'waiting', progress: number) =>
    setToasts((currentToasts) => [...currentToasts, { id: generateUEID(), message, type, progress }]);

  const close = (id: string) => setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      <>{children}</>
      <ToastWrapper>
        {toasts.map((toast) => (
          <Toast key={toast.id} close={() => close(toast.id)} type={toast.type} progress={toast.progress}>
            {toast.message}
          </Toast>
        ))}
      </ToastWrapper>
      ,
    </ToastContext.Provider>
  );
});
