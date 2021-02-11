import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4'
import ToastContainer from '../components/ToastContainer';


interface ToastContextData {
  addToast(message: ToastsMessages): void;
  removeToast(): void;
}

export interface ToastsMessages {
  id?: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;

}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({children}) => {
  const [ messages, setMessages ] = useState<ToastsMessages[]>([]);


  const addToast = useCallback(({ title, type, description}: Omit<ToastsMessages, 'id'>) => {
    const id = uuid();

    const Toast = {
      id,
      title,
      type,
      description
    }

    setMessages([...messages, Toast])

  }, [messages])
  const removeToast = useCallback(() => {}, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )

}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error('Use toast must be used within a ToastProvider')
  }

  return context;
}

export { ToastProvider, useToast};
