import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CommonBanner = ({ bannerContent }) => {
  const { heading1, heading2, backgroundImg ,buttons } = bannerContent;
  return (
    <Box
      sx={{
        position: "relative",
        py: {xs:5 , md : 10},
        px: 2,
        display: "grid",
        placeItems: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          textAlign: {
            xs: "center",
            md: "center",
          },
          placeItems: "center",
          width: { md: "80%" },
          zIndex: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: backgroundImg ? "#fff" : "#53657D", fontSize: "5vmin" }}
        >
          {heading1}
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: backgroundImg ? "#fff" : "#53657D", fontSize: "3vmin" }}
        >
          {heading2}
        </Typography>
      </Box>

      {buttons && (
        <Box sx={{ zIndex: 3 }}>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
          >

            {buttons.map((btn)=>{
               return <Button
                key={btn}
                variant="contained"
                sx={{ bgcolor: "#1955A6", color: "#fff", px: 4 ,borderRadius : 0, textTransform : "capitalize" }}
              >
                {btn.btnName }
              </Button>
            })}
          </Stack>
        </Box>
      )}

      {backgroundImg && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`,
              zIndex: 2,
              position: "absolute",
            }}
          ></Box>
      )}

      <Box>
        <Image
          src={backgroundImg ?? "/Rectangle 1.png"}
          layout="fill"
          objectFit="cover"
          style={{ zIndex: 1 }}
          alt="homebanner-mobile"
          priority
          loading="eager"
          decoding="async"
          sizes="(max-width: 600px) 600px , 600px"
        />
      </Box>
    </Box>
  );
};

export default CommonBanner;
