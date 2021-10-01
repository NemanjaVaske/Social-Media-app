import { useRef, useContext } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Login=()=>{

    const history = useHistory();
    const email = useRef();
    const password=useRef();
    const { user, isFetching, dispatch} = useContext(AuthContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value}, dispatch);
    }
    console.log(user);

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Nelesocial</h3>
                    <span className="loginDesc">Connect with friends and world around you on Nelesocial.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Email" required type="email" className="loginInput" ref={email} />
                        <input placeholder="Password" required type="password" minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching? <CircularProgress color="secondary" size="20px"/>: "Log In"}</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterButton" onClick={()=>history.push("/register")}>{isFetching? <CircularProgress color="secondary" size="20px"/>: "Create a New Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;