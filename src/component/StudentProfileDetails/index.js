import React, { useEffect, useState } from "react";
import styles from './StudentProfileDetails.module.scss';
import { profileDetails2 } from "../../Constant";         // constant chya component madhe define kela hota ha / mnje ha deta dusrya api madhun ala aplya kade//
import { axiosUsersGetDetails, axiosGetCommentData, axiosDeleteUserData } from "../../Services/api";
import { comments } from "../../Constant/payloadConstant";
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Box } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';            // add chya icon sathi import kel libray madhun for a dialogu ...//
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const StudentProfileDetails = () => {

    const [studDetails, setStudDetails] = useState([]);                    // usestate bnvl //
    const [studMoreDetails, setStudMoreDetails] = useState([]);            // constant sathi useState bnvli he // // ([]) bcz khali 2 array merge kele //
    const [mergeStudDetails, setMergeStudDetails] = useState([]);
    const [userDetails, setUserDetails] = useState();                               // API SATHI BNVLI ..//
    const [commentValue, setCommentValue] = useState(false);                               // API SATHI BNVLI coomment chya ..//
    const [deleteValue, setDeleteValue] = useState(false);                               // flag sathi BNVL DELETE HONYASATHI more details vr 2 api call hotat so  ..//
    const [open, setOpen] = useState(false);                                         // for mui sncackbar // default value false keli set mins jeva page open karnar tevha te value disnar nahi .. false mins nahi disnar//
    const [openDialog, setOpenDialog] = useState(false);                        // for MUI DIALOG .. / state same zalti so badalli..//



    const user_id = localStorage.getItem('StudentDetails');                             // local storeage madhun ithe get kelii  / ha data profile page varun ala, adhi as  hot -> const Stud_Details=localStorage.getItem('StudentDetails');//

    console.log(user_id, 'user_id!@#@!');
    console.log(open, 'opensss@@@!!');
    //console.log(userDetails,'userDetails!#@@');

    const updatedStudDetails = [{ ...studDetails[0], ...studMoreDetails[0] }];               // spread operator ha arraynch merge krto // array merge hotanna array ch lagnar ahe //

    // console.log(studDetails, 'studentdetails@@@@');                  // obj to string krte json.parse method //
    // console.log(studMoreDetails, "studMoreDetails");
    // console.log(updatedStudDetails, 'updatedStudDetails***************');
    // // console.log(mergeStudDetails, 'someThingNew@@@');
    // console.log(updatedStudDetails[0], 'updatedStudDetails[0]##@@');


    useEffect(() => {
        if (user_id) {

            //console.log(user_id,'Stud_Details!@#@#');                                                       // ith prynt id bhetla profile vrun al api cha //
            getUserDetails(user_id);        // fun call hotanni sobt id janar

            // const updatedStudDetails = [...studDetails,...studMoreDetails];      //   ithe vr takl hot adhii
            // setMergeStudDetails(updatedStudDetails);
            // setStudDetails(JSON.parse(Stud_Details));               // string to object convert kel json.parse ne get kartanni //
            // setStudMoreDetails(profileDetails2);                    // ithe constant madhla object set kela 

        }
    }, [user_id, studMoreDetails]);                                            // dependencies keli bcoz button vr click kelyavr new  new record yetil mhanun pratek veles call zal pahije mhanun dependencies deli [ array madhe ]

    //***************************************************************************************************************************************************************************************************************************************************** */

    useEffect(() => {
        if (commentValue) {                                  // by default commentValue false set keli , ith cond..n deli jr true asel tr ch khali call honar ani consistency update krnar so aray madhe dependencies deli ..if madhe joprynt cond.n true hot nahi to prynt to if chya at jat ch nahi//// comments chi api flag vr handle krnya sathi useeffect kel ..//
            const payload = {
                'user_id': user_id,
                'comments': comments
            }
            getCommentsData(payload);                               // object create krun obj pathvla ithe adhi khalchya line sarkh hot .//
            // getCommentsData(user_id, comments);                        // comment ha payloadConstant ahe ..//   // user_id madhe id ahe localstorage madhe sset kelela /ithun user_id As a ARGUMENT MHANUN send kela..//
        }

    }, [commentValue]);

    //******************************************************************************************************************************************************************************** */

    // const handleClick = () => {                             // for mui snackbar
    //     setOpen(true);                                          // value true hote mnje msg disnar jevha open snackbar button vr click kruu teva ../
    // };

    //***************************************************************************************************************************************************** */
    const handleClose = () => {                         // hadleClose madhe unwanted deta hota to remove kela ..//
        setOpen(false);
    };                                                                      // for mui snackbar ....//
    //***************************************************************************************************************************************************************** */
    const handleOpenDialog = () => {                                         // for MUI DIALOG ..//
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);                                               // false mins croxx vr click kel tr remove honar dialog
    };


    //************************************ Get Userdata API ***************************************************************************************//

    const getUserDetails = async (user_id) => {          // ithe id ghenya sathi user_id param ghetla  // user_id AS A PARAMETER MHANUN GET KELA ITHE ..VRTI useEffect madhun ARGUMENT MHANUN PATHVLA HOTA //                        // getUserDetails() he fun kdhi call honar ? => jashihi 1st API call honar tr if chya at madhun call honar ..//
        const response = await axiosUsersGetDetails(user_id);    // axiosuserdetails la pn user_id pathvla //
        if (response.status === 200) {
            //console.log(response,'user respoonse##@@!!..');
            //setClientDetails(response.data);
            // getCommentsData();                                                      // getCommentsData fun call kel ithun pahili api call zalyavr honar call he
            setUserDetails([response.data]);
            setCommentValue(true);                                                  // pahili api call zalyavr ch he comments chi api call honar ..//
            // getCommentsData(); 
        }
        else {
            //console.log(response,'#user respoonse#@@!!..');
            //setClientDetails([]);
            setUserDetails([]);
        }
    }

    //************************************ getCommentsData API ***************************************************************************************//

    const getCommentsData = async (payload) => {               // don argument ghetle mins don params pn lagtat ..//  
        const response = await axiosGetCommentData(payload);    // api.js madhe axiosGetCommentData() define kel ahe ithun call kkel axiosGetCommentData() he fun
        if (response.status === 200) {
            console.log(response, 'comments response!@#$');
            //console.log(response,'user respoonse##@@!!..');
            //setClientDetails(response.data);
            //setUserDetails([response.data]);
        }
        else {
            console.log(response, 'comments response!@#$');
            //console.log(response,'user respoonse##@@!!..');
            //setClientDetails([]);
            //setUserDetails([]);
        }
    }

    //************************************ deleteUserData API ***************************************************************************************//

    const deleteUserData = async (payload) => {               // payload ha parameter aha kahi pn asla tr chalto to onclick vrun argument ghetla hota item.id navacha mnje item.id chi value payload nvachya var madhe stored honar  ..//  
        const response = await axiosDeleteUserData(payload);    // api.js madhe axiosDeleteData() define kel ahe ithun call kkel axiosDeleteData() he fun userDefine ahe kahi pn nav deu shkto ...//
        if (response.status === 200) {
            setOpen(true);                                                 // for snackbar ..// ..// api heat hoon response alyanntr tost disla pahije mhaun ithe khali set kel.Adhi khali takkla hot work nvt hot so ithe takl.//
            setDeleteValue(true);                                   // simple msg show honya sathi use kel.../ Condition check krte he//
            // setOpen(true);                                                      // for snackbar ..// ..// api heat hoon response alyanntr tost disla pahije mhaun ithe khali set kel..//
            console.log(response, 'Record Has Been Deleted Successfully!@#$');
            //console.log(response,'user respoonse##@@!!..');
            //setClientDetails(response.data);
            //setUserDetails([response.data]);
        }
        else {
            console.log('Some Wrong please try again..');
            //console.log(response,'user respoonse##@@!!..');
            //setClientDetails([]);
            //setUserDetails([]);
        }
    }



    return <>
        <h1 style={{ background: 'blue' }}> This is the student Profile Details Page</h1>

        <Box sx={{ bgcolor: 'red', textAlign: "left", padding: "20px", margin: '20px' }}>Sanket Patil</Box>      {/* props of mui kahi mui che cmponent ahet te css apply krt nahit tya veles use karne ..  Firsst priority should be always external css// */}

        {(!deleteValue ? userDetails?.map((item, index) => {       // === false nahi lihaych i.e. != yachya aevji not eaual to lihine === true lihil tr chalte ..//   // jevha   {(deleteValue?userDetails?.map((item, index) => { as thevl tr to true mhanun consider kril value ../ ! mins not equal to mins false .. as ahe te //            // ha deta localStorage madhe set karun ithe get kela ..// updatedStudDetails?.map he fun hot adhi.   //  {(deleteValue===false?userDetails?.map((item, index) => {  condition ashi hoti firstly./
            return <div key={index}>
                <p>user_ID:<span>{item.id}</span></p>
                <p>User_name:<span>{item.name}</span></p>
                <p>User_Pincode:<span>{item.address?.zipcode}</span></p>
                <p>user_Mobile:<span>{item.phone}</span></p>
                <p>User_Landmark:<span>{item.address?.street}</span></p>
                <p>User_City:<span>{item.address?.city}</span></p>
                <p>User_Company_Name:<span>{item.company?.name}</span></p>
                <p>User_Website:<span>{item.website}</span></p>
                <p>User_UserName:<span>{item.username}</span></p>
                <button className="btn btn-danger" onClick={() => { deleteUserData(item.id) }}>Delete kr</button>

                <Button variant="contained" endIcon={<AddBoxIcon />} disableRipple={true} onClick={handleOpenDialog}> Add </Button>              {/* modal sathi ghetl ithe mui madhe tyala dialog mhntat..//  adhi variant dialog ch outlined hot nntr custmized kel so contained takl... */}



            </div>
        }) : <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

            <Alert                                      // snackbar and alert both are different..//
                onClose={handleClose}                   // ya fun la kadhun takl tr icon nahi yenar we can costomize whatever ..//
                severity="info"                      // ithe color change kru shkto ..//
                variant="filled"                    // varient pn change kru shkto tya tya compo madhe disel ..//
                sx={{ width: '100%' }}             // sx mins Props i.e. inline css.. he props fkt mui chya component lach apply hota .. //
            // icon={false}                         // icon jate property ahe css chi..//       
            >
                Recorde Has been DELETE ...!
            </Alert>

        </Snackbar>
        )}


        <Dialog                                            // mui cha dialog takla ithe ..//
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openDialog}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Modal title
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                className={styles.modalCloseIcon}
                ddisableRipple={true}
            // sx={(theme) => ({
            //     position: 'absolute',
            //     right: 8,
            //     top: 8
            // })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                    ullamcorper nulla non metus auctor fringilla.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus variant="outlined" color="error" disableRipple={true} onClick={handleCloseDialog}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>

    </>
}

export default StudentProfileDetails;





// Profile madhun object ghetla hota ani map la object chalat nahi array ch chalte mhanun ' studDetails.map is not a function' he error det hoti //
// spread operator ha array madhe work hoto //

// don array madhe object ahet 2 tyachya key different aslyalmule tya doghanna eke obj madhe merge kra lagte
//  <p>User_Pincode:<span>{item.address.zipcode}</span></p> object ani at madhlya chi key as combination ahe te ..//


// disableRipple default hover effect remove krte .. jr ekhadya veles apply nahi zal tr tyala true of false don value asstat ..///









































// import React, { useEffect, useState } from "react";
// import styles from './StudentProfileDetails.module.scss';
// import { profileDetails2 } from "../../Constant";

// const StudentProfileDetails = () => {
//     const [studDetails, setStudDetails] = useState([]);
//     const [studMoreDetails, setStudMoreDetails] = useState([]);
//     const [mergeStudDetails, setMergeStudDetails] = useState([]);

//     const Stud_Details = localStorage.getItem("StudentDetails");

//     // Initialize studDetails and studMoreDetails separately to avoid triggering unnecessary re-renders
//     useEffect(() => {
//         if (Stud_Details) {
//             setStudDetails(JSON.parse(Stud_Details));
//         }
//     }, []); // Empty dependency array to run only once on mount

//     useEffect(() => {
//         setStudMoreDetails(profileDetails2);
//     }, []); // Empty dependency array to run only once on mount

//     // Merge the two arrays only if both arrays have values
//     useEffect(() => {
//         if (studDetails.length > 0 && studMoreDetails.length > 0) {
//             const updatedStudDetails = studDetails.map((item, index) => ({
//                 ...item,
//                 ...(studMoreDetails[index] || {}) // Safeguard against mismatched lengths
//             }));
//             setMergeStudDetails(updatedStudDetails);
//         }
//     }, [studDetails, studMoreDetails]); // Only re-run when these states change

//     return (
//         <>
//             <h1>This is the Student Profile Details Page</h1>
//             {mergeStudDetails.map((item, index) => (
//                 <div key={index}>
//                     <p>stud_ID: <span>{item.stud_id}</span></p>
//                     <p>Name: <span>{item.name}</span></p>
//                     <p>Mobile: <span>{item.Mob}</span></p>
//                     <p>Email: <span>{item.Email}</span></p>
//                     <p>City: <span>{item.City}</span></p>
//                     <p>Address: <span>{item.Address}</span></p>
//                     <p>DOB: <span>{item.DOB}</span></p>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default StudentProfileDetails;
