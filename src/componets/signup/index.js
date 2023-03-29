import React, {useState} from "react";
import SignUp from "./Signup.module.css"
import {Link,useNavigate} from "react-router-dom"

import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import {signup, signupGoogle} from "../../redux/actions/auth";


const InitState = {
    email: '',
    password: '',
}


function Signup() {
    const nagivate = useNavigate();
    const dispatch = useDispatch();
    const [sForm,setsForm] = useState(InitState)

    const handleChange = (e) => setsForm({
        ...sForm,
        [e.target.name]: e.target.value
    });

    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

        dispatch(signupGoogle(accessToken,nagivate))
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        if ( sForm.password !== "" && sForm.email !== "" ) {
            dispatch(signup(sForm,nagivate))
        }
    }

    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});
    return (
        <div className={SignUp.loginContainer}>
            <div className={SignUp.loginContainerv2}>
                <h1>Create your account</h1>

                <div className={SignUp.inputContainer}>
                    <label>EMAIL</label>
                    <input name="email" onChange={handleChange} placeholder="enter your email" type="email"/>
                </div>

                <div className={SignUp.inputContainer}>
                    <label>PASSWORD</label>
                    <input name="password" onChange={handleChange} placeholder="enter your password" type="password"/>
                </div>

                <button onClick={handleOnSubmit} className={SignUp.loginBTN}>REGISTER</button>
                 <span className={SignUp.or}>or</span>
                 <button  onClick={() => login()}  className={SignUp.googleBTN}>
                    <i class="fa-brands fa-google"></i>  Sign up with google</button>

                    <div className={SignUp.reg}>
                        <div>
                            Already Signed Up? <Link className={SignUp.singupBTN} to="/account/login">Login</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;