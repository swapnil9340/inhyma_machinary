import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function ContactForm() {
  const [country, setCountry] = useState("notSelected");
  const [product, setProduct] = useState("notSelected");

  const handleChange = (event, field) => {
    field === "country"
      ? setCountry(event.target.value)
      : setProduct(event.target.value);
  };

  return (
    <Box
      p={4}
      bgcolor="#E5F0FF"
      maxWidth="600px"
      margin="auto"
      borderRadius={2}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={1}
        sx={{ color: "#53657D" }}
      >
        Send Us a Message
      </Typography>

      <Typography variant="body2" mb={4} sx={{ color: "#53657D" }}>
        Please fill in the form below and our team will get in touch within 24
        hours.
      </Typography>

      <form>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Full Name</InputLabel>
            <Box
              component={"input"}
              className="form-control"
              placeholder="Full Name (required)"
              required
              sx={{
                ":hover": {
                  borderColor: "#000",
                },
                ":focus": {
                  borderColor: "#1976d2",
                  boxShadow: "none",
                  borderWidth: "2px",
                },
              }}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Company Name</InputLabel>
            <Box
              component={"input"}
              className="form-control"
              placeholder="Company Name"
              required
              sx={{
                ":hover": {
                  borderColor: "#000",
                },
                ":focus": {
                  borderColor: "#1976d2",
                  boxShadow: "none",
                  borderWidth: "2px",
                },
              }}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Email</InputLabel>
            <Box
              component={"input"}
              type="email"
              className="form-control"
              placeholder="Email (required)"
              required
              sx={{
                ":hover": {
                  borderColor: "#000",
                },
                ":focus": {
                  borderColor: "#1976d2",
                  boxShadow: "none",
                  borderWidth: "2px",
                },
              }}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Phone</InputLabel>
            <Box
              component={"input"}
              className="form-control"
              placeholder="Phone (required)"
              required
              sx={{
                ":hover": {
                  borderColor: "#000",
                },
                ":focus": {
                  borderColor: "#1976d2",
                  boxShadow: "none",
                  borderWidth: "2px",
                },
              }}
            />
          </Grid>

          <Grid item size={{ xs: 6 }}>
            <InputLabel sx={{ mb: 1 }}>Country</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              value={country}
              defaultValue={" "}
              onChange={(e) => handleChange(e, "country")}
              IconComponent={ExpandMoreIcon}
              sx={{
                background: "#fff",
                height: "37px",
                color: country === "notSelected" ? "gray" : "#000",
                "& fieldSet": {
                  borderColor: "#dee2e6",
                },
              }}
            >
              <MenuItem value={"notSelected"} hidden>
                Select Country{" "}
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <InputLabel sx={{ mb: 1 }}>Product</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              value={product}
              defaultValue={"notSelected"}
              onChange={(e) => handleChange(e, "product")}
              IconComponent={ExpandMoreIcon}
              sx={{
                background: "#fff",
                height: "37px",
                color: product === "notSelected" ? "gray" : "#000",
                "& fieldSet": {
                  borderColor: "#dee2e6",
                },
              }}
            >
              <MenuItem value={"notSelected"} hidden>
                Select Product{" "}
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Message</InputLabel>
            <TextField
              multiline
              fullWidth
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
              sx={{ background: "#fff" }}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ bgcolor: "#1955a6" }}
            >
              Submit Enquiry
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
