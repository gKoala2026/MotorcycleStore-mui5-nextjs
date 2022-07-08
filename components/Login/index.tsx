import { Box, Container, Input, Paper, Stack, TextField, Typography, Link, FormControl, FormHelperText, styled, } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useUserContext } from '../useUserContext'
import { UserContextType, IUser } from '../../context/userContext'


const ariaLabel = { 'aria-label': 'description' };

const Login:NextPage = () => {

    const router = useRouter()

    // userContext
    const {  user, saveUser, cleanUser } = useUserContext() as UserContextType

    const setLogin = (e:any) => {
        console.log('eee', e)
        const input = document.getElementById('email') as HTMLInputElement;
        console.log('qwe', input.value)
        const user : IUser = {
            id:1,
            name: input.value,
            taken:'',
            status:true
        }
        saveUser(user)
        router.push('/')
    
    }

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
        // <Box sx={{backgroundColor:'primary.main'}}>
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
                                <Input 
                                sx={{fontSize:'24px'}}
                                fullWidth={true}
                                inputProps={ariaLabel}
                                placeholder='Email'
                                id='email'
                                />
                                <FormControl>
                                    <Input 
                                    sx={{fontSize:'24px'}}
                                    fullWidth={true}
                                    inputProps={ariaLabel}
                                    placeholder='Password'
                                    />
                                    <FormHelperText id="my-helper-text" sx={{textAlign:'right'}}>
                                        Click <Link href='#' color='text.primary'> here </Link> in case you forget your password
                                    </FormHelperText>
                                </FormControl>
                                <Stack alignItems='center'>
                                <ButtonBox width='144px' height='43px' onClick={(e:any)=>setLogin(e)}>
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