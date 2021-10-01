import { useRef, useContext } from 'react';
import './register.css';
import { registerCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const Register=()=>{

    const history = useHistory();
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    
    const { dispatch } = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.current.value !== passwordAgain.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match! ");
        }
        else{
           const user = {
               username: username.current.value,
               email: email.current.value,
               password: password.current.value
           }
           registerCall(user, dispatch);
        }
    }
    
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Nelesocial</h3>
                    <span className="loginDesc">Connect with friends and world around you on Nelesocial.</span>
                </div>
                <form className="loginRight" onSubmit={handleSubmit}>
                    <div className="loginBox">
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} type="email" className="loginInput" />
                        <input placeholder="Password" required ref={password} type="password" minLength="6" className="loginInput" />
                        <input placeholder="Password Again" required ref={passwordAgain} type="password" className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton" onClick={()=>history.push("/login")}>Log into Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;