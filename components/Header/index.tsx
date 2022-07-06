
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Button, Menu, MenuItem, MenuProps, Stack, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { Box, Container } from '@mui/system';
import type { NextPage } from 'next'
import React, { cloneElement, useState } from 'react';



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

const navItems = [ 
    'Home',
    ['Motorcycles'], 
    'Our Blog',
    'Contact Us'
]

const dropdownMenu:any ={
    'Motorcycles': [ 'Showroom', 'Services', 'Parts', 'Test Drive' ],
}

const Header:NextPage = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props: MenuProps) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
            />
        ))(({ theme }) => ({
            '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: '16px',
            minWidth: 180,
            color:'rgb(55, 65, 81)',
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: 'text.secondary',
                marginRight: '24px',
                },
                '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
                },
            },
            },
        }));

    return (
        <ElevationScroll>
            <AppBar sx={{ py:'0px' }}>
                <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        fontSize='26px'
                        sx={{ flexGrow: 1 }}
                    >
                        <b>two wheelers</b>
                    </Typography>
                    <Stack display= {{ xs: 'none', sm: 'contents' }} direction='row'>
                    {navItems.map((item, index) => {
                        if(typeof(item)=='string') return (
                            <Box component='a' href='/' key={index} sx={{ color: 'inherit', textDecoration: 'none', }}>
                                <Typography fontSize='20px' lineHeight='24.2px' padding='25px'>
                                    {item}
                                </Typography>
                            </Box>
                            )
                        else return (
                            <>
                            <Box component='a' key={index} href='/'
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ color: 'inherit', textDecoration: 'none', }}
                            >
                                <Typography fontSize='20px' lineHeight='24.2px' padding='25px'>
                                {item[0]}
                                </Typography>
                            </Box>
                            
                            <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            >
                                {
                                    dropdownMenu[item[0]].map((i:string, indexM:number) => (
                                        <MenuItem key={indexM} onClick={handleClose} disableRipple>
                                        {i}
                                        </MenuItem>
                                    ))
                                }
                            </StyledMenu>
                            </>
                            )
                        }
                    )}
                    </Stack>
                  
                  {/* mobile menu */}

  
                </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll >
    )
}

export default Header