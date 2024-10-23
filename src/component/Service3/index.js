import React, { useEffect, useState } from "react";

const Service3 = ({ courseDetails, setClientDetails, msg, updateMe }) => {                  // service (parent madhun deta anla ithe serivce 3 (child madhe courseDetails madhe ahe)   / setClientDetails he service 3 madhun service 2 madhe janar ani to khali janar compo madhe )

    const [cDetails, setCdetails] = useState(courseDetails);   // default allocation //

    // ********************** ithun prt ata parent madhe deta pass krt aho ***************************//
    const clientDetails = [{ 'clientName': 'Flipcart' },
    { 'clientName': 'HSBC' },
    { 'clientName': 'LinkedIN' }
    ]

    useEffect(() => {
        setClientDetails(clientDetails);        // he ithe fkt define kel set he parent serivce madhe krav lagte / ithun adhi service 2 madhe janar vrtun fun madhun// 
    }, [])

    console.log('click me calling.....!', msg);      // parent to child ali he value ya madhe msg madhe welcome ahe i.e. service madhun ali tithe fun ahe yach // 

    console.log(cDetails, 'Inside service 33333');
    // console.log(courseDetails, 'Inside service 3');
    return <>
        <h1>This is Service3 Components</h1>
        {courseDetails?.map((item, index) => {
            return <div key={index}>
                <p>Name:<span>{item.name}</span></p>
                <p>Duration:<span>{item.duration}</span></p>
                <button className="btn btn-dark"onClick={()=>{updateMe('updated..')}}>Update</button>  {/* child madhun ha fun cha call updateMe & value updated parent madhe gheun challo ata / vrti interface madhun pass hote ya fun chall call  */}
            </div>
        })}
    </>
}

export default Service3;

// deta set / update karnyache 4 options ahet 1) useEffect 2) userDefine fun button vr click kelyavr 3) api vr set hoto / api call honar , api madhun response honar ani jshi condition valid honar tr tithe ch automatic set hoto to // 4) flag vrti set hoto deta 5) redux madhe instance update kelya jate dispatch kra lagte mnje functionlity madhe functiionality ahet as .. / 