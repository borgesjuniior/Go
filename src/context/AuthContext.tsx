import { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  sinInM(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

  const sinInM = useCallback(async ({email, password}) => {

    const response = await api.post('sessions', { //Acessa a rota http://localhost/sessions passando os valores
      email,
      password
    })

    console.log(response.data)

  }, []);

  return (
    <AuthContext.Provider value={{name: 'junior', sinInM}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
