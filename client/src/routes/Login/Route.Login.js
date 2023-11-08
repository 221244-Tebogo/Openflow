import React, { useState } from "react";
import style from "./Style.Login.module.scss";
import LogInComponent from "../../components/LogIn-Component/Component.LogIn";
import SignUpComponent from "../../components/SignUp-Component/Component.SignUp";

const LoginRoute = () => {
  const [loginType, setLoginType] = useState("login");

  return (
    <>
      {loginType === "login" ? (
        <LogInComponent loginType={setLoginType} />
      ) : (
        <SignUpComponent loginType={setLoginType} />
      )}
    </>
  );
};

export default LoginRoute;
