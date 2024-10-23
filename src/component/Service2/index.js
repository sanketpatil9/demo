import React, { useEffect, useState } from "react";
import styles from './Service2.module.scss';
import Service3 from "../Service3";

const Service2 = ({ courseDetails,setNewClientDetails,msg,updateMe}) => {   // setNewCliendDetails ha vari badalla 'setNewCliendDetails' ha set kela useEffect madhe //
    const [clientDetails,setClientDetails] = useState();       // state bnvli ithe update karnyasathi mg to variable khali ui madhe kuth pn use kara no problem  / jr ithe ch use kraychi asel tr ithe ch ashi state kraychi use krauychi asel ithe ch tr as kara state bnva//
    console.log(courseDetails, 'Inside service2');
    console.log(clientDetails, 'Back Inside service 2 from service 3');     // deta ala ki nahi check kel console takun //

    useEffect(()=>{
        setNewClientDetails(clientDetails);          // set kela ithun
    },[clientDetails])            //clientDetails he dependencies pass keli nahi tr value undefined ch dakhvt hoti dependencies mule pratek veles call hot aste 

    return <>
        <h1>This is Service2 Components</h1>
        <div>
            <Service3         /* ithun service3 la ptvla   // service 3 cha deta sdrvice 2 madhe ghya cha asel tr to always ithe yenar khali ani ithun jr service1 la patvaycha asel tr to varun janar pathimage*/
            courseDetails={courseDetails} 
            setClientDetails={setClientDetails}        // setClientDetails he service 3 madhun ithe service 2 la ala / jr yala service 1 la nsel pathvaychha tr ithe ch state bnvavi lagel//
            msg={msg}
            updateMe={updateMe}                         // service 3 madhun ala ha call fun cha ithe child madhe & ithun means varun janar prt to return service 1 madhe //
            />
        </div>
    </>
}

export default Service2;



//   Line 5:34:  Parsing error: Identifier 'setClientDetails' has already been declared. (5:34)
//   service 3 madhun value ghetli service 2 madhe alot te value ithe use keli ani mg nntr use karun prt pathvtay tyach same variable ni pathvli mhanun asa error yete tr ti value janar nahi tyach mhann ahe set client detaila allready declared //


