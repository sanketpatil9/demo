import React, { useEffect, useState } from "react";
import styles from './Service.module.scss';
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Service1 from "../../../component/Service1";


const Service = () => {

  const [courseDetails, setCourseDetails] = useState();
  // const [newclientDetails, setNewCliendDetails] = useState();
  const [newclientDetails, setNewClientDetails] = useState();
  const [msg, setMsg] = useState();           // fun/button sathi state bnvli, khali clickme navachya fun madhe update kel he // ending la service 3 child la pathvl apn ya madhli value //

  console.log(newclientDetails, 'Back to pavillansss');        // ithe anli value //
  console.log('cousre@@#', courseDetails);

  const courseDeatils1 = [{ 'name': 'HTML', 'duration': '1' },
  { 'name': 'CSS', 'duration': '1' },
  { 'name': 'BOOTSTRAP', 'duration': '1' },
  { 'name': 'JAVASCRIPT', 'duration': '1' },
  { 'name': 'REACTJS', 'duration': '1' }
  ]

  useEffect(() => {
    setCourseDetails(courseDeatils1);             // courseDeatils set kela Course la mnje course madhe deatils ali purn //
  }, [])

  const clickMe = (Msg) => {       // button sathi fun bnvl he click me navach // // welcome navachi value run-time la  pathvli te ithe ghetli Msg ya parameter through //
    setMsg(Msg)        // Msg ya parameter madhli value ithe set keli tya madhe welcome ahe //
  }

  const updateMe = (update) => {
    console.log("updateddddd....!", update);
  }

  return <>

    <Header />

    <div className={styles.mainWrapper}>
      <Service1                              //{/* Service1 la pathvla as a props / ithun send kela mnje tikde ghya pn lagin */}
        courseDetails={courseDetails}
        setNewClientDetails={setNewClientDetails}
        msg={msg}         // he value challi ithun child madhe ithun geli service 1 la //
        updateMe={updateMe}       // Finally service 3 child madhun call ala ithe service la i.e. parent la & ithe fun banval lagel ata aplyala //
      />

      <button className="btn btn-dark" onClick={() => { clickMe('Welcome') }}>Click Me</button>



      <Footer />
    </div>
  </>
};

export default Service;

//       <button className="btn btn-dark">Click Me</button>    // je value ch kel hot tech button ch kel //


// Parent madhun jevha apn fun child la pathvta n value tevva te parent ch fun ithe ch declare zal pahije pafrent madhe, ithun mg tya fun chya atmadhli value asel te set krun tikde pathvun dya //
// jevha vice versa child too-parent yaych ahe tr child kadun fkt call yenar ahe, ani mg te fun aapl parent madhe define asnar  ahe //