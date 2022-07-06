
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
            light: '#D3AF37',
            contrastText: '#D3AF37',
        },
        secondary:{
            main:'#F6F6F6',
        },
        text:{
            primary: '#D3AF37',
            secondary: '#D3AF37'
        },
        background:{
            default:'#FDFCFC',
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