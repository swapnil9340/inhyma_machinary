import { Card, CardContent, CardMedia, Grid, Typography , Button, Box, CardActions} from '@mui/material';

import React from 'react'

const products = [
    {
      title: 'Vacuum machine',
      image: '/image 13.png',
      description: 'Learn about our efficient, compact vacuum sealers for food & devices.Learn about our efficient, compact vacuum sealers for food & devices.'
    },
    {
      title: 'Sealing Machine',
      image: '/image 13.png',
      description: 'Durable heat sealers and conveyor packaging machines for all sectors.'
    },
    {
      title: 'L sealer & tunnel Combo shrink systems for tight, Combo shrink systems for tight',
      image: '/image 13.png',
      description: 'Combo shrink systems for tight, tamper-proof seals.'
    },
    {
      title: 'L sealer & tunnel',
      image: '/ïnhyma header image 1.png',
      description: 'Combo shrink systems for tight, tamper-proof seals.'
    },
  ];

const Cards = () => {
  return (
    <Grid sx={{height : {xs:"50%" ,md:"80%"}}} alignContent={'center'} container spacing={1} >
      {products.map((prod, idx) => (
        <Grid item size={{xs:6 , md: 3}} key={idx} sx={{height : "100%"}}>
          <Card sx={{ background :{xs:"#fff" ,md:"none"} , display :"flex" ,flexDirection :"column" ,height : "100%" ,border : {xs:"1px solid #C9C9C9" ,md:"none"}   }} elevation={0}>
            <CardMedia
              component="img"
              image={prod.image}
              alt={prod.title}
              sx={{  objectFit : 'contain' ,p: 2 ,background :"none" ,border : {xs:"none" ,md: "2px solid #C9C9C9"}  ,mixBlendMode :"darken" ,height:{xs:"150px" , md:"200px"}}}
            />
            <CardContent sx={{display :"flex" ,flexDirection :"column" , justifyContent :"space-between" ,flex:"auto" }}>
              <Typography  fontWeight={600} sx={{WebkitLineClamp : 2 ,display: '-webkit-box' ,   WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' , color : "#606872" ,fontSize :"18px"}}>
                {prod.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ my: 1 ,WebkitLineClamp : 3 ,display: '-webkit-box' ,   WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' ,fontSize :"14px"   }}>
                {prod.description}
              </Typography>  
              <Button size="small" variant="contained"  sx={{ backgroundColor: '#2157a4' ,width :"fit-content"  , borderRadius : 0 , textTransform : "capitalize" ,fontSize : "16px " }}>
                View Products
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Cards