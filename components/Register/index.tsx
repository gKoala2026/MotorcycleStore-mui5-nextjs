import { NextPage } from 'next';
import { useRouter } from 'next/router'
import * as React from 'react';

import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, IconButton, Input, InputAdornment, Link, Stack, styled, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import UserApi from '../../services/User';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const ariaLabel = { 'aria-label': 'description' };

const Register:NextPage = () => {

    const router = useRouter()

    const [isErr, setIsErr] = React.useState(String)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setIsErr('')
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log(userData);
        if (userData.password!=data.get('rpassword')) {
            setIsErr('rpassword')
            return;
        }
        
        UserApi.create(
            (res:any)=>{
                if(res=='success'){
                        router.push('/Login');
                }
                else {
                        router.push('/');
                }
            }, userData
        )
        console.log('userData');
    };
    const [showPWD, setShowPWD] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPWD(!showPWD);
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
  

    return (
    
    <Container sx={{ marginTop:'100px', position:'relative'}} maxWidth={'lg'}>
        <Box sx={{ background:"url('bg-login.png')", backgroundSize:"100% 100%", backgroundPosition:'left'}} width= {900} height= {650}>
            <Box sx={{ background:"rgba(37, 44, 51, 0.25)", backgroundPosition:'left'}} width= {900} height= {650}> 
                <Stack sx={{backgroundColor:'white', borderRadius:"85px 0px 0px 85px"}} width={650} height={650} position='absolute' right='0px' alignItems='center' justifyContent='center' direction='row'>

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    >
                    <Stack color="primary.main">
                        <Typography fontSize={32}>
                        Create an account
                        </Typography>
                        <Typography fontSize={18}>
                        Already have an account? <Link href='/Login' color='text.primary'> Login</Link> here
                        </Typography>
                    </Stack>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Input 
                            required={true}
                            name="name"
                            type='text'
                            fullWidth
                            sx={{fontSize:'24px'}}
                            inputProps={ariaLabel}
                            placeholder='Full Name'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                            required={true}
                            autoFocus={true}
                            name="email"
                            type="email"
                            sx={{fontSize:'24px'}}
                            fullWidth={true}
                            inputProps={ariaLabel}
                            placeholder='Email'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                            required
                            name="password"
                            type={showPWD ? 'text' : 'password'}
                            sx={{fontSize:'24px'}}
                            fullWidth={true}
                            inputProps={ariaLabel}
                            placeholder='Password'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPWD ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                            error={isErr=='rpassword' ? true : false}
                            name="rpassword"
                            type={showPWD ? 'text' : 'password'}
                            sx={{fontSize:'24px'}}
                            fullWidth={true}
                            inputProps={ariaLabel}
                            placeholder='Confirm Password'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPWD ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I agree to store’s Terms and Conditions"
                            />
                        </Grid>
                        </Grid>
                        <Stack alignItems='center'>
                        <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Register Account
                        </Button>
                        </Stack>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
                </Stack>
            </Box>
        </Box>
    </Container>
    );
}

export default Register