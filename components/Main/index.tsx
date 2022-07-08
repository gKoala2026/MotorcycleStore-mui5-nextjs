import { Paper, Stack, Typography, Link, styled } from '@mui/material'
import { Box, Container } from '@mui/system'
import { url } from 'inspector'
import type { NextPage } from 'next'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Main:NextPage = () => {
    
    const SlideBox = styled(Box)(({theme}) => ({

        backgroundSize:'100% 100%',
        height:'548px',


    }))

    return(
        <Box sx={{backgroundColor:'background.default', color:'text.primary'}}>
        <Container maxWidth={'xl'}>
            <Stack direction='row' sx={{background:"linear-gradient(90deg, #252C33 40%, rgba(37, 44, 51, 0) 60%), url('Versys-650-21.png')", backgroundRepeat:'no-repeat', backgroundPosition:'right'}} mt='90px' height='813px'>
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
            <Box>
                <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
                    <SlideBox sx={{background:"linear-gradient(90deg, rgba(205, 250, 253, 0.75) 0%, rgba(253, 253, 217, 0) 50%), url('slide-1.png')", backgroundSize:'100% 100%'}} color='primary.main'>
                        <Stack height="548px" textAlign='left' minWidth='500px' maxWidth='700px'direction="column" justifyContent="center"  spacing={5} ml="77px">
                            <Typography fontSize='55px'>
                                <b>GET READY FOR YOUR SUMMER RIDE</b>
                            </Typography>
                            <Typography fontSize='35px'>
                            Save yourself up to 20% off on your purchase this summer
                            </Typography>
                            <Typography textAlign='left' fontSize='25px'>
                            Valid until August 31, 2022
                            </Typography>
                        </Stack>                              
                    </SlideBox>
                    <SlideBox sx={{background:"linear-gradient(90deg, #252C33 0%, rgba(37, 44, 51, 0) 50%), url('slide-2.png')", backgroundSize:'100% 100%'}} color='text.secondary'>
                        <Stack height="548px" textAlign='left' minWidth='500px' maxWidth='700px'direction="column" justifyContent="center"  spacing={5} ml="77px">
                            <Typography fontSize='55px'>
                                <b>2022 Catalogue is available, check what’s new in our store</b>
                            </Typography>
                            <Stack alignItems='center' justifyContent='center' alignSelf='center'>
                                <Typography fontSize='25px' border='1px solid #FCF7D7' borderRadius='15px' px='30px' py='15px' sx={{cursor:"pointer"}}>
                                    <b>Download PDF</b>
                                </Typography>
                            </Stack>
                        </Stack>
                    </SlideBox>
                    <SlideBox sx={{background:"linear-gradient(90deg, #252C33 0%, rgba(37, 44, 51, 0) 50%), url('slide-3.png')", backgroundSize:'110% 100%'}} color='text.secondary'>
                        <Stack height="548px" textAlign='left' minWidth='500px' maxWidth='700px'direction="column" justifyContent="center"  spacing={5} ml="77px">
                            <Typography fontSize='55px'>
                                <b>Riding in winter time? Here’s a guide on safety riding during winter season</b>
                            </Typography>
                            <Stack alignItems='center' justifyContent='center' alignSelf='center'>
                                <Typography fontSize='25px' border='1px solid #FCF7D7' borderRadius='15px' px='30px' py='15px' sx={{cursor:"pointer"}}>
                                    <b>Learn More</b>
                                </Typography>
                            </Stack>
                        </Stack>
                    </SlideBox>
                </Carousel>
            </Box>
        </Container>
        </Box>
    )
}

export default Main