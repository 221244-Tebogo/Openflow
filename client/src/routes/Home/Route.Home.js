import React from 'react';
import style from './Style.Home.module.scss';
import NavBarComponent from '../../components/NavBar-Component/Component.NavBar';
import SmallQuestionComponent from '../../components/SmallQuestion-Component/Component.SmallQuestion';

const HomeRoute = (props) => {
  console.log('user in home route :', props.user);
  const user = props.user;
  const admin = props.admin;

  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent admin={admin} user={user} />
        <h1 className={style.heading}> Welcome To OpenFlow!</h1>
        <p className={style.text}>
          Empowering Curiosity. Connect, Ask, and Share Knowledge with Our
          Community of Inquisitive Minds. Explore Today!
        </p>
        <div className={style.searchBar}>
          <input
            placeholder='Start Typing...'
            className={style.searchInput}
          ></input>
        </div>
        <div className={style.topQuestions}>
          <h1>Top Questions</h1>
          <div className={style.questionCarousel}>
            <SmallQuestionComponent
              question={'Where can I find my dependancies?'}
              answered={true}
            />
            <SmallQuestionComponent
              question={'How do I add a CSS file?'}
              answered={true}
            />
            <SmallQuestionComponent
              question={'Snippet broken, please assist.'}
              answered={false}
            />
            <SmallQuestionComponent
              question={'How do I install React?'}
              answered={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
