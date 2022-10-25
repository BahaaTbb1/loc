/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { createContext } from 'react';

interface ToastContextData {
  open: (message: string | React.ReactNode, type: 'correct' | 'wrong' | 'waiting', progress: number) => void;
}

const defaultOpen = (message: string | React.ReactNode, type: 'correct' | 'wrong' | 'waiting', progress: number) => {
  // eslint-disable-next-line no-console
  console.log(message, type, progress);
};
export const ToastContext = createContext<ToastContextData>({
  open: defaultOpen
});
