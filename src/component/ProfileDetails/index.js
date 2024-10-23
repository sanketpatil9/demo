import React, { useEffect,useState,useContext } from "react";
import styles from './ProfileDetails.module.scss';
//import { CommonData } from "../../App";               // App madhun ala for Context Api ..//

const ProfileDetails = ({ profileDetils, msg, visible, details, user, setuserData }) => {                      // profileDetils parameter blog madhun ghetla as a props //  // parent madhun props child madhe ghyache astil tr ithe vrti define karayche fun chya aat ani khali use karayche //
    // msg pn blog madhun as a props(deta) received zala ithe so tyala fun chya aat ghetl tya madhe 'GM' value ahe ani tyala khali {msg} as define kel //

    // useEffect(()=>{
    //     if(visible)                                                 // value kshi jate check karnyasathi trial puroses //
    //     {
    //         user=['HTML','CSS','BOOTSTRAP','REACT JS'];             // value kshi jate check karnyasathi trial puroses //
    //     }
    // },[])   


    const userData = [{ 'useName': 'Hustler', 'Password': 'Hustler@1234' },
                     { 'useName': 'HustlerRocks', 'Password': 'HustlerRocks@1234' }
                    ];

    //const getuserName = useContext(CommonData);        // For context Api 
    //console.log(getuserName,'Sankuuu');               // For Context Api 

    useEffect(()=>{
        setuserData(userData)
    },[])                

    return (
        <>
            <h3 className="text-dark">Welcome  {visible ? msg : ''} </h3>         {/* blog chya parent compo madhun alela parameter ithe pass kela / userName is for context api */}
            {profileDetils?.map((item, index) => {
                return <div key={index}>
                    <p>Name:<span>{item.Name}</span></p>
                    <p>Email:<span>{item.Email}</span></p>
                    <p>Mob:<span>{item.Mob}</span></p>

                    <button className="btn btn-dark" onClick={() => { details(['Goood Morning Sanket', 'Welcome In PUNE']) }} >More-Details</button>             {/*fun call kartanna same ch nav vrti pass kra lagte received pn same ch navane zal pahije parent madhe // sarv thikani ref var must be same */}

                </div>
            })}

        </>
    )
}

export default ProfileDetails;










// New page open zal pahije i.e. component create kraycha //