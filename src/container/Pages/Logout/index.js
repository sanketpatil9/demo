import { useEffect } from "react";
import styles from './Logout.module.scss';

const Logout = () => {

    useEffect(() => {
        localStorage.removeItem('loginValue');                          // loginvalue remove keli mins localstorage empty honar ani automatic login chya page vr redirect honar ..//
    }, [])


    return (<>

    </>)
}

export default Logout;