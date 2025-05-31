import { Box, Typography, Avatar, Container } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

const TestimonialCard = ({ loading }) => {
  return (
    <Box className="homeTestimonial" sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h5" fontWeight={600} textAlign="center">
          <Box component="span" sx={{ borderLeft: "4px solid #f44336", pl: 1 ,fontSize : {xs:"1.2rem" , md:"1.6rem"}, fontWeight: 'bold' }}>
            Testimonials
          </Box>
        </Typography>

        <Box sx={{ position: "relative", mt: 6, px: 4 }}>

        {
            !loading ? ( 
            <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                  py: 2,
                }}
              >
                <div
                  className="testimonial-custom-next"
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
                  className="testimonial-custom-prev"
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
    
                {/* desktop */}
                <Swiper
                  speed={1100}
                  slidesPerView={4}
                  spaceBetween={40}
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  className="SwiperDesk"
                  navigation={{
                    nextEl: ".testimonial-custom-next",
                    prevEl: ".testimonial-custom-prev",
                  }}
                  style={{overflow : "visible"}}
                >
                  {[...Array(6)].map((_, idx) => (
                    <SwiperSlide key={idx} >
                      <Box
                        elevation={0}
                        key={idx}
                        sx={{
                          bgcolor: "#fff",
                          borderRadius: 2,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                          p: 3,
                          position: "relative",
                        }}
                      >
                        {/* Quote Icon Circle */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: -14,
                            left: 20,
                            width: 40,
                            height: 40,
                            bgcolor: "#0C4DA2",
                            color: "#fff",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 24,
                            fontWeight: "bold",
                          }}
                        >
                          “
                        </Box>
    
                        {/* Stars */}
                        <Box sx={{ mt: 3, mb: 1 }}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Typography
                              key={i}
                              component="span"
                              sx={{ color: "#FF6B6B", fontSize: 20 }}
                            >
                              ★
                            </Typography>
                          ))}
                        </Box>
    
                        {/* Testimonial Text */}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.6, mb: 3 }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                        </Typography>
    
                        {/* Profile */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Avatar
                            src="/images/user-avatar.jpg"
                            alt="Justus Menke"
                            sx={{ width: 40, height: 40 }}
                          />
                          <Box>
                            <Typography
                              variant="subtitle2"
                              fontWeight={600}
                              color="text.primary"
                            >
                              Justus Menke
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              CEO Eronaman
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
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
                    nextEl: ".testimonial-custom-next",
                    prevEl: ".testimonial-custom-prev",
                  }}
                >
                  {[...Array(6)].map(( _, idx)=>(
                      <SwiperSlide
                        key={idx}
                        style={{ display: "flex", justifyContent: "center" ,paddingTop : "14px" }}
                      >
                        <Box
                          elevation={10}
                          key={idx}
                          sx={{
                            minWidth: 320,
                            maxWidth: 340,
                            bgcolor: "#fff",
                            borderRadius: 2,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            p: 3,
                            position: "relative",
                          }}
                        >
                          {/* Quote Icon Circle */}
                          <Box
                            sx={{
                              position: "absolute",
                              top: -14,
                              left: 20,
                              width: 40,
                              height: 40,
                              bgcolor: "#0C4DA2",
                              color: "#fff",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 24,
                              fontWeight: "bold",
                            }}
                          >
                            “
                          </Box>
    
                          {/* Stars */}
                          <Box sx={{ mt: 3, mb: 1 }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Typography
                                key={i}
                                component="span"
                                sx={{ color: "#FF6B6B", fontSize: 20 }}
                              >
                                ★
                              </Typography>
                            ))}
                          </Box>
    
                          {/* Testimonial Text */}
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.6, mb: 3 }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                          </Typography>
    
                          {/* Profile */}
                          <Box
                            sx={{ display: "flex", alignItems: "center", gap: 2 }}
                          >
                            <Avatar
                              src="/images/user-avatar.jpg"
                              alt="Justus Menke"
                              sx={{ width: 40, height: 40 }}
                            />
                            <Box>
                              <Typography
                                variant="subtitle2"
                                fontWeight={600}
                                color="text.primary"
                              >
                                Justus Menke
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                CEO Eronaman
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </Box>):(
                <Box sx={{textAlign : "center"}}>Loading...</Box>
              )
        } 
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialCard;
