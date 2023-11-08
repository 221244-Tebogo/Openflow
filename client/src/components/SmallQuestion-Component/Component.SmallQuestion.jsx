import React from "react";
import style from "./Style.SmallQuestion.module.scss";
import TagComponent from "../TagComponent/Component.Tag";

const SmallQuestionComponent = (props) => {
  let question = props.question;
  // let tags = props.tags;
  console.log(props);

  return (
    <div className={style.main}>
      {props.answered === true ? (
          <div className={style.statusIndicatorGreen}></div>
        ) : (
          <div className={style.statusIndicatorRed}></div>
        )}
      <p>{question}</p>

      <div className={style.tags}>
        <TagComponent />
        
      </div>
      
    </div>
  );
};

export default SmallQuestionComponent;
