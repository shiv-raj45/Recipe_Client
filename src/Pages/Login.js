import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Css/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, getUserDetails } from '../Features/userSlice'
import baseURL from '../utils/utils'
function Login() {
    const [formerror, setFormerror] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setdata] = useState({
        email: '',
        password: ''
    });
/* validating form starts */
    const validate = (data) => {
        let errors = ""
        if (!data.email || !data.password) { errors = "fill the complete form" }
        else if (!data.password || data.password.length < 6) {
            errors = " password length too short"
        }
        return errors
    }
/* validating form finishes */

    const handleChange = (e) => {

        const { name, value } = e.target;
        setdata({ ...data, [name]: value })  //the name attribute of text element and name of state is kept same and 
        //state is manipulated accordingly


    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormerror(validate(data)); //if there is error in form don't submit the form show errors
        if (validate(data)) {
            setFormerror(validate(data))   //form will be submitted only if theform is validated

        }
        else {
            setFormerror("")
            postLoginForm(data);
        }
    }
    const postLoginForm = async (userInfo) => {
        const { data } = await axios.post(`${baseURL}/login`, userInfo);
        if (data.error) { setFormerror(data.error) }
        else {
            await localStorage.setItem("accessToken", data.token);
           await  dispatch(authenticate(true));
            navigate('/')
        }
    }
    return (
        <div className="login">
            <span className="login_title"> Login!!!</span>
 {/* form starts here */}
            <form onSubmit={handleSubmit} className="loginForm">
                {formerror && <>  <span className="login_error" >  {formerror}</span></>}


                <label htmlFor="email">email</label>

                <input className="loginInput"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                    placeholder="email@gmail.com"
      
      />
                <label htmlFor="password">password</label>
                <input className="loginInput"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    name="password"
                    value={data.password}
                    placeholder="Password"

                />

                <button type="submit" className="loginSubmit" > log in</button>
{/* signin button */}
                <div className="signin_wrapper">Don't have an account?
                    <button className="signin_button" onClick={() => navigate('/signup')}>Sign up</button>

                </div>
            </form>
{/* form finishes here */}

        </div>
    )
}

export default Login
