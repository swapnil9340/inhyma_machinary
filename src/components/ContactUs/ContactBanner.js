import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ContactBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/Rectangle 1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 5,
        px: 2,
        paddingTop: "20px",
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
          width: { md: "95%" },
        }}
      >
        <Typography variant="h4" sx={{ color: "#53657D", fontSize: "5vmin" }}>
          Let’s Connect – We’re Here to Help
        </Typography>
        <Typography variant="h4" sx={{ color: "#53657D", fontSize: "4vmin" }}>
          Have questions about our packaging machines or need a customized
          solution? Reach out to our team - we’re just a message or call away.
        </Typography>
      </Box>
      <Box>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            sx={{ bgcolor: "#1955A6", color: "#fff", px: 4 }}
          >
            Call Us
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#1955A6", color: "#fff", px: 4 }}
          >
            Send An Enquiry
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactBanner;
