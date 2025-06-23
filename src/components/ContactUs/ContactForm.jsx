import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactForm({ hide }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Form submit error:", error);
    }
  };

  return (
    <Box p={4} bgcolor="#E5F0FF" maxWidth="600px" margin="auto" borderRadius={2}>
      <Typography variant="h5" fontWeight="bold" mb={1} sx={{ color: "#53657D" }}>
        Send Us a Message
      </Typography>

      <Typography variant="body2" mb={4} sx={{ color: "#53657D" }}>
        Please fill in the form below and our team will get in touch within 24 hours.
      </Typography>

      {success && (
        <Typography variant="body2" sx={{ color: "green", mb: 2 }}>
          Your message has been sent successfully!
        </Typography>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Full Name</InputLabel>
            <Box
              component={"input"}
              className="form-control"
              placeholder="Full Name (required)"
              required
              {...register("fullName", { required: true })}
            />
          </Grid>

          <Grid item size={{ xs: 12 }} sx={{ display: hide ? "none" : "block" }}>
            <InputLabel sx={{ mb: 1 }}>Company Name</InputLabel>
            <Box
              component={"input"}
              className="form-control"
              placeholder="Company Name"
              {...register("companyName")}
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
              {...register("email", { required: true })}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Phone</InputLabel>
            <Box
              component={"input"}
              className="form-control"
              placeholder="Phone (required)"
              required
              {...register("phone", { required: true })}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <InputLabel sx={{ mb: 1 }}>Message</InputLabel>
            <TextField
              multiline
              fullWidth
              rows="3"
              placeholder="Message"
              sx={{ background: "#fff" }}
              {...register("message")}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: "#1955a6" }}>
              Submit Enquiry
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
