import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/authActions';
import './Login.css';


function Login() {

    const [ name, setName ] = useState("");
    const [ profilePic, setProfilePic ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        
    };

    const handleRegister = () => {
        if(!name){
            return alert('Please enter your full name!')
        }else{
            dispatch(register({
                email: email,
                password: password,
                name: name,
                profilePic: profilePic
            }))  
        }
    };

    return (
        <div className="login">
            <img src="/images/linkedin_name_icon.svg" alt="LinkedIn Logo" />
            <form onSubmit={handleLogin}>
                <input placeholder="Full name (required if registering)" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Profile pic URL (optional)" type="url" value={profilePic} onChange={(e) => setProfilePic(e.target.value)}/>
                <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Sign In</button>
            </form>
            <p>
                Not a member?{" "}
                <span className="login__register" onClick={handleRegister}>Register Now</span>
            </p>
        </div>
    )
}

export default Login 
