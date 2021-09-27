import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { auth } from "../../config/firebase";
import { login, signInAPI } from "../../store/authActions";
import "./Register.css";

function LoginRegister(props) {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClickSignIn = () => {
    props.history.push("/signin");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter your full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(login(userAuth.user));
          });
      })
      .catch((error) => alert(error));
  };

  if (user) return <Redirect to="/home" />;
  return (
    <div className="login">
      <img
        src="/images/login-logo.svg"
        alt="LinkedIn Logo"
        onClick={() => props.history.push("/")}
      />
      <form onSubmit={handleRegister}>
        <input
          placeholder="Full name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Profile pic URL (optional)"
          type="url"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
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
        <button type="submit" onClick={handleRegister}>
          Join
        </button>
      </form>
      <h2>
        <span>OR</span>
      </h2>
      <div className="login__google">
        <button onClick={() => dispatch(signInAPI())}>
          <img src="/images/google.svg" alt="google-logo" />
          Join with Google
        </button>
      </div>
      <p>
        Already on LinkedIn?{" "}
        <span className="login__register" onClick={handleClickSignIn}>
          Sign in
        </span>
      </p>
    </div>
  );
}

export default LoginRegister;
