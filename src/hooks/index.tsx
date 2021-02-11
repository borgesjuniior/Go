import React from 'react';
import { AuthProvider } from '../hooks/AuthContext';
import { ToastProvider } from '../hooks/ToastsContext';

const AppProvider: React.FC = ({children}) => {
  return (
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
    )

};

export default AppProvider;
