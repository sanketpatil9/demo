import { useEffect } from "react";
import styles from './Login.module.scss';
import { useNavigate } from "react-router-dom";  // internal navigation sathi import kel react-router-dom madhun..//


const Login = () => {
    const navigate = useNavigate();

    const dashboardLogin = () => {
        localStorage.setItem('loginValue', true);
        navigate('/');
    }

    useEffect(() => {
        console.log('useeefect calling...!')
        let login = localStorage.getItem('loginValue');
        console.log('login', login);
        if (login) {                        // login true asl tr ch home vr redirect hoil login chi value true set ahe localStorage madhe ..//
            navigate('/Home');
        }
    });


    return <div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto mt-5 border border-2 border-danger p-5 shadow-1g rounded-3">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Enter Username</label>
                            <input type="text" class="form-control" placeholder="Enter Username" />

                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Enter Password</label>
                            <input type="text" class="form-control" placeholder="Enter Password" />
                        </div><br />
                        <button className="btn btn-primary" onClick={() => { dashboardLogin() }}>Login</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
}

export default Login;