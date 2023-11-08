import React from "react";
import style from "./Style.Profile.module.scss";
import loginLogo from "../../assets/images/Login-Logo.svg";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import ProfileComponent from "../../components/Profile-Component/Component.Profile";

const ProfileRoute = (props) => {
  const user = props.user;
  const admin = props.admin;
  return (
    <div className={style.main}>
      <NavBarComponent admin={admin} user={user} />
      <ProfileComponent />
    </div>
  );
};

export default ProfileRoute;
