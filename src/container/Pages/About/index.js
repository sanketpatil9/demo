import { useState } from "react";
import "./About.css";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import logo from '../../../Assest/Images/DG-New-Logo.jpeg';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { images } from "../../../Constant";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [                                                                                // this is mock deta we can put our mock deta above our function..//
//   {
//     label: 'Developer Guru',
//     imgPath:
//       logo
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];


const About = () => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (number) => {
    setActiveStep(number);
  };

  return (
    <div className="Itsdiv">
      <Header />
      <h1 className="bg-danger text-white">This is the About page</h1>

      <Box sx={{ maxWidth: 1300, flexGrow: 1 }}>
        {/* <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper> */}
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: 'block',
                    // maxWidth: 1500,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"  // Remove 'right' to allow custom positioning
          activeStep={activeStep}
          sx={{
            display: 'flex',
            justifyContent: 'center',  // Center the bullets horizontally
            mt: 2,  // Optional: add margin-top for spacing
          }}
        />

      </Box>

      <Footer />
    </div>
  );
};

export default About;
