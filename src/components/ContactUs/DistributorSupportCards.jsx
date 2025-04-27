import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public"; // globe + handshake style
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic"; // headset icon
import headPhoneIcon from "../../../public/headphone.svg";
import globaHandIcon from "../../../public/globaHand.svg";
import Image from "next/image";

export default function DistributorSupportCards() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: 10 }}>
      <Grid container spacing={6}>
        {/* Card 1 */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card
            variant="outlined"
            sx={{
              backgroundColor: "#F1F7FF",
              height: "100%",
              borderColor: "#c5d0e6",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                paddingX: { xs: "20px", md: "40px" },
                paddingY: { xs: "10px !important", md: "30px !important" },
                gap: "6vmin",
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#53657D" }}
                >
                  Become a Distributor
                </Typography>
                <Typography variant="body2" mb={2} sx={{ color: "#53657D" }}>
                  Interested in partnering with us?
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ width: "120px", bgcolor: "#1955a6" }}
                >
                  Apply Now
                </Button>
              </Box>
              <Box
                sx={{
                  width: { xs: "15vmin", md: "10vmin" },
                  height: { xs: "15vmin", md: "10vmin" },
                  position: "relative",
                }}
              >
                <Image
                  src={globaHandIcon}
                  alt="Icon"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card
            variant="outlined"
            sx={{
              backgroundColor: "#F1F7FF",
              height: "100%",
              borderColor: "#c5d0e6",
            }}
          >
            <CardContent
              sx={{
                paddingX: { xs: "20px", md: "40px" },
                paddingY: { xs: "10px !important", md: "30px !important" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                gap: "6vmin",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#53657D" }}
                >
                  Need After-Sales Support?
                </Typography>

                <Typography variant="body2" mb={2} sx={{ color: "#53657D" }}>
                  Get help with machine setup, maintenance, or parts.
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ width: "120px", bgcolor: "#1955a6" }}
                >
                  Apply Now
                </Button>
              </Box>
              <Box
                sx={{
                  width: { xs: "15vmin", md: "10vmin" },
                  height: { xs: "15vmin", md: "10vmin" },
                  position: "relative",
                }}
              >
                <Image
                  src={headPhoneIcon}
                  alt="Icon"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
