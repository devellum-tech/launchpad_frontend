import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    compName: "",
    compURL: "",
    requirement: "",
    budget: "",
    hear: "",
    msg: ""
  })
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!formData.fname.trim()) tempErrors.fname = "First name is required";
    if (!formData.lname.trim()) tempErrors.lname = "Last name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
    // if (!formData.compName.trim()) tempErrors.compName = "Company name is required";
    // if (!formData.requirement) tempErrors.requirement = "Please select a requirement";
    // if (!formData.budget) tempErrors.budget = "Please select a budget";
    // if (!formData.hear) tempErrors.hear = "Please select an option";
    // if (!formData.msg.trim()) tempErrors.msg = "Message is required";

    setErrors(tempErrors);

    // Returns true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      console.log("Form Submitted:", formData);
      // submit API call here
    } else {
      console.log("Validation failed");
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };

      // Validate only this field
      let tempErrors = { ...errors };

      if (name === "fname") {
        if (!value.trim()) tempErrors.fname = "First name is required";
        else delete tempErrors.fname;
      }

      if (name === "lname") {
        if (!value.trim()) tempErrors.lname = "Last name is required";
        else delete tempErrors.lname;
      }

      if (name === "email") {
        if (!value.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) tempErrors.email = "Enter a valid email";
        else delete tempErrors.email;
      }

      if (name === "phone") {
        if (!value.trim()) tempErrors.phone = "Phone is required";
        else delete tempErrors.phone;
      }

      setErrors(tempErrors);

      return updatedForm;
    });
  };

  console.log(formData)
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
            Contact Information
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mt: 1, lineHeight: 1.2 }}
          >
            and Support.
          </Typography>
          <Box
            sx={{
              maxWidth: 500, // or any size
              p: 2,
              // border: "1px solid",
              borderColor: "grey.300",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "grey.700",
                whiteSpace: "normal", // ensures wrapping
                wordBreak: "break-word", // breaks long words if needed
              }}
            >
              Your Trusted Partner in Data Protection with Cutting-Edge Solutions
              for Comprehensive Data Security.
            </Typography>
          </Box>

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
                  onChange={(e) => handleChange(e)}
                  fullWidth
                  label="First Name"
                  name="fname"
                  required
                  placeholder="Your First Name"
                  error={!!errors.fname}
                  helperText={errors.fname}
                />
                {/* {!formData?.fname && "please fill the Name"} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => handleChange(e)}
                  fullWidth
                  label="Last Name"
                  name="lname"
                  required
                  placeholder="Your Last Name"
                  error={!!errors.lname}
                  helperText={errors.lname}
                />
              </Grid>
            </Grid>

            {/* Email */}
            <TextField
              onChange={(e) => handleChange(e)}
              fullWidth
              label="Email"
              type="email"
              name="email"
              required
              placeholder="youremail@email.com"
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              onChange={(e) => handleChange(e)}
              fullWidth
              label="Phone"
              type="phone"
              name="phone"
              required
              placeholder="Phone Number"
              error={!!errors.phone}
              helperText={errors.phone}
            />

            {/* Company Name */}
            <TextField
              onChange={(e) => handleChange(e)}
              fullWidth
              label="Company Name"
              name="compName"
              placeholder="Your Company Name"
            />
            <TextField
              onChange={(e) => handleChange(e)}
              fullWidth
              label="Company URL"
              name="compURL"
              // required
              placeholder="Your Company URL"
            />
            <TextField
              onChange={(e) => handleChange(e)}
              fullWidth
              label="City"
              name="city"
              // required
              placeholder="City"
            />

            <FormControl fullWidth>
              <InputLabel id="Requirement">Requirement</InputLabel>
              <Select
                onChange={(e) => handleChange(e)}
                labelId="Requirement"
                id="Requirement"
                name="requirement"
                value={formData.requirement}
                label="Requirement"
              >
                <MenuItem value={"General Inquiry"}>General Inquiry</MenuItem>
                <MenuItem value={"Partnership"}>Partnership</MenuItem>
                <MenuItem value={"Project Quote"}>Project Quote</MenuItem>
                <MenuItem value={"Support"}>Support</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="budget">Budget</InputLabel>
              <Select
                onChange={(e) => handleChange(e)}
                labelId="budget"
                id="budget"
                name="budget"
                value={formData.budget}
                label="budget"
              >
                <MenuItem value={"<1000"}>less than $1,000</MenuItem>
                <MenuItem value={"1000-5000"}>$1,000 – $5,000</MenuItem>
                <MenuItem value={"5000+"}>$5,000+</MenuItem>
              </Select>
            </FormControl>


            <FormControl fullWidth>
              <InputLabel id="Hear-about-us">Hear About Us</InputLabel>
              <Select
                onChange={(e) => handleChange(e)}
                labelId="Hear-about-us"
                id="Hear"
                name="hear"
                value={formData.hear}
                label="Hear About Us"
              >
                <MenuItem value={"Google"}>Google</MenuItem>
                <MenuItem value={"Referral"}>Referral</MenuItem>
                <MenuItem value={"Social Media"}>Social Media</MenuItem>
                <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
            </FormControl>

            {/* Message Field */}
            <TextField
              onChange={(e) => handleChange(e)}
              fullWidth
              label="Message"
              name="msg"
              placeholder="Write your message here..."
              multiline
              rows={4}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{ mt: 1, backgroundColor: "#1976d2" }}
              size="large"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}