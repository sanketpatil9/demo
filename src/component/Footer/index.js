import React from "react";
import "./Footer.css";

const Footer = ({footerValue,isEnable}) => {        // (footerValue) parent home compo madhun as a props ghetli //  // ekapeksha jast value ghetlya so ithe object ghetlya //
 
  const v = 'visible';
  // console.log( 'isEnable', isEnable);
  // console.log('footerValue',footerValue);

  return (
    <div>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024    The  { v === isEnable? footerValue :'Microsoft'} . All rights reserved.</p>    {/*[0] bcz array madhe ahe/ obj madhe ahe mhanun footerValue. lihil */}
        <p>Powered by Sanket Patil</p>
      </div>
    </footer>
  </div>
  );
};

export default Footer;















// <p>&copy; {new Date().getFullYear()}    The  {footerValue.footerValue} . All rights reserved.</p> = <p>&copy; {new Date().getFullYear()}    The  {footerValue} . All rights reserved.</p>  vrti object bnvala so only {footerValue} lihila //