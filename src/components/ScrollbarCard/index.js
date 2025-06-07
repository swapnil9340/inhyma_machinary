import { Box, Typography, Card, CardContent, CircularProgress } from "@mui/material";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";


export default function CategoryCarousel({
  selected,
  setSelected,
  categories,
  loading
}) {

  return (
    <Box className="homeCategoryScroll">
      <Typography variant="h5" fontWeight={600} textAlign="center">
        <Box
          component="span"
          sx={{ borderLeft: "4px solid #f44336", pl: 1,  fontWeight: 'bold',  fontSize : {xs:"1.2rem" , md:"1.6rem"},}}
        >
          Product Categories
        </Box>
      </Typography>
      <Box sx={{ position: "relative", px: 2, py: 4 }}>
       {
         !loading ? (
          <Box
          sx={{
            display: "flex",
            gap: 2,
            px: 4,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <div
            className="custom-next-2"
            style={{
              position: "absolute",
              top: "40%",
              cursor: "pointer",
              right: "0.5%",
              zIndex: 10,
              filter: "drop-shadow(2px 2px #c3c3c3)",
            }}
          >
            <FaCircleChevronRight size={30} fill="#2157a4" />
          </div>
          <div
            className="custom-prev-2"
            style={{
              position: "absolute",
              top: "40%",
              cursor: "pointer",
              zIndex: 10,
              left: "0.5%",
              filter: "drop-shadow(2px 2px #c3c3c3)",
            }}
          >
            <FaCircleChevronLeft size={30} fill="#2157a4" />
          </div>
          {/* mobile */}
          <Swiper
            speed={1100}
            slidesPerView={4}
            spaceBetween={40}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="SwiperDesk"
            navigation={{
              nextEl: ".custom-next-2",
              prevEl: ".custom-prev-2",
            }}
          >
            {categories.map((cat ,index) => (
              <SwiperSlide key={index}>
                <Card
                  elevation={0}
                  key={cat.value}
                  onClick={() => setSelected(cat)}
                  sx={{
                    minWidth: 200,
                    flexShrink: 0,
                    cursor: "pointer",
                    textAlign: "center",
                    bgcolor:
                      selected?.name === cat?.name ? "#216ACC" : " #fff",
                    transition: "0.3s",
                  }}
                >
                  <CardContent
                    sx={{
                      bgcolor:
                        selected?.name === cat?.name ? "#216ACC" : " #fff",
                      color: selected?.name === cat?.name && "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      paddingBottom: "10px !important",
                    }}
                  >
                    <Image
                      src={cat?.image}
                      alt={cat.label}
                      height={50}
                      width={50}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Typography fontWeight={500} fontSize={"14px"}>
                      {cat?.name}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
           
           {/* desktop */}
          <Swiper
            speed={1100}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="SwiperMob"
            navigation={{
              nextEl: ".custom-next-2",
              prevEl: ".custom-prev-2",
            }}
          >
            {categories.map((cat ,index) => (
              <SwiperSlide key={index}>
                <Card
                  elevation={0}
                  key={cat.value}
                  onClick={() => setSelected(cat)}
                  sx={{
                    minWidth: 200,
                    flexShrink: 0,
                    cursor: "pointer",
                    textAlign: "center",
                    bgcolor:
                      selected?.name === cat?.name ? "#216ACC" : " #fff",
                    transition: "0.3s",
                  }}
                >
                  <CardContent
                    sx={{
                      bgcolor:
                        selected?.name === cat?.name ? "#216ACC" : " #fff",
                      color: selected?.name === cat?.name && "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      paddingBottom: "10px !important",
                    }}
                  >
                    <Image
                      src={cat?.image}
                      alt={cat.label}
                      height={50}
                      width={50}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Typography fontWeight={500} fontSize={"14px"}>
                      {cat?.name}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
         ) : (
          <Box sx={{display:"flex" , justifyContent:"center"}}> <CircularProgress /></Box>
         )
       }
      </Box>
    </Box>
  );
}
