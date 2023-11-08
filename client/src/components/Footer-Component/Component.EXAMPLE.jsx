import React from "react";
import style from "./Style.EXAMPLE.module.scss";

const EXAMPLEComponent = () => {
  return (
    <div className={style.main}>
      <h1>This is an example component!</h1>
      <p>
        If you see a blue box with white text, the component and styling have
        rendered correctly.
      </p>
    </div>
  );
};

export default EXAMPLEComponent;
