import type { NextPage } from 'next'

import Layout from '../components/Layout';
import Main from '../components/Main';

import theme from '../styles/theme'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  )
}

export default Home
