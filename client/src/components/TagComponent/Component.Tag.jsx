import React from "react";
import style from "./Style.Tag.module.scss";

const TagComponent = (props) => {

  const tag = props.tag ?? "MongoDB";

  return (
    <div className={style.main}>
      <p className={style.text}>{tag}</p>
    </div>
  );
};

export default TagComponent;
