import React from "react";
import style from "./Style.HomeHeader.module.scss";
import headerSvg from "../../assets/images/Header.svg";

const HomeHeaderComponent = () => {
  return (
    <div className={style.main}>
      <img className={style.image} src={headerSvg}/>
    </div>
  );
};

export default HomeHeaderComponent;
