import React from "react";
import styles from './Portfolio.module.scss';
import Header from "../../../component/Header";

const Portfolio = () => {
    return (
        <div>
            <Header />
            
            <h1> Ha Portfolio ahe </h1>
        </div>
    )
}

export default Portfolio;



// import React, { useState } from "react";
// import styles from './Register.module.scss';
// import Header from "../../../component/Header";
// import Footer from "../../../component/Footer";
// import { TextField, Box, Radio, RadioGroup, FormControlLabel, Select, MenuItem, Checkbox, Button } from '@mui/material';
// import { useForm } from "react-hook-form";     // https://codesandbox.io/p/sandbox/react-hook-form-validation-with-material-ui-textfield-xvr9f?file=%2Fsrc%2FApp.js%3A2%2C43

// const Register = () => {

//     const { register, handleSubmit, errors } = useForm();                   // on Sandbox

//     const [age, setAge] = useState('');


//     const handleChange = (event) => {
//         setAge(event.target.value);
//     };

//     const onSubmit = (data) => {                    // on sandbox 
//         console.log(data);
//       };


//     return (
//         <div>
//             <Header />
//             <h1> FILL YOUR FORM HERE</h1>
//             <Box
//                 component="form"
//                 spacing={3}
//                 className={styles.textName}     // This is external css..//
//             // sx={{
//             //     display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'  // .textName cha external class bnval ani tya madhe he sarv takl..//
//             // }}
//             >   <label>Name:</label>
//                 <TextField size="small" label="Enter Name" required variant="filled" helperText="Please Enter Your Name" error sx={{ marginLeft: '10px' }} />

//             </Box>

//             <Box
//                 component="form"
//                 sx={{
//                     display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '10px'
//                 }}
//             >   <label>Mobile:</label>
//                 <TextField label="Outlined" size="small" variant="filled" type="number" sx={{ marginLeft: '10px' }} />

//             </Box>

//             <Box
//                 component="form"
//                 sx={{
//                     display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '10px'
//                 }}
//             >   <label>Email:</label>
//                 <TextField
//                     id="filled-read-only-input"
//                     label="Read Only"
//                     defaultValue="Hello World"
//                     variant="filled"
//                     slotProps={{
//                         input: {
//                             readOnly: true,
//                         },
//                     }}
//                 />

//             </Box>

//             <Box
//                 component="form"
//                 sx={{
//                     display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginLeft: '-20px'
//                 }}
//             >   <label>Gender:</label>
//                 <RadioGroup row sx={{ marginLeft: '10px' }}
//                 >
//                     <FormControlLabel value="female" control={<Radio />} label="Female" />
//                     <FormControlLabel value="male" control={<Radio />} label="Male" />

//                 </RadioGroup>

//             </Box>

//             <Box
//                 component="form"
//                 sx={{
//                     display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginLeft: '-20px'
//                 }}
//             >   <label> Course</label>
//                 <Select
//                     labelId="demo-simple-select-standard-label"
//                     id="demo-simple-select-standard"
//                     value={age}
//                     onChange={handleChange}

//                     sx={{ width: '200px', marginLeft: '30px' }}
//                 >
//                     <MenuItem value="">
//                         <em>Select your Course:</em>
//                     </MenuItem>
//                     <MenuItem value={10}>MERN</MenuItem>
//                     <MenuItem value={20} >MEAN</MenuItem>
//                     <MenuItem value={30} >DOTNET</MenuItem>
//                 </Select>
//             </Box>

//             <Box
//                 component="form"
//                 sx={{
//                     display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginLeft: '-20px'
//                 }}
//             >   <label> Address </label>
//                 <TextField
//                     sx={{ marginLeft: '20px' }}
//                     rows={4}
//                     multiline
//                     placeholder="Enter Address"
//                 />
//             </Box>

//             <Box
//                 component="form"
//                 sx={{
//                     display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginLeft: '-20px'
//                 }}
//             >
//                 <Checkbox /> Term And Condition
//             </Box>

//             <Box>
//                 <Button variant="contained" type="submit" color="success">
//                     Submit
//                 </Button>
//             </Box>


// {/*  on Website code is given below  */}

//             <div className="App">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <Box my={2}>
//                         <TextField
//                             name="email"
//                             type="text"
//                             placeholder="jhonny@email.com"
//                             variant="outlined"
//                             className="input-field"
//                             inputRef={{...register({
//                                 required: true,
//                                 pattern: /\S+@\S+\.\S+/
//                             })}}
//                         />
//                         <Box>
//                             {errors.email && errors.email.type === "required" && (
//                                 <span className="error-message">This is required field</span>
//                             )}
//                             {errors.email && errors.email.type === "pattern" && (
//                                 <span className="error-message">Enter a valid email</span>
//                             )}
//                         </Box>
//                     </Box>
//                     <Box mb={2}>
//                         <TextField
//                             name="password"
//                             type="password"
//                             placeholder="Password"
//                             variant="outlined"
//                             className="input-field"
//                             inputRef={register({
//                                 required: true,
//                                 minLength: 4
//                             })}
//                         />
//                         <Box>
//                             {errors.password && errors.password.type === "required" && (
//                                 <span className="error-message">This is required field</span>
//                             )}
//                             {errors.password && errors.password.type === "minLength" && (
//                                 <span className="error-message">
//                                     Minimum characters 4 required
//                                 </span>
//                             )}
//                         </Box>
//                     </Box>
//                     <Button
//                         color="primary"
//                         type="submit"
//                         variant="contained"
//                         className="submit-button"
//                     >
//                         Submit
//                     </Button>
//                 </form>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default Register;

// // name property mins backend la gheun jate data/value and value update krte update operation madhe value work krte edit operations sathi ../
// // Props disabled ha clickable nsto ..//
// // User jo input takto textbox madhe to ghene..// Form TAg ch kam as ahe ki pratek field madhla deta get kraycha, merge kraycha nntr tyachya samor 2 option astat kuth pathvaycha deta mins action ani ksa pathvaycha mins method..//