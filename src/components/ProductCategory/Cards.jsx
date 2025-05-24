import { Card, CardContent, CardMedia, Grid, Typography, Button, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import React from 'react'

const Cards = ({ filteredCards }) => {

  return (
    <Grid sx={{ height: { xs: "500px", md: "500px" } }} alignContent={'center'} container spacing={1} >

      {
        filteredCards.length > 0 ?
          <Swiper
            speed={1100}
            slidesPerGroup={1}
            slidesPerView={3}
            spaceBetween={40}
            // autoplay={{ delay: 2000 }}
            // navigation={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            centeredSlides={true}
            className="mySwiper mobSwiper"
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {filteredCards.map((prod, index) => (
              <SwiperSlide>
                <Card sx={{ background: { xs: "#fff", md: "none" }, display: "flex", flexDirection: "column", height: "100%", border: { xs: "1px solid #C9C9C9", md: "none" } }} elevation={0}>
                  <CardMedia
                    component="img"
                    image={prod?.images?.[0]?.url}
                    alt={prod?.images?.[0]?.alt}
                    sx={{ objectFit: 'contain', p: 2, background: "none", border: { xs: "none", md: "2px solid #C9C9C9" }, height: { xs: "150px", md: "200px" } }}
                  />
                  <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: "auto" }}>
                    <Typography fontWeight={600} sx={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', color: "#606872", fontSize: "18px" }}>
                      {prod?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ my: 1, WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: "14px" }}>
                      {prod?.description}
                    </Typography>
                    <Button size="small" variant="contained" sx={{ backgroundColor: '#2157a4', width: "fit-content", borderRadius: 0, textTransform: "capitalize", fontSize: "16px " }}>
                      View Products
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}


            <div
              className="custom-next"
              style={{
                position: "absolute",
                top: "36%",
                cursor: "pointer",
                right: "0.5%",
                zIndex: 10,
                filter: "drop-shadow(2px 2px #c3c3c3)"
              }}
            >
              <FaCircleChevronRight size={30} fill='#2157a4' />
            </div>
            <div
              className="custom-prev"
              style={{
                position: "absolute",
                top: "36%",
                cursor: "pointer",
                zIndex: 10,
                left: "0.5%",
                filter: "drop-shadow(2px 2px #c3c3c3)"
              }}
            >
              <FaCircleChevronLeft size={30} fill='#2157a4' />
            </div>

          </Swiper>
          :
          <Box sx={{ width: "100%" }} >
            <Typography sx={{ textAlign: "center" }}>
              No Product Found
            </Typography></Box>
      }

    </Grid>
  )
}

export default Cards