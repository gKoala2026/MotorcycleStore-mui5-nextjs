import '../styles/globals.css'
import type { AppProps } from 'next/app'

import theme from '../styles/theme'
import { ThemeProvider } from '@mui/material/styles';
import UserProvider from '../context/userContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
