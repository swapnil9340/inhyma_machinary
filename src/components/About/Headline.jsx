import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import tickImg from "../../../public/tick.svg";

const Headline = () => {
  return (
    <Container disableGutters sx={{marginTop :"20px"}}>
        <Box sx={{display : "flex",alignItems : 'center' ,justifyContent : 'center' ,gap :"10px"}}>
            <Image src={tickImg} style={{height : "auto" , width :"30px"}} />
            <Typography sx={{color :"#606872" ,fontSize :  {xs:"20px" ,md:"36px"}}}>Driven by Purpose. Inspired by Innovation.
            </Typography>
        </Box>
    </Container>
  )
}

export default Headline;