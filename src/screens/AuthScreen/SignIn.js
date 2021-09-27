import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { auth } from "../../config/firebase";
import { login, signInAPI } from "../../store/authActions";
import "./Register.css";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(login(userAuth.user));
    });
  };

  const handleClickRegister = () => {
    props.history.push("/register");
  };

  if (user) return <Redirect to="/home" />;
  return (
    <div className="login">
      <img
        src="/images/login-logo.svg"
        alt="LinkedIn Logo"
        onClick={() => props.history.push("/")}
      />
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>
      </form>
      <h2>
        <span>OR</span>
      </h2>
      <div className="login__google">
        <button onClick={() => dispatch(signInAPI())}>
          <img src="/images/google.svg" alt="google-logo" />
          Sign in with Google
        </button>
      </div>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={handleClickRegister}>
          Register
        </span>
      </p>
    </div>
  );
}

export default SignIn;
