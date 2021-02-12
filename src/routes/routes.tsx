import React from 'react';
import { RouteProps, Route as ReactDOMRoutes, Redirect } from 'react-router-dom';
import { useAuth  } from '../hooks/AuthContext'


interface RouterPropsFC extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterPropsFC> = ({ isPrivate = false, component: Component }, ...rest) => {
  const  {user } = useAuth();
  console.log(isPrivate);
  /**
   * Casos para o redirecionamento de usuário
   * isPrivate && user
   * true/true: ok
   * true/false: redirect para o login
   * false/true: redirect para o dashboard
   * false/false: ok
   */

  return (
    <ReactDOMRoutes
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (< Component/>) : ( <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard',
        state: { from: location }
      }} /> )
      }}
    />
  )
}

export default Route;
