import React, { useState } from 'react';
import style from './Style.LogIn.module.scss';
import loginLogo from '../../assets/images/Login-Logo.svg';
import axios from 'axios';

const LogInComponent = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleLoginType = () => {
    props.loginType('signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userInfo.email === '' || userInfo.password === '') {
      alert('Please fill in all the fields');
    } else {
      console.log(userInfo);
      axios
        .post('http://localhost:5000/api/login', userInfo)
        .then((res) => {
          debugger;
          console.log('logged in user : ', res);
          sessionStorage.setItem('JWT', res.data.token);
          console.log(
            'jwt in session storage : ',
            sessionStorage.getItem('JWT')
          );
          window.location = '/home';
        })
        .catch((err) => {
          console.log(err);
          alert('Invalid username or password');
        });
    }
  };

  return (
    <div className={style.main}>
      <div className={style.loginBlock}>
        <div className={style.formContainer}>
          <form onSubmit={handleLogin} className={style.form1}>
            <div className={style.centered}>
              <h2>Welcome</h2>
              <h3 className={style.centered} style={{ marginBottom: '10px' }}>
                Login to continue
              </h3>
              <br></br>
            </div>
            <p className={style.label}>Your Email</p>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              placeholder='Enter your Email'
              className={style.input}
            ></input>
            <p className={style.label}>Your Password</p>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              type='password'
              placeholder='Enter your Password'
              className={style.input}
            ></input>
            <div className={style.dFlex}>
              <div className={style.formCheck}>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='d-flex'
                />
                <label className='form-check-label' htmlFor='d-flex'>
                  Remember password
                </label>
              </div>

              <a href='#' className={style.link}>
                Forgot Password
              </a>
            </div>
            <button type='submit' className={style.button}>
              Submit
            </button>
            <br />
            <p className={style.toSignIn}>
              Don't have an account?{' '}
              <span onClick={handleLoginType}>Sign Up here!</span>
            </p>
          </form>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img src={loginLogo} alt='Login Image' className={style.image} />
      </div>
    </div>
  );
};

export default LogInComponent;
