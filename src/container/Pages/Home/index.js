import React, {useContext, useEffect, useState} from "react";                 // For Context Api  // Value Access krnyasathi use context lagnar only //
//import {CommonData} from '../../../App';                                // For Context Api 
import { CommonData } from "../../../Context/GlobalContext";              // For Context Api

// import { useEffect } from "react";  // Hooks means in short pre-defined function or Plugins //
// import { useState } from "react";

// import './Home.module.scss'; // same folder mins ekach folder madhe file ahet mhanun single dot. dila //
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";

import logo from "../../../Assest/Images/DG-New-Logo.jpeg";

import styles from "./Home.module.scss";

// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';
// import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const Home = () => {

  const getUserName = useContext(CommonData);            // For context api 

  const [studentDetails, setStudentDetails] = useState('');                  // syntax of useState //

  const [visible, setVisible] = useState(false);

  const [footerValue, setFooterValue] = useState('DeveloperGuru');         // ithe apn array madhe pn value pass kru shkto //

  // const [name, setName] = useState('Taylor');
  //console.log(studentDetails);      // profile fun mdhe value update zali ka check karnyasathi //
  //console.log(getUserName,'getUserName@@######');                   // For Context api 
  // const x = true;

  // useEffect(() => {                                 // syntax of useEffect //

  //   if (x === true) {

  //     console.log('studentDetails@@@@@@@@@', studentDetails);
  //     // console.log('studentName@@@@@@@@@', name);
  //   }

  // Profile();
  // }, []);       // ya array madhe dependecia pass krto apn jr condition base handle kraych ahe ani consistency khi update kraych asel tr te aste array madhe //


  useEffect(() => {                             // value update keli by-default kahich nvti//
    setStudentDetails(' Jay Shree Mahakal')
  }, [])        // ya [ madhe dependency nahi deli tr useEffect ekdach call hote that means empty array asl ki ekda ch call hot aste ]



  const Profile = () => {                       // for value update testing purpose //
    // console.log('Profile Calling...!');
    setStudentDetails('Shree');
  }

  const ClickMe = () => {
    // console.log("Callinggggg");
    // setVisible(true);

    if (visible) {                       //   if (visible === true) {
      setVisible(false);

    } else {
      setVisible(true);
    }
  }


  const UpdateMe = () => {
    // setFooterValue(['Microsoft']);       // vrti array madhe define kel so [ ] dya lagla //
    setFooterValue('Microsoft');
    setVisible(true);
  }



  return (
    <>
      <Header />

      <div className={styles.headerSection}>                        
        <p className={styles.headerTextColor}>Sanket Patil</p>
        <br></br>

        <div>
          <h1 className="bg-info text-white">This is the home page</h1>

          {/* For Inline Css */}
          {/* <h1 style={{ paddingTop: "30px" }}>He Home Page Ahe</h1> */}

          {visible ? <h1>{studentDetails}</h1> : ''}       {/* useEffect madhli value ui la bind keli */}

          {/* <h1 className="text-end text-warning" style={{backgroundColor:'orangered',color:'blue'}}>Developer Guru</h1>  */}

          <h1 className={`${styles.textPadding} ${styles.textBorder} text-end bg-info`} style={{ backgroundColor: "orangered", color: "blue" }}> Shankar Sir</h1>
          <div>

                {/* <h1>Welcome To {getUserName.username} </h1>      Context Api use krun deta anla  */}

                <h1>Welcome To{getUserName.username}</h1>                         

            <img src={logo}></img>;

            <button className="btn btn-danger" onClick={() => { Profile() }}>SUBMIT</button>
            <button className="btn btn-info" onClick={() => { ClickMe() }}>Click</button>
            <button className="btn btn-info" onClick={() => { UpdateMe() }}>UpdateMe</button>

          </div>
        </div>
        <div>
          <Footer footerValue={footerValue}
            isEnable={'visible'}                  // Flag  // it is used for condition handle purposes //
          />                                     {/* As a props value set keli 1st footerValue is ref variable* / isEnable='visible' is a flag*/}
        </div>
      </div>

    </>
  );
};

export default Home;






















// useState - 1) first work - value store krte 2) second work - value update krte donhi kam krte ek ch variable.
// * don var yetat state madhe pahila value store/preserve krte dusra value update krte //

// Flag ha always boolians madhe aste maximum or it can be changed //