import React, { useState } from "react";
import style from "./Style.SignUp.module.scss";
import loginLogo from "../../assets/images/Login-Logo.svg";
import axios from "axios";

const SignUpComponent = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleLoginType = () => {
    props.loginType("login");
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (
      userData.name === "" ||
      userData.surname === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      alert("Please fill in all the fields");
    } else {
      console.log(userData);
      axios
        .post("http://localhost:5000/api/addUser", userData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      alert("User Created! Navigating to Login Page");
      props.loginType("login");
    }
  };

  return (
    <div className={style.main}>
      <div className={style.loginBlock}>
        <div className={style.topSection}></div>
        <div className={style.formContainer}>
          <form
            onSubmit={handleCreateUser}
            className={[style.form1, style.form2].join(" ")}
          >
            <h2>Create an account</h2>
            <h3>Fill in the details to get started</h3> <br></br>
            <p className={style.label}>First Name</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              placeholder="Enter your First Name"
              className={style.input}
            ></input>
            <p className={style.label}>Surname</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, surname: e.target.value })
              }
              placeholder="Enter your Surname"
              className={style.input}
            ></input>
            <p className={style.label}>Your Email</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Enter your Email"
              className={style.input}
            ></input>
            <p className={style.label}>Your Password</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder="Enter your Password"
              type="password"
              className={style.input}
            ></input>
            <button type="submit" className={style.button}>
              Sign Up!
            </button>
            <br />
            <p onClick={handleLoginType} className={style.toLogin}>
              Back to Login
            </p>
          </form>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img src={loginLogo} alt="Login Image" className={style.image} />
      </div>
    </div>
  );
};

export default SignUpComponent;
