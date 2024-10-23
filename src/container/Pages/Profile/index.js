import React, { useEffect, useState } from "react";
import styles from './Profile.module.scss';                          // This are all import Files //
import ErrorMessage from "../../../component/ErrorMessage";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import { useNavigate } from "react-router-dom";
import { redirectPageDetails } from "../../../Helper";
import { axiosStudentDataDetails, axiosUsersDetails } from "../../../Services/api";
// import Header from "../../../component/Header";

const Profile = () => {                                          // in fun there is always props (ya madhe props asu shktat {yachya ander})//

  const [userProfile, setUserProfile] = useState();             // above return & below fun there is state //
  const [studentdetails, setStudentdetails] = useState();        // useState means variable declaration // state var can stored multiple deta - useState navach hooks tyala access dete// consistency data update karnyasathi state use kelya jate development madhe //
  const [userdetails, setUserDetails] = useState();
  const [clientdetails, setClientDetails] = useState();            // userdetails cha API YA STATE madhe set kela..//
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  const name = true;                                            // single var ahe we can't save multiple deta under it //

  console.log(clientdetails, 'Clientdetails!@#$@');
  //console.log(userdetails,'userdetails@@@@@');
  // console.log("userProfile@@##", userProfile);                 // userProfile madhe deta ala ki nahi check karnyasathi console print kela  //

  // Added mock deta here // 
  const studentdetail = [
    { 'stud_id': 91, 'name': 'Sanket Patil', 'Mob': '9527657281', 'Email': 'sanket@gmail.com' },
    { 'stud_id': 92, 'name': 'Raaaj Patil', 'Mob': '9527657281', 'Email': 'Raaj@gmail.com' },
    { 'stud_id': 93, 'name': 'Rohit Patil', 'Mob': '9527657281', 'Email': 'Rohit@gmail.com' },
  ]
  //***************************************************************************************************************************************************************************************************************** */

  useEffect(() => {                                                      // useEffect addes Here //
    filterData();                                                        // filterData() fun call kel useEffect madhe page open zalyavr by-default call honar useEffect madhe aslyamule //
    setUserProfile(studentdetail);                                     // studentdetail madhla array/obj madhla deta setUserprofile madhe set zala so userProfile madhe ata to purn array/obj cha deta stored ahe // with the help of useEffect apn to update kela //
  }, [])

  //*************************************************************************************************************************************************************************************************************************************** */

  useEffect(() => {
    if (name) {                                      // ithe true chi value fixed keli true / update nai honar // 
      console.log('calling Second.....!');            // ya useEffect la condition lavleli ahe // // cond..n true asli tr ch he useEffect call honar nahi tr nahi //
    }
  }, [])                                             // dependenci deli nahi mhanun single time run honar he //

  //******************************************************************************************************************************************************************************************* */
  useEffect(() => {
    if (userProfile?.length > 0) {                  // ithe state chi condi..n deli / userProfile nntr ha ? dila mins make it optional - error yet hot mhanun //
      setStudentdetails(userProfile)               // userProfile madhe mock deta ahe & ithe tya madhla deta studentdetails la set kela prt //
    }
  }, [userProfile])                                  // ithe dependenciees userProfile chi ahe mhanun array madhe userProfile ghetl //
  // ithe array madhe dependencies pass nahi keli tr useEffect ekdach call hote  // jeva jevha userProfile chi value change honar tevha tevha he useEffect call honar dependecncies delyamule //
  // conditon true zali tr ch ha useEffect call honar //  // deta nsla ani nntr kadhi ala tr to instantly update zala pahije so we used here dependencies //  / jevha jevha api madhun deta yete to deta runtime la incre/ decrea hou shkte jr record kami zale tr update kel pahije consistely call kel pahije so dependencies used here //

  //**************************************************************************************************************************************************************************************************** */

  useEffect(() => {                           // api related //
    getStudentDetails();
  }, [])

  //************************************************************************************************************************************************************ */
  // userdefine methods/functions added here ex. onEvent etc //      

  const filterData = () => {
    console.log("filterData functon call hot ahe");                           // This is user defined function //
  }

  //********************************* Get Student Details API ********************************************* *//

  const getStudentDetails = async () => {           // he async fun ahe. useEffect la call honar he..// async chya at await aste   //

    try {                                                                   // try madhe toch code yeto jithe error yenarr ahe ...//
      const response = await axiosStudentDataDetails();                     // comment keli so khali execute nahi honar direct else madhe janaar ..// in future kdhi pn backend n API dela tr fkt uncomment krne..// axiosStudentDataDetails() navach fun api.js madhe lihun thevl ahe      //
      // const response = 345;                                       // temp var bnvla ..//
      if (response.status === 200) {
        // console.log(response,'Response##@@**...!*');
        setUserDetails(response.data);
        getUserDetails();                   // getUserDetails() fun call kel ithee jashihi 1st api call honar tr he call honar if chya at madhe ..//
      }
      else {
        setUserDetails([]);                      //  setUserDetails([]);     // kahi cases madhe else madhe empty error dya lagte mnje deta ala tr set kr dusra nko set kru // 
      }
    }

    catch (error) {
      console.log(error)
    }
  }
  //********************************************************************************************************************************************************* */

  //************************************ Get Userdata API ***************************************************************************************//

  const getUserDetails = async () => {                                     // getUserDetails() he fun kdhi call honar ? => jashihi 1st API call honar tr if chya at madhun call honar ..//
    try {
      const response = await axiosUsersDetails();
      if (response.status === 200) {                  // 400 deun swata chukvla..//
        // console.log(response,'user respoonse##@@!!..');
        setClientDetails(response.data);            // ya line la comment keli tr api madhe deta ch nahi ..//
        // setIsLoading(false);              // response code 200 ala tr ch khali yeil ani false honar he ..//
      }
      // else {
      //   setClientDetails([]);
      // }
      setIsLoading(false);            // loading false always if chya baher pahije.. cond..n true or false zali tri to if chya baher yeil.. mhanun./ vrti jr takl asta tr to always true chya scenario madhe ch work zala asta but in future sts code 200 nahi ala tr loading ch nahi disl pahije mhanun as kel khali takl..//
    }
    catch (error) {
      console.log(error);
    }
  }

  // const response = async axiosGetData()     // axiosgetData() fun dusrikde lihil aste ki j aplya api chya endpoint la connect aste endpoint means url,
  // if (response.statusCode == 200)                   // backend cha developer front end la 4 point deto i.e. success msg,sts code,error msg/ sts code 200 ala tr samjaych success response ala ala nahi tr  
  // {
  //   console.log(response);
  // }

  //*****************************************************************************************************/

  // try {                                                             // error yenar ahe as vate mhanun try madhe ghetla ../ await fun wait krte //
  //   fetch('https://jsonplaceholder.typicode.com/posts')     // fetch navachi method ya endpoint la call krte ani tithun data fetch krte ..//
  //     .then(response => response.json() // .then means response alyavrr ..//.. response navach var madhe deta yeil json format madhe 
  //       .then(json => setUserDetails(json))
  //     )


  //   // const response = await axiosStudentDataDetails()                     // comment keli so khali execute nahi honar direct else madhe janaar ..// in future kdhi pn backend n API dela tr fkt uncomment krne //
  //   // console.log(response, 'response@@@');
  //   //const response = 345;                                       // temp var bnvla ..//
  //   // if (response.statusCode === 200) {
  //   //   //console.log(response)
  //   //   setUserDetails(response);
  //   // }
  //   // else {
  //   //   setUserDetails(studentdetail);                      //  setUserDetails([]);     // kahi cases madhe else madhe empty error dya lagte mnje deta ala tr set kr dusra nko set kru // 
  //   // }
  // }

  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // const redirectUrl = (stud_id, Name, Email, Mob) => {                    // hya value ahet parameter madhe stored ahet //
  //   // console.log(stud_id, Name, Email, Mob, 'stud_id@@@@@@');             // userDefine fun bnvl internal linking sathi more details buttton vrun call kel //
  //   const studData = [{                                                   // multiple parameter pathvayche hote mhanun object banvla ani khali object pass kela user define obj ahe ha //
  //     'stud_id': stud_id,             // ithe kuthlhya pn key chaltat kahi pn key deu shkto apn ithe //
  //     'name': Name,                   //
  //     'Mob': Mob,
  //     'Email': Email
  //   }]                        // object nahi chalat array madhe ch map method chalte mhanun array madhe object ghetla / object la array kraych combination kraych doghanch //

  //   navigate("/Student_Details");
  //   localStorage.setItem("StudentDetails", JSON.stringify(studData));       // localstorage madhe deta set kela // // JSON.stringify array object la string madhe convert krte   // Set kartanni jSon.Stringity pahije object to string convert krte te / StudentDetails he key ahe ithe and studData he value 'key''value' pair aste mhanun //
  // }

  return (                 // under return there is UI //
    <>

      <Header />

      {(isLoading ? 'LoaDing...!' : clientdetails?.length > 0 ? clientdetails?.map((item, index) => {
        return <div className={styles.mainWrapper} key={index}>
          <p>id:<span>{item.id}</span></p>           {/* item ha variable ahe ithe / body,title etc api chya key ahet */}
          <p>name:<span>{item.name}</span></p>
          <p>phone:<span>{item.phone}</span></p>
          <p>username:<span>{item.username}</span></p>
          <p>address:<span>{item.address.city}</span></p>
          <p>company:<span>{item.company.name}</span></p>
          <p>website:<span>{item.website}</span></p>
          {/* <button className="btn btn-dark" onClick={() => { redirectUrl(item.stud_id, item.name, item.Mob, item.Email) }}>More-Detials</button>*/}
          <button className="btn btn-dark" onClick={() => { redirectPageDetails("StudentDetails", item.id, '/Student_Details', navigate) }}>More-Detials</button>     {/* // *buttons created* / Arguments mhanun he sarv helper chya compo madhe pathvl/.../ adhi [ya madhe fkt item hot means all deta jat hota, nntr item.id bcz fkt id pathvaycha hota ,array [] hatvla bcz single ch id pathvaycha hota]// item.id ha payload localstorage madhe set kela// j payload have astat te localstorage madhe set krayche  */}
        </div>
      }) :
        <div>
          <ErrorMessage />           {/* ErrorMessage ha common component bnvla ahe */}
        </div>
      )}

      {/* <div><Footer /></div> */}
    </>
  );
};

export default Profile;



// UseEffect Uses - //
// page open zalyanntre by-default run honar use effect //
// condition deu shkto useEffect vr //
// Array la by-default length aaste , and object la by-defafult length nste pn obj chi length kadhta yete


// id varun adhi localStorage mdhe set keli bcz id gheun gelo hoto adhi bcz api cha call kraycha tr id pass kraycha / mg id varun api heat honar te api deta anun denar mg to aplyaya data bind kara lagte / api madhe id ch pathva lagt aste , real time madhe api madhe fkt id pass kraycha asto api la as a payload mhanun mg tya id related sarv info te api get karun dete  /
// map method one by one record dete //
// jevha multiple parameter astil tevha object banvaycha //
// backend kdun deta api nahi dela tr apl fun apla mock deta aplyala bnvun theva lagte nntr api alyavr neccesary code la commment kiva uncomment kra lagte .//