import React, { useEffect, useState } from "react";
import style from "./Style.QuestionBox.module.scss";
import axios from "axios";

const QuestionBoxComponent = (props) => {
  let user = props.user;

  const [question, setQuestion] = useState({
    title: "",
    tags: [],
    description: "",
    author: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
    console.log(question);
  };

  const handleAddQuestion = (e) => {
    if (user) {
      question.author = user.name;
    } else {
      question.author = "Anonymous";
    }
    e.preventDefault();
    if (!question.title || !question.tags || !question.description) {
      console.log("Please fill out all fields.");
      return;
    } else {
      axios
        .post(`http://localhost:5000/api/addQuestion`, question)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
  };

  return (
    <div className={style.main}>
      <form onSubmit={handleAddQuestion} className={style.content}>
        <div className={style.left}>
          <div className={style.BoxesBar}>
            <label className={style.BoxesLabel}>Question</label>
            <input
              name="title"
              value={question.question}
              onChange={handleInputChange}
              className={style.BoxesInput}
            />
          </div>
          <div className={style.BoxesBar}>
            <label className={style.BoxesLabel}>Tags</label>
            <input
              name="tags"
              value={question.tags}
              onChange={handleInputChange}
              className={style.BoxesInput}
            />
          </div>
          <div className={style.BoxesBar2}>
            <label className={style.BoxesLabel}>Description</label>
            <input
              name="description"
              value={question.description}
              onChange={handleInputChange}
              className={style.BoxesInput}
            />
          </div>
        </div>
        <div className={style.right}>
          <div
            className={style.DropBox}
          >
            <center>
              Paste Image
              <br />
              Link Here:
              <br />
              <input
                placeholder="https://..."
                className={style.ImageLink}
                name="image"
                value={question.image}
                onChange={handleInputChange}
              ></input>
            </center>
          </div>

          <button type="submit" className={style.SubmitButton}>
            Upload Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionBoxComponent;
