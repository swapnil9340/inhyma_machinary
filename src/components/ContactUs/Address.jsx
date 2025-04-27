import { Box, Typography, Stack, IconButton, Link } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { Twitter, Instagram, YouTube } from "@mui/icons-material";
import { LiaFacebookF } from "react-icons/lia";

export default function Address() {
  return (
    <Box p={4} maxWidth="600px" margin="auto">
      <Typography variant="h6" sx={{ color: "#53657D" }}>
        Registered Office -{" "}
        <Box component="span" fontWeight="bold">
          Mumbai
        </Box>
      </Typography>

      <Stack direction="row" alignItems="flex-start" spacing={1} mt={2}>
        <LocationOn
          sx={{
            background: "#DEECFF",
            color: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <Typography variant="body2" sx={{ color: "#53657D" }}>
          Office No.421, 4th Floor, Lodha Supremus - II, Wagle Road No.22, Next
          to New Passport Office, Wagle Estate, Thane West - 400604
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1} mt={2}>
        <Phone
          sx={{
            background: "#DEECFF",
            color: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <Typography variant="body2" sx={{ color: "#53657D" }}>
          +91 22-48017688 / +91 83558 96311
        </Typography>
      </Stack>

      {/* Chennai Warehouse */}
      <Typography variant="h6" mt={4} sx={{ color: "#53657D" }}>
        Chennai Warehouse -
      </Typography>

      <Stack direction="row" alignItems="flex-start" spacing={1} mt={2}>
        <LocationOn
          sx={{
            background: "#DEECFF",
            color: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <Typography variant="body2" sx={{ color: "#53657D" }}>
          Stockarea W304, 461/2C, Puzhal Village, Puzhal Ambattur Road, Chennai
          - 600066
        </Typography>
      </Stack>

      {/* Email */}
      <Typography variant="h6" mt={4} sx={{ color: "#53657D" }}>
        Chennai Warehouse -
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} mt={2}>
        <Email
          sx={{
            background: "#DEECFF",
            color: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <Link
          href="mailto:contact@inhymasolutions.com"
          underline="hover"
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#53657D",
          }}
        >
          contact@inhymasolutions.com
        </Link>
      </Stack>

      {/* Social Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        <IconButton
          sx={{
            background: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <LiaFacebookF color="#fff" />
        </IconButton>
        <IconButton
          sx={{
            background: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <Twitter sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton
          sx={{
            background: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <Instagram sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton
          sx={{
            background: "#1955A6",
            boxSizing: "content-box",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <YouTube sx={{ color: "#fff" }} />
        </IconButton>
      </Stack>
    </Box>
  );
}
