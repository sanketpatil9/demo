import React, { useState } from "react";
import styles from "./Register.module.scss";
import Header from "../../../component/Header";
import {
  TextField,
  Typography,
  Box,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  Checkbox,
  FormHelperText,
} from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers";
// import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { axiosUsersPostDeatils } from "../../../Services/api";

const Product = () => {
  const [userDetails, setUserDetails] = useState();
  const [commentValue, setCommentValue] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerDetails = (data) => {
    const payLoad = {
      name: data.firstName,
      email: data.Email,
      address: data.address,
      gender: data.gender,
      number: data.phoneNumber,
      terms: data.terms,
    };
    console.log(data);
    studentRegister(payLoad);
  };

  const studentRegister = async (payLoad) => {
    try {
      const response = await axiosUsersPostDeatils(payLoad);
  
      // Log the response to inspect its structure
      console.log("API Response:", response);
  
      if (response && response.status === 200) {
        // Handle successful response
        setUserDetails([response.data]);
        setCommentValue(true);
      } else {
        // Log and handle unexpected response statuses
        console.log("Unexpected response:", response);
        setUserDetails([]);
      }
    } catch (error) {
      // Handle errors (e.g., network issues, bad requests)
      console.error("API Error:", error);
  
      // Set a fallback in case of error
      setUserDetails([]);
    }
  };
  

  return (
    <>
      <Header />
      <Typography variant="h6">Fill Your From here</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <form
          onSubmit={handleSubmit(registerDetails)}
          style={{ border: "1px solid" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <label>Name :</label>{" "}
            <TextField
              sx={{ margin: "10px" }}
              size="small"
              error={!!errors.firstName} //true false
              helperText={errors?.firstName?.message}
              placeholder="Enter Your Full Name"
              {...register("firstName", {
                // firstName is like a name for identity..//
                required: {
                  value: true,
                  message: "This filed is required 1223343",
                },
                minLength: {
                  value: 10,
                  message: "Minimum 10 character required",
                },
                // pattern: {
                //   value: /^[A-Za-z]+$/,
                //   message: "Only alphabetic characters are allowed",
                // },
              })}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <label>Mobile :</label>{" "}
            <TextField
              sx={{ margin: "10px" }}
              size="small"
              error={!!errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message:
                    "Phone number must be exactly 10 digits and Numbers only",
                },
              })}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <label>Email :</label>{" "}
            <TextField
              sx={{ margin: "10px" }}
              size="small"
              error={!!errors.Email}
              helperText={errors?.Email?.message}
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: "" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{ marginLeft: "10px" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                helperText={errors?.gender?.message}
                {...register("gender", { required: "Gender is required" })}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                {...register("gender")}
              />
              {errors.gender && (
                <p style={{ color: "red" }}>{errors.gender.message}</p>
              )}
            </RadioGroup>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <label style={{ padding: "10px" }}>Date :</label>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              sx={{ marginLeft: "10px" }}
              error={!!errors.DatePicker}
              {...register("DatePicker", {
                required: { value: true, message: "Date select is required" },
              })}
            >
              <DatePicker />
              {errors.DatePicker && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.DatePicker.message}
                </FormHelperText>
              )}
            </LocalizationProvider>
          </Box> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "80%",
              alignTracks: "center",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          >
            <label style={{ padding: "20px" }}>Course:</label>

            <Select
              label="Course"
              sx={{ width: "80%" }}
              {...register("Course", { required: "You must select an Course" })}
            >
              <MenuItem value={"React"}>React</MenuItem>
              <MenuItem value={"node"}>Nodejs</MenuItem>
              <MenuItem value={"mangoDB"}>MangoDB</MenuItem>
            </Select>
            {/* {errors.item && <FormHelperText sx={{color : 'red'}}>{errors.item.message}</FormHelperText>} */}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          >
            <label>Address :</label>{" "}
            <TextField
              multiline
              rows={4}
              error={!!errors.address}
              helperText={errors?.address?.message}
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 5,
                  message: "Address must be at least 5 characters long",
                },
                maxLength: {
                  value: 100,
                  message: "Address must be at most 100 characters long",
                },
              })}
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "60px" }}
          >
            {" "}
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("terms", {
                      required: "You must accept the terms and conditions",
                    })}
                  />
                }
                label=" accept terms and condition"
              />
              {errors.terms && (
                <p style={{ color: "red" }}>{errors.terms.message}</p>
              )}
            </FormGroup>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
          >
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Product;
