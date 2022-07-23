import '../styles/globals.css'
import type { AppProps } from 'next/app'

import * as React from 'react';
import theme from '../styles/theme'
import { ThemeProvider } from '@mui/material/styles';
import { UserContext, IUser, UserContextDefaultValues } from '../context/userContext';
import UserApi from '../services/User';

function MyApp({ Component, pageProps }: AppProps) {

  const [users, setUsers] = React.useState<IUser>(UserContextDefaultValues.list);
  const pushUsers = (newUser: IUser) => {
      setUsers(newUser);
  };
  
  const [token, setToken ] = React.useState('')
  React.useEffect(() => {
    const saved:string = JSON.stringify(localStorage.getItem('token'))
    setToken(saved)
    UserApi.getUser((res: any) => {
      if(res) setUsers(res);
      else setUsers(UserContextDefaultValues.list)
    }, token)
  }, []);

  return (
    <UserContext.Provider value={{list: users, push: pushUsers}}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default MyApp
