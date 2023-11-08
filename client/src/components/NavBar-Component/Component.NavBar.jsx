import React from 'react';
import style from './Style.NavBar.module.scss';
import logo from '../../assets/images/logo.gif';
import loginIcon from '../../assets/icons/login.svg';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const NavBarComponent = (props) => {
  const user = props.user;
  const admin = props.admin;
  const urlLocation = window.location.href;
  console.log(urlLocation);

  let email_href =
    'https://mail.google.com/mail/?view=cm&fs=1&to=200109@virtualwindow.co.za' +
    '&su=openFlow+Query&body=Good+day,+OpenFlow!+Please+assist+me+regarding+openFlow.';

  return (
    <div className={style.main}>
      <img className={style.logoImg} src={logo} />
      {user && <p className={style.welcome}>Welcome {user.name}!</p>}
      <div className={style.search_nav_group}>
        <input className={style.search_nav} placeholder='Search' />
        <div className={style.search_button}>
          <BsSearch size={15} />
        </div>
      </div>
      <div className={style.links}>
        <Link to='/'>
          <div className={style.link}>Home</div>
        </Link>
        <Link to='/questions'>
          <div className={style.link}>Questions</div>
        </Link>
        <Link to='/answers'>
          <div className={style.link}>Answers</div>
        </Link>
        <a href={email_href} target='_blank'>
          <div className={style.link}>Contact Us</div>
        </a>
        {user ? (
          <Link to='/profile'>
            <div className={style.link}>Profile</div>
          </Link>
        ) : (
          <Link to='/login'>
            <div className={style.link}>
              <img
                className={style.loginIcon}
                src={loginIcon}
                alt='Login Icon'
              />
              Login
            </div>
          </Link>
        )}
        {urlLocation == 'http://localhost:3000/profile' && (
          <Link to='/'>
            <div className={style.link}>
              <img
                className={style.loginIcon}
                src={loginIcon}
                alt='Login Icon'
              />
              Logout
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBarComponent;
