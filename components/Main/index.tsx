import { Paper, Stack, Typography, Link } from '@mui/material'
import { Box, Container } from '@mui/system'
import { url } from 'inspector'
import type { NextPage } from 'next'

const Main:NextPage = () => {
    return(
        <Box sx={{backgroundColor:'background.default', color:'text.primary'}}>
        <Container maxWidth={'xl'}>
            <Box sx={{background:"right no-repeat url('Versys-650-21.png')"}}>
                <Stack direction='row' position='relative' sx={{backgroundImage:'linear-gradient(89.83deg, #252C33 40%, rgba(37, 44, 51, 0) 60%)'}} mt='90px' height='813px'>
                    <Stack minWidth='300px' maxWidth='450px' justifyContent='center' spacing={10}>
                        <Typography fontSize='34px'>
                            <b>Find your dream motorcycle here!</b>
                        </Typography>
                        <Typography fontSize='20px'>
                        We have 100+ collections of new and used motorcycles from big names such as Honda, Kawasaki, Yamaha, Ducati, etc. We will give the best price you can get and great quality motorcycle.
                        </Typography>
                        <Link href='/' underline='always' color='text.primary'>
                            <Typography fontSize='24px' textAlign='center'>
                                Let’s find one
                            </Typography>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Container>
        </Box>
    )
}

export default Main