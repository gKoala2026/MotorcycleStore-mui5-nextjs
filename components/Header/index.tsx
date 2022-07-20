import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { AppBar, Box, Container, Menu, MenuItem, Stack, styled, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React, { cloneElement, useState, useEffect, useContext, } from 'react';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import { UserContext } from '../../context/userContext'


const navItems = [ 
    'Home',
    ['Motorcycles'],
    'Our Blog',
    'Contact Us'
]
const dropdownMenu:any ={
    'Motorcycles': [ 'Showroom', 'Services', 'Parts', 'Test Drive' ],
}

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}
function ElevationScroll (props : Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
    
    if (trigger==true) {
      const clone = cloneElement(children, {
        elevation: 4,
        // 'color':'transparent',
      });
      return clone
    }
    else {
      const clone = cloneElement(children, {
        elevation: 0,
      });
      return clone
    }
}

const Header:NextPage = () => {

    const router = useRouter()
    const userContext = useContext(UserContext)
    
// const [id, setId ] = useState('')
// useEffect(() => {
//     const saved:string = JSON.stringify(localStorage.getItem('id'))
//     console.log('sef', saved)
//     setId(JSON.parse(saved))
//     console.log('log', id)
// }, [])

    function removeUser() {
        localStorage.setItem('email', '')
        console.log('123123', JSON.stringify(localStorage.getItem('email')))
        router.push('/');
    }
    // style
    const MenuBar = styled(Stack)(({theme}) => ({
        [theme.breakpoints.up('xs')]: {
            display:'none',
        },
        [theme.breakpoints.up('md')]: {
            display:'contents',
        },
        '> div': {
            height:'87px',
            padding:'0 25px 0 25px',
            border:'0px',
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            backgroundColor:'inherit',
            '&:hover': {
                backgroundColor: '#D3AF37',
                color: '#252C33'
              },
            cursor:'pointer',
        },
    }));
    const ButtonBox = styled(Box)(({theme}) => ({
        marginLeft:'50px',
        borderRadius:'10px', 
        backgroundColor:theme.palette.background.paper, 
        color:theme.palette.primary.main,  
        justifyContent:'center', 
        display:'flex', 
        alignItems:'center',
        align:'left',
        cursor:'pointer',
    }))

    return (
        <ElevationScroll>
            <AppBar >
                <Container maxWidth='xl'>
                <Toolbar>
                    <Stack sx={{ flexGrow: 1 }} py='25px'>
                        <Typography width='172px'
                            variant="h6"
                            fontSize='26px'
                        >
                            <b>two wheelers</b>
                        </Typography>
                    </Stack>
                    <MenuBar direction='row'>
                    {navItems.map((item, index) => {
                        if(typeof(item)=='string') return (
                            <Stack 
                            key={index} 
                            sx={{ color: 'inherit', textDecoration: 'none', }}
                            >
                                <Typography fontSize='20px' lineHeight='24.2px'>
                                    {item}
                                </Typography>
                            </Stack>
                            )
                        else return (
                            <PopupState variant="popover" popupId="demo-popup-menu" key={index}>
                                {(popupState) => (
                                <>
                                    {/* <Box {...bindTrigger(popupState)} > */}
                                        <Stack {...bindTrigger(popupState)} direction='row' alignItems='center'>
                                            <Typography fontSize='20px' lineHeight='24.2px'>
                                            {item[0]}
                                            </Typography>
                                            <KeyboardArrowDownIcon fontSize='large'/>
                                        </Stack>
                                    {/* </Box> */}
                                    <Menu {...bindMenu(popupState)}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                    }}
                                    sx={{  
                                        '& .MuiPaper-root': {
                                        minWidth: 180,
                                        color:'#D3AF37',
                                        background:'#252C33'
                                        },
                                    }}
                                    >
                                        {
                                            dropdownMenu[item[0]].map((i:string, indexM:number) => (
                                                <MenuItem key={indexM} onClick={popupState.close}>
                                                {i}
                                                </MenuItem>
                                            ))
                                        }
                                    </Menu>
                                    </>
                                )}
                            </PopupState>

                            )
                        }
                    )}
                    </MenuBar>
                    { userContext.list.email == '' &&
                        <ButtonBox width='144px' height='43px' onClick={() => router.push('/Login')}>
                            <Typography
                                variant="h6"
                                fontSize='20px'
                            >
                                <b>Login</b>
                            </Typography>
                        </ButtonBox> 
                        ||
                        <Stack width='144px' height='43px' direction='row' alignItems='center' justifyContent="center" ml="50px" sx={{cursor:'pointer'}} onClick={() => removeUser()}>
                            <img src='Ellipse2.png' />
                            <Typography fontSize='24px'>{userContext.list.username}</Typography>
                        </Stack>
                    }
                  {/* mobile menu */}
                </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll >
    )
}

export default Header