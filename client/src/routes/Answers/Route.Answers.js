import React, { useEffect, useState } from "react";
import style from "../Answers/Style.Answers.module.scss";
import QUESTIONComponent from "../../components/QuestionsComponent/Component.Questions";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import axios from "axios";

const AnswersRoute = (props) => {
  const user = props.user;
  const admin = props.admin;

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getQuestions")
      .then((response) => {
        let data = response.data;
        console.log(data);
        setQuestions(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent admin={admin} user={user} />
        <div className={style.questionContainer}>
          <div className={style.unansweredSection}>
            <h2 className={style.sectionHeading}>Unanswered Questions</h2>
            {questions.map((questions, index) => {
              return <QUESTIONComponent key={index} questionsData={questions} answered={false} />;
            })}
          </div>
          <div className={style.answeredSection}>
            <h2 className={style.sectionHeading}>Answered Questions</h2>
            {questions.map((questions, index) => {
              return <QUESTIONComponent key={index} questionsData={questions} answered={true} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswersRoute;
