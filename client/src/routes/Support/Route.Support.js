import React from "react";
import style from "./Style.Support.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";

const SupportRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <h1 className={style.heading}> Support </h1>
      </div>
    </div>
  );
};

export default SupportRoute;
