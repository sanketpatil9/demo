import React from "react";
import styles from './Service1.module.scss';
import Service2 from "../Service2";

const Service1 = ({ courseDetails,setNewClientDetails,msg,updateMe }) => {              // courseDeatils1 service parent madhun as a props ghetla mhanun ikde ghetla object madhe / parent madhun ala mhanun ikde vr ghetla fun madhe /
    console.log(courseDetails, 'INside service1');
    return <>
        <div>
            <h1>This is Service1 Components</h1>
            <div>
                <Service2       // {/* ithun service2 la pathvlal as a props */}
                 courseDetails={courseDetails} 
                 setNewClientDetails={setNewClientDetails}       // he value setClientDetails service 2 madhun ithe service 1 la anli he jr ithe ch use kraychi asel tr state banva ani use kara //
                 msg={msg}
                 updateMe={updateMe}                            // ha fun cha call service 3 madhun service 2 madhe ala ani service 2 madhun ithe service 1 la ala ani vrun prt janar return mieans service la i.e. parent la //
                />
            </div>
        </div>
    </>
}

export default Service1;