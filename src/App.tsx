import React from 'react';
import GlobalStyle from './styles/global';
import SingIn from './pages/SingIn';
//import SingUp from './pages/SingUp';
import Toast from './components/ToastContainer'
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <>

    <AuthProvider>
      <SingIn />
    </AuthProvider>
    <Toast/>

    <GlobalStyle />

    </>
  );
}

export default App;
