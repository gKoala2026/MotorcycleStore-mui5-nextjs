
import { createTheme } from '@mui/material/styles';

import "@fontsource/Inter"

const theme = createTheme({
    palette: {
        common:{
          black:'#000000',
          white:'#ffffff',
        },
        mode: 'light',
        primary: {
            main: '#252C33',
            dark: '#F6F6F6',
            light: '#FCF7D7',
            contrastText: '#D3AF37',
        },
        secondary:{
            main: '#252C33',
            dark: '#252C33',
            light: '#252C33',
            contrastText: '#252C33',
        },
        text:{
            primary: '#D3AF37',
            secondary: '#252C33'
        },
        background:{
            default:'#252C33',
            paper:'#D3AF37',
        },
        action:{
            selectedOpacity:0.08,
        }
    },
    typography:{
        fontFamily:'Inter',
    },
});
export default theme