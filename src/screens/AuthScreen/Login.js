import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import { signInAPI } from '../../store/authActions';
import './Login.css'



function Login(props) {
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleJoinClick = () => {
        props.history.push('/register')
    };

    const handleSignInClick = () => {
        props.history.push('/signIn')
    }

    if(user) return <Redirect to='/home' />

    return (
        <div className="login">
            <div className="login__nav">
                <a href="/">
                    <img src="/images/login-logo.svg" alt="login-logo" />
                </a>
                <div className="login__navRight">
                    <a href="/register" className="nav__tertiaryButton" onClick={handleJoinClick}>Join Now</a>
                    <a href="/login" className="nav__secondaryButton" onClick={handleSignInClick}>Sign In</a>
                </div>
            </div>
            <div className="login__section">
                <div className="login__hero">
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt="login-hero" />
                </div>
                <div className="login__button">
                    <button onClick={() => dispatch(signInAPI())}>
                        <img src="/images/google.svg" alt="google-logo" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
