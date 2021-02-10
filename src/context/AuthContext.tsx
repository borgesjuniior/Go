import { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string,
  user: object;
}
interface AuthContextData {
  user: object;
  sinInM(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

  const [ data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if(token && user) {
      return {
        token,
        user: JSON.parse(user)
      }
    }

    return {} as AuthState;
  })

  const sinInM = useCallback(async ({email, password}) => {

    const response = await api.post('sessions', { //Acessa a rota http://localhost/sessions passando os valores
      email,
      password
    })

    //console.log(response.data);

    const { token, user } = response.data

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({token, user}); //Salva o token e o usuário no estado 'data'

  }, []);



  return (
    <AuthContext.Provider value={{user: data.user, sinInM}}>
      {children}
    </AuthContext.Provider>
  )
};

function  useAuth() {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth};
