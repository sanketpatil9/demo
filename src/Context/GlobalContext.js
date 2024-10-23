
import { createContext, useState } from "react";

export const CommonData = createContext();                         // CommonData is userDefined Var for context Api // CommonData ha object bnla .. CommonData ya obj ne apn khali context create kele ..//

export const GlobalContext = ({ children }) => {
    const name = "DeveloperGuru";
    const org_Id = 91;
    const org_Name = 'DG';

    // const [user,setUser] = useState(userData);
    // const userData= {
    //     name: 'Developer Guru',
    //     org_Id: 91,
    //     orgName: 'DG'
    // }

    // return (
    //     <CommonData.Provider value={{ username: user }} >                                     {/* username is key and value is name / Provider purn compo la deta provide krnyach kam krte ..This is obj we can pass multiple data//*/}
    //         {children}                                                                      {/* This allows GlobalContext to wrap other components */}
    //     </CommonData.Provider >
    // );


    return (
        <CommonData.Provider value={{ username: name, org_Id: 91, org_Name: org_Name }} > {/* username is key and value is name / Provider purn compo la deta provide krnyach kam krte ..This is obj we can pass multiple data//*/}
            {children}                                                                  {/* This allows GlobalContext to wrap other components */}
        </CommonData.Provider >
    );
}
// export default GlobalContext;



// With the help of context api we can share common deta, Any compo can access this common deta .//
// Context Api - Pratek component la Common Deta Pass karnyasathi bnvleli ek Srorage ahe. Kuthlyahi Component la as vatl Ki mla deta hava ahe ha common tr tya compo madhun fkt contect api la call kraycha direct specific tya compo la deta bhetun jail tyachya Props through deta pass krnyachi garaj nahi to dependent nahi independent houn jato..//
// Redux is used for Complexity Handling .. It is a Centralized System used for large amount of deta its a state Management //


// ************* POSTMAN TOOLS FOR API TESTING ************************ //

// Backend developer CURL LINK detat te import madhe paste keli tr automatic sarv fetched houn yete, otherwise manually sarv taka lagte ..//
// API chi details detana Backend developer 4 Goshti det aste 1) URL i.e.End-Points 2) Method (GET,..etc) 3) Request ( ekhadya API la ky request pathvaychi aplya side ni) 4) Te request pathvlyanntr tya API cha ky response yenar ahe te ..//
// Header madhun Authontication pass kel kate i.e. Pratek API cha response bhetnyasathi Authontication Token use kara lagte Te Backend cha developer Dete...//
// Body madhun raw select kel tr kahi API ashya astat tyanla front end kadun request dyavi lagte backend la ../ i.e. front kadhun kahi paylod pathvay asel tr   
// Body madhun payload pn pathvlya jato i.e. id that means tya id chya according aplyala deta bhetat aste ..///