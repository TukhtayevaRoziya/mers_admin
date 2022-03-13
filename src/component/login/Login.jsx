import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import style from "./Login.module.css";

import LoginWithGoogle from "./LoginWithGoogle";

export const Login = () => {
  return (
    <div className={style.Login}>
      <div className={style.logo_block}>
        <img src={logo} alt="" />
      </div>
      <div className={style.main_block}>
        <header>
          <h1> Already a member? </h1> <NavLink to={'/signIn'}> Sign in </NavLink>
        </header>
        <div className={style.main_box_body}>
          <div className={style.main_box}>
            <h1>Sign up</h1>
            <p>Sign up with Open account</p>
            <LoginWithGoogle />
            <hr color="#EFEFEF" style={{ marginTop: "1.5rem" }} />
            <h3>Or continue with email address</h3>
            <div className={style.input_body}>
              ✉ <input type="text" autoFocus={true} placeholder="Your email" />
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
