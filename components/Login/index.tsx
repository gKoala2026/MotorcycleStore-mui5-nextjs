import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { logIn } from '../../services/auth.service'

import { UserContextType, IUser, useUserContext } from '../../context/userContext'
import React, { useState, useEffect, useRef } from 'react';
import validator from 'validator';

import { Box, Container, Input, Stack, Typography, Link, FormControl, FormHelperText, styled, IconButton, } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';




const ariaLabel = { 'aria-label': 'description' };

interface State {
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const Login:NextPage = () => {

    // const router = useRouter()

    // userContext
    const {  user, saveUser } = useUserContext() as UserContextType

    const inputEmail = useRef()
    const inputPassword = useRef()
    const [values, setValues] = useState<State>({
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [isEmail, setIsEmail] = useState(true)
    const [isPwd, setIsPwd] = useState(true)
    const [isErr, setIsErr] = useState('')

    interface ILogin {
        email:string;
        password:string;
    }
    function setLogin() {
        setIsErr('')
        const userEmail:any = inputEmail.current
        const userPassword:any = inputPassword.current
        const data : ILogin = {
            email: userEmail.value,
            password: userPassword.value,
        }
        if (validator.isEmail(data.email)==false) {
            
            if (data.email=='') {
                setIsErr('Please enter email address.')
            }
            else setIsErr('Please enter a valid email address.')
        }
        else if (data.password.length<6 || data.password.length>20) {
            if (data.password.length==0) {
                setIsErr('Please enter password.')
            }
            else setIsErr('The password must be between 6-20 characters long.')
        }
        else {
            let success = logIn(data)
            console.log('succ', success)
            return
        }
        return
    }

    useEffect(() => {
        localStorage.setItem('id', JSON.stringify(user.id))
        console.log('kkk', localStorage.getItem('id'))
    },[saveUser])
    
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

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleChange = (event:any)  => {
        setIsEmail(validator.isEmail(event.target.value))
        console.log(isEmail)
        if(event.target.value=='') setIsEmail(true)
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    return (
        <Container sx={{ marginTop:'100px', position:'relative'}} maxWidth={'lg'}>
            <Box sx={{ background:"url('bg-login.png')", backgroundSize:"100% 100%", backgroundPosition:'left'}} width= {900} height= {650}>
                <Box sx={{ background:"rgba(37, 44, 51, 0.25)", backgroundPosition:'left'}} width= {900} height= {650}> 
                    <Stack sx={{backgroundColor:'white', borderRadius:"85px 0px 0px 85px"}} width={650} height={650} position='absolute' right='0px' alignItems='center' justifyContent='center' direction='row'>
                        <Container maxWidth='sm'>
                            <Stack spacing={5}>
                                <Stack>
                                    <Typography fontSize={32}>
                                        Login
                                    </Typography>
                                    <Typography fontSize={18}>
                                        New visitor? <Link href='#' color='text.primary'> Create your account</Link> here
                                    </Typography>
                                </Stack>
                                <FormControl error={isEmail ? false : true}>
                                    <Input 
                                    inputRef={inputEmail}
                                    type='email'
                                    sx={{fontSize:'24px'}}
                                    fullWidth={true}
                                    inputProps={ariaLabel}
                                    placeholder='Email'
                                    id='email'
                                    onChange={(e) => handleChange(e)}
                                    />
                                    {/* <FormHelperText id="component-error-text">
                                        input email
                                    </FormHelperText> */}
                                </FormControl>
                                <FormControl error={isPwd ? false : true}>
                                    <Input 
                                    inputRef={inputPassword}
                                    type={values.showPassword ? 'text' : 'password'}
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
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    />
                                    <FormHelperText id="my-helper-text" sx={{textAlign:'right'}}>
                                        Click <Link href='#' color='text.primary'> here </Link> in case you forget your password
                                    </FormHelperText>
                                </FormControl>
                                <Stack alignItems='center'>
                                    <Typography color='red' display={'block'}>{isErr}</Typography>
                                    <ButtonBox width='144px' height='43px' onClick={()=>setLogin()}>
                                        <Typography
                                            variant="h6"
                                            fontSize='20px'
                                        >
                                            <b>Login</b>
                                        </Typography>
                                    </ButtonBox> 
                                </Stack>
                            </Stack>
                        </Container>

                    </Stack>
                </Box>
            </Box>
        </Container>
        // </Box>
    )
}

export default Login