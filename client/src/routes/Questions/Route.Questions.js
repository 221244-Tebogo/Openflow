import React from "react";
import style from "./Style.Questions.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import QuestionBoxComponent from "../../components/QuestionBox-Component/Component.QuestionBox";

const QuestionsRoute = (props) => {
  const user = props.user;
  const admin = props.admin;

  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent admin={admin} user={user} />
        <h1 className={style.heading}> What do you need help with?</h1>
        <QuestionBoxComponent user={user} admin={admin}/>
      </div>
    </div>
  );
};

export default QuestionsRoute;
