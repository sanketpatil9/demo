import { useEffect } from "react";
// import React from "react";
import style from './ProtectedRoute.module.scss';
import { useNavigate } from "react-router-dom";



const ProtectedRoute = (props) => {             // props chya jagi kahi pn chalnar ,,,//

    const navigate = useNavigate();                             // use for navigation for one component to another ..//
    console.log(props, "Props@@###");
    const { Comp } = props;                         //  routers madhle sarv component Comp madhe ghetle hote ani ithe te props parameter madhe ghetle hote ani ithe Comp la assign kele mins ata Comp madhe sarv component ahet//
    console.log(Comp, 'Comp@@@@@');                 // console madhe obj madhe gheto mhanun ithe vrti   const  { Comp } = props;   ithe { dil }
    // authontication use kraych asl tr ch protected routing use krtat nahi t nahi./

    useEffect(() => {
        let login = localStorage.getItem('loginValue');   // ithe loginValue false zali logout madhe removeItem kel mhanun../ so khalchi condition true zali 
        if(!login)                 // false asel tr login la redirect kr ani ..// logout madhe te false hote // 
                                    // (!login) ya login var chya adhi ! not takla tr te false consider krte ani kahi ch nsl fkt login ch asl tr true consider krte ..//
        {
            navigate('/');                      // true
        }
    });



    return <>
        <h1>Protected Router</h1>

        <Comp />                                {/* ithun sarv component render hot ahet ..// */}
    </>
}

export default ProtectedRoute;



// Protected route he authontication sathi use kelya jate ani tyach logic ithe aste protected route madhe..//