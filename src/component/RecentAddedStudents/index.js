import React from "react";
import styles from './RecentAddedStudents.module.scss';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
//import { Typography } from "@mui/material";




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const RecentAddedStudents = () => {

    return (
        <div>
            <h1> Patil </h1>
{/* 
            <Box sx={{ width: '100%' }}> */}                            
                <Stack>                 {/* <Stack spacing={2}> */}
                    {/* <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item> */}
                    <Box sx={{padding:'15px', bgcolor:'white', margin:'10px',color:'black',borderRadius:'10px'}}>Sanket Patil</Box>
                    <Box sx={{padding:'15px', bgcolor:'white', margin:'10px',color:'black',borderRadius:'10px'}}>Sanket Patil</Box>
                    <Box sx={{padding:'15px', bgcolor:'white', margin:'10px',color:'black',borderRadius:'10px'}}>Sanket Patil</Box>
                </Stack>
            {/* </Box> */}

        </div>
    )
}

export default RecentAddedStudents;

// typography ch behaviour p tag ..//
// stack la direction row property deli tr horizontally hote ..//







// mock practice ..//


{/* <Box sx={{ width: '100%' }}>

                <Stack spacing={4} sx={{ border: '2px solid green' }} direction='row'>

                    <Typography variant="h3" color="initial"> 1 student  </Typography>
                    <Typography variant="h3" color="initial"> 2 student  </Typography>
                    <Typography variant="h3" color="initial"> 3 student  </Typography>


                </Stack> 

                <Stack spacing={2}>

                    <Typography variant="h3" color="initial"> 2 student  </Typography>

                </Stack>

                <Stack spacing={2}>

                    <Typography variant="h3" color="initial"> 3 student  </Typography>

                </Stack> 

            </Box> */}