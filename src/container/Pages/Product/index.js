import React from "react";
import styles from './Product.module.scss';
// import Header from "../../../component/Header"
import Header from "../../../component/Header";
// import Footer from "../../../component/footer";
import Footer from "../../../component/Footer";
//import Box from '@mui/material/Box';
import { Typography, Box, Divider, Card, } from "@mui/material";
import { red } from "@mui/material/colors";
import RecentAddedStudents from "../../../component/RecentAddedStudents";
import Stack from '@mui/material/Stack';
import { Margin } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';     // Grid 2 h3 Grid ch 2 r latest version ahe ..//


const stud_details = [                // MOck deta..//  // Map hi fkt array la chalte ..//
  {                       
    'name': 'Sanket Patil',
    'Mobile': '9527657281',
    'Email': 'sanket@gmail.com',
    'Address': 'Pune'
  },

  {
    'name': 'Kuldeep Patil',
    'Mobile': '9527657281',
    'Email': 'sanket@gmail.com',
    'Address': 'Pune'
  },

  {
    'name': 'Prasad Patil',
    'Mobile': '9527657281',
    'Email': 'sanket@gmail.com',
    'Address': 'Pune'
  }

];




const Product = () => {
  return (
    <div>
      <Header />
      <Box className={styles.boxMainWrapper}>

        <Box className={styles.boxLeftWrapper}>

          <Typography variant="h3" align="center" noWrap='true' className={styles.headerText}>      {/* react js header mhanuhn show kraycyh hot mhanun varuient ghetla ../ */}
            REACT JS INTRODUCTION.
          </Typography>
          <Divider variant="middle" flexItem='true' sx={{ border: '1px solid red' }} />

          <Typography variant="h5" align="left" noWrap='true' className={styles.headerText2}>
            h1. Heading  This IS THE LEFT SECTIONnnnnnnnnnnnnnnnNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN.
          </Typography>

        </Box>

        <Box className={styles.boxRightWrapper}>
          This IS THE RIGHT SECTION.
          <Stack direction='row' spacing={2} sx={{ margin: '5px' }}>         {/* Spacing mins padding ch aste almost.. */}
            <Box sx={{ bgcolor: 'black', color: 'white', padding: '2', margin: '5px', borderRadius: '5px' }}>Redux is a state management library for React applications.</Box>
            <Box sx={{ bgcolor: 'green', color: 'white', padding: '2', margin: '5px', borderRadius: '5px' }}>It helps you manage the state of your application in a centralized way.</Box>
            <Box sx={{ bgcolor: 'blue', color: 'white', padding: '2', margin: '5px', borderRadius: '5px' }}>It provides a way to store and manage the state of your application in a single object called the store</Box>
            <Box sx={{ bgcolor: 'black', color: 'white', padding: '2', margin: '5px', borderRadius: '5px' }}>Jay shree ram</Box>
          </Stack>

          <Stack direction='row' spacing={2} sx={{ margin: '5px' }}>         {/* Spacing mins padding ch aste almost.. */}

            {stud_details.map((item, index) => {               // Vrcha data takla // 
              return < Box key={index} sx={{ bgcolor: 'black', color: 'white', padding: '2', margin: '5px', borderRadius: '5px', minWidth: '200px' }}>
                <Grid container >

                  <Grid size={{ xs: 5, }}>
                    <Typography align="left" >Name :</Typography>
                    <Typography align="left">Email :</Typography>
                    <Typography align="left" >MObile :</Typography>
                    <Typography align="left">Address :</Typography>
                  </Grid>

                  <Grid size={{ xs: 7, }}>
                    <Typography align="left">{item.name}</Typography>
                    <Typography align="left">{item.Email}</Typography>
                    <Typography align="left">{item.Mobile}</Typography>
                    <Typography align="left">{item.Address}</Typography>
                  </Grid>
                </Grid>
              </Box>
            })
            }
          </Stack>
        </Box>
      </Box >

      {/* second row */}
      < Box sx={{ display: "flex" }}>

        <Box className={styles.aboutSection}>
          <Card sx={{ minWidth: 300, maxWidth: 300, minHeight: 300, bgcolor: 'red' }}> First Card ddddddddddddddddddddddddddddddddddddddddddddddddd    {/* minWidth mins tyachyapeksha kami nahi jau shkt jastit jast kiti pn de / maxWidth 300 deli mins 300 chya pudhe nahi janar ..// */}
          </Card>

          <Card sx={{ minWidth: 300, maxWidth: 300, minHeight: 300, bgcolor: 'green' }}> 2 Card     {/* minWidth mins tyachyapeksha kami nahi jau shkt jastit jast kiti pn de */}
          </Card>

          <Card sx={{ minWidth: 300, maxWidth: 300, minHeight: 300, bgcolor: 'purple' }}> 3 Card     {/* minWidth mins tyachyapeksha kami nahi jau shkt jastit jast kiti pn de */}
          </Card>

          {/* <Card sx={{ minWidth: 275, minHeight: 350, marginTop: '10px' }}> 

            <Card sx={{ minWidth: 100, minHeight: 350, marginTop: '10px' }}> Second Card </Card>

          </Card> */}
        </Box>
        <Box className={styles.studentSection}>
          <RecentAddedStudents />                 {/* this is child components../ ha RecentAddesStudents child compo ithe box chya at ghetla so tikde child madhe direct stack ghetla tr chalte without box n gheta ..// */}
        </Box>

      </Box >

      <Footer />
    </div >
  );
};

export default Product;

// typography la havi ti css apn apply kru shkto font size , text-align , font-weight, etc..//