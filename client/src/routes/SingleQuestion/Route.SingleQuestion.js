import React, { useEffect, useState } from "react";
import style from "../SingleQuestion/Style.SingleQuestion.module.scss";
import QUESTIONComponent from "../../components/QuestionsComponent/Component.Questions";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import axios from "axios";
import TagComponent from "../../components/TagComponent/Component.Tag";

const SingleQuestionRoute = (props) => {
  const user = props.user;
  const admin = props.admin;
  const urlParams = new URLSearchParams(window.location.search);
  const questionId = urlParams.get("id");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getQuestion/${questionId}`)
      .then((response) => {
        let data = response.data;
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formattedDate = new Date(data.date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent admin={admin} user={user} />
        <div className={style.questionContainer}>
          <div className={style.question}>
            <h1>Question - {data.title}</h1>
            <p className={style.author}>- posted by {data.author}</p>
            <p className={style.author}>at {formattedDate}</p>
            <br />
            <p>{data.description}</p>
            <br />
            {data.image && (
              <>
                <p>Image:</p>
                <img className={style.questionImage} src={data.image} />
              </>
            )}
            {data.tags && (
              <>
                <p>Tags:</p>
                <br />
              </>
            )}
            <div className={style.tagBox}>
              {data.tags &&
                data.tags.map((tag, index) => (
                  <TagComponent key={index} tag={tag} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestionRoute;
