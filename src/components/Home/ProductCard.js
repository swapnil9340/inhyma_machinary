import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

const ProductCard = ({ allProducts }) => {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const amount = 220;
      container.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const handleNavigate = (item) => {
    router.push(`/product_description/${item._id}`);
  };

  return (
    <Box className="topMachine" sx={{ backgroundColor: "#E7F4FF", py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h5" fontWeight={600} textAlign="center">
          <Box component="span" sx={{ borderLeft: "4px solid #f44336", pl: 1 }}>
            Top Performing Machines
          </Box>
        </Typography>

        <Box sx={{ position: "relative", mt: 5, px: 4 }}>
          {/* Scroll Buttons */}
          {/* <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-2%",
              transform: "translateY(-50%)",
              zIndex: 1,
              bgcolor: "#fff",
              boxShadow: 2,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-2%",
              transform: "translateY(-50%)",
              zIndex: 1,
              bgcolor: "#fff",
              boxShadow: 2,
            }}
          >
            <ChevronRightIcon />
          </IconButton> */}

          <div
            className="custom-next-1"
            style={{
              position: "absolute",
              top: "46%",
              cursor: "pointer",
              right: "-0.5%",
              zIndex: 10,
              filter: "drop-shadow(2px 2px #c3c3c3)",
            }}
          >
            <FaCircleChevronRight size={30} fill="#2157a4" />
          </div>
          <div
            className="custom-prev-1"
            style={{
              position: "absolute",
              top: "46%",
              cursor: "pointer",
              zIndex: 10,
              left: "-0.5%",
              filter: "drop-shadow(2px 2px #c3c3c3)",
            }}
          >
            <FaCircleChevronLeft size={30} fill="#2157a4" />
          </div>

          {/* Scrollable Product Cards */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              pb: 1,
            }}
          >
            
            {/* desktop */}
            <Swiper
              speed={1100}
              slidesPerView={5}
              spaceBetween={40}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="SwiperDesk"
              navigation={{
                nextEl: ".custom-next-1",
                prevEl: ".custom-prev-1",
              }}
            >
              {allProducts.slice(0, 10).map((item, index) => (
                <SwiperSlide key={index}>
                  <Card
                    key={index}
                    elevation={0}
                    sx={{
                      flex: "0 0 auto",
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height :"100%"
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "center", pt: 2 }}
                    >
                      <Image
                        src={item?.images?.[0]?.url}
                        alt={item.name}
                        width={180}
                        height={140}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        sx={{ color: "#0C4DA2", fontSize: "16px", mb: 1 ,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item?.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#555", fontSize: "12px", mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                         }}

                      >
                        {item?.description}
                      </Typography>

                      <Box sx={{ mt: "auto" }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: "#0C4DA2",
                            textTransform: "none",
                            fontSize: "14px",
                          }}
                          onClick={() => handleNavigate(item)}
                        >
                          View Product
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* mobile */}
            <Swiper
              speed={1100}
              slidesPerView={1}
              spaceBetween={40}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="SwiperMob"
              navigation={{
                nextEl: ".custom-next-1",
                prevEl: ".custom-prev-1",
              }}
            >
              {allProducts.slice(0, 10).map((item, index) => (
                <SwiperSlide key={index} style={{display : "flex" , justifyContent : "center"}}>
                  <Card
                    key={index}
                    elevation={0}
                    sx={{
                      flex: "0 0 auto",
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height :"100%",
                      width : "85%"
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "center", pt: 2 }}
                    >
                      <Image
                        src={item?.images?.[0]?.url}
                        alt={item.name}
                        width={180}
                        height={140}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        sx={{ color: "#0C4DA2", fontSize: "16px", mb: 1 ,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item?.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#555", fontSize: "12px", mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                         }}

                      >
                        {item?.description}
                      </Typography>

                      <Box sx={{ mt: "auto" }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: "#0C4DA2",
                            textTransform: "none",
                            fontSize: "14px",
                          }}
                          onClick={() => handleNavigate(item)}
                        >
                          View Product
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCard;
