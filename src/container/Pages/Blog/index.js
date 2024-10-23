import React, { useEffect, useState } from "react";
import styles from './Blog.module.scss';
import ProfileDetails from '../../../component/ProfileDetails';              // ProfileDetails ha child compo bnvla right side la import kela ithe blog madhe //
import { profileDetails, profileDetails1, Name, profile } from "../../../Constant";    // ha object ahe constant madhe bnvlela  so { madhe ghetla }//
import Footer from "../../../component/Footer";
import { useNavigate } from "react-router-dom";     // useNavigate ghetl react router dom madhun internal linking sathi //
import Header from "../../../component/Header";
//console.log(profileDetails,'profileDetails');

const Blog = () => {

  const [profileDetils, setProfileDetils] = useState();           // useState used here //
  const [msg, setMsg] = useState();                              // state define keli (userdefine fun details mdhli value (msg) he child compo (profiledetails) madhe send kraychi hoti so //
  const [visible, setvisible] = useState(false);
  const [msg1, setMsg1] = useState();
  const [userData, setuserData] = useState();
  // const [user, setUser] = useState();

  const navigate = useNavigate();          // useNavigate fun he navigate var madhe ghetl, mnje ya fun la call apn navigate navachya var through krto bss mnje eka variable la te value assign keli  //


  console.log(userData, 'userData@@@@@@@@@@@@');
  // console.log("userrrrr", user);

  // const profileDetails=[
  //   {'Name':'Sankuu Patil','Mob':'9527657281','Email':'sankuu@gmail.com'},
  //   {'Name':'Shubham Patil','Mob':'9527657281','Email':'shubham@gmail.com'},
  //   {'Name':'Kuldip Patil','Mob':'9527657281','Email':'kuldip@gmail.com'},
  // ]

  useEffect(() => {
    if (profile === Name);                // constant madhe define kela ha var compare kryacha hota mhanun instead string asa compara karyacha  //
    setProfileDetils(profileDetails);

  }, [])

  // const details = (msg) => {
  //   console.log('function calling....!', msg);           // onclick vr call kel // // msg is a parameter tya madhe Good morning patil hi value fun chya run time la ghetili onclick madhe //
  //   setMsg(msg);                                        // (msg) set kela msg la //
  //   setvisible(true);                                 // button vr click kelyavr setVisible chi value true update honar by-default false ahe te //
  // }


  const details1 = (msg) => {                         // value kshi jate child to parent check purpose  trial //
    console.log('function calling....!', msg);
    // setMsg(msg);                                          
    setvisible(true);
  }


  const details = (text) => {                                 // child madhun aal fkt ithe define kel // child madhun parent madhe deta anaycha asel tr fkt apn tithun fun cha call gheun aloy //
    console.log("calling details", text);                    // ya text mdhe good mor sanket welcome in pune he ahe//        // child madhun fun la run time value GM sanket send kelti te ithe parameter (text) madhe ghetli ani te value setMsg1 state la update keli mins te Msg1 madhe store zali i.e. te apn ata u.i. madhe use kru shkto //
    setMsg1(text)                                     // Msg1 ya useState madhe good mor sanket welcome in pune stored zal ani Msg1 he khali h1 madhe bind kelel ahe tya madhe good morning sanket welcome in pune he ahe  //
    navigate ("/Student_Details");                           // fun call honar navigate navach, Argument mhanun path pathvla apn ithe  //
  }


  // const [ProfileDetails, setProfileDetails] = useState();

  // useEffect(() => {
  //   setProfileDetails(ProfileDetails);
  // }, [])

  return (
    <>
    <Header/>
      <div>

        <div className={styles.mainWrapperLeft}>
          <h1>Welcome In Blog Page</h1>

          <h1>{msg1} </h1>                       {/* // ithun page vr diste good morning sanket welcome in pune he //child fun (details) madhun aleli value ithe bind keli  //   {msg1[0]} child madhun [array] madhe value pass kelelya so ithe first value pahije hoti mhanun */}

          {/* {userData.slice(0,1)} */}
          <h1>{userData?.slice(0, 1).map((item, index) => {
            return <span>{item.useName}</span>   // ithe child madhun parent madhe value anli adhich useState define krel hot  const [userData, setuserData] = useState(); he ani set child madhun kel nntr child madhun as a parameter n ikde parent madhe value ghetli //
          })}</h1>


          {/* <button className="btn btn-dark" onClick={() => { details('Good Morning Patil') }} >More-Details</button> */}
          <button className="btn btn-dark" onClick={() => { details1() }} >More-Details</button>

        </div>

        <div className={styles.mainWrapperRight}>

          <div className={styles.mainWrapperRight1}>
            <ProfileDetails
              profileDetils={profileDetils}      //props (deta) pass kele (child compo profileDetails madhe) //     // This props is for API (mock deta) //
              msg={msg}                          // ha ithun parameter madhe msg send kela mins tikde profile detials chya compo madhe ghenyasathi pn parameter dya lagnar // This props is for onclick event GM msg show //
              visible={visible}                  //   (visible = {false})    =>     false asel tr msg console vr disel but ui la bind nahi honar // true asel tr honar // boolean value send keli true (true he own value ahe so it is not necessary to make state for this// jr value update kraychi asti tr state bnvali lagli asti) // it is flag for conditon handle karn ysathi // So that we can send from parent compo to child multiple props for multiple functionalities // pratek props cha use differe difffer aste // left side he main props astat left side madhe deta asto always // left side cha ch var tikde child madhe define kara lagte //
              details={details}                  // details navach fun bnvl hot child profile det..s madhe te vrti main fun madhe param madhe send kel tithe ani ithe received zal //
              setuserData={setuserData}
            // user={user}                        // value kshi jate te check trial purpose //    // ya ProfileDetails compo madhle je pn left side la ahet te sarv original props ahet tya madhe value stored ahe he left side che ch props tikde child madhe pahijet props mins ref variable kiva parameter //
            />
            {/* <button className="btn btn-dark" onClick={() => { details('Good Morning Patil') }} >More-Details</button> */}
          </div>

          <div className={styles.mainWrapperRight2}>
            <h3> User Details</h3>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Blog;




// props parent mdhun compo..t chya at madhun pathvayche //


// new page open honar ahe mins component ch  asnar ahe to //