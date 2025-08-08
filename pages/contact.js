import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

export default function ContactPage() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        
        {/* Left Section - Description */}
        <Grid item xs={12} md={4}>
          <Typography variant="body1" sx={{ color: "green", fontWeight: 500 }}>
            Contact Us
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mt: 1, lineHeight: 1.2 }}
          >
            Get in Touch.
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mt: 1, lineHeight: 1.2 }}
          >
            Contact Information and Support.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "grey.700", maxWidth: "500px" }}
          >
            Your Trusted Partner in Data Protection with Cutting-Edge Solutions
            for Comprehensive Data Security.
          </Typography>
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "600px", // allow wider layout for desktop
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#fafafa",
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            {/* Name Fields */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  required
                  placeholder="Your First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  required
                  placeholder="Your Last Name"
                />
              </Grid>
            </Grid>

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              type="email"
              required
              placeholder="youremail@email.com"
            />

            {/* Company Name */}
            <TextField
              fullWidth
              label="Company Name"
              required
              placeholder="Your Company Name"
            />

            {/* Message Field */}
            <TextField
              fullWidth
              label="Message"
              required
              placeholder="Write your message here..."
              multiline
              rows={4}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{ mt: 1, backgroundColor: "#1976d2" }}
              size="large"
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
