import React from "react";

const LoginSignUp = () => {
  return (
    <div className="login_page_body">
      <div className="login_page">
        <div className="status_buttons">
          <button className="login_button">LOGIN</button>
          <button className="register_button">REGISTER</button>
        </div>
        <div className="links_login">
          <p>Sign in with </p>
          <div className="login_icons">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <p>or</p>
        </div>
        <input
          type="text"
          className="enter_email"
          placeholder="Email or username"
        />
        <input type="text" className="enter_password" placeholder="Password" />
        <div className="login_options">
          <p className="login_checkbox">
            <input type="checkbox" /> Remeber Me
          </p>
          <p className="login_forgot_pass">Forgot Password?</p>
        </div>
        <p className="login_NotaMember">
          Not a member? <span className="login_register_link">Register</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
