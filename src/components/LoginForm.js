import React, {useState, useEffect} from 'react';
import axios from 'axios';

import authUser from '~/functions/authUser';

import '~/styles/login_form.scss';
import authImg from '~/assets/svg/authorization.svg';
import recoveryImg from '~/assets/svg/recovery_password.svg';
import checkEmailImg from '~/assets/svg/check_email.svg';


function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isRecoveryActive, setIsRecoveryActive] = useState(false);


  const [isLoginWindow, setIsLoginWindow] = useState(true);
  const [isRecoveryWindow, setIsRecoveryWindow] = useState(false);
  const [isRecoverySentWindow, setIsRecoverySentWindow] = useState(false);
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PASSWORD_REGEX = /^[a-zA-Z0-9_-]{8,}$/;


  function validateLoginFields() {
    if (EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
      console.log("Login Valid")
      setIsLoginActive(true);
    } else {
      console.log("Login Inactive")
      setIsLoginActive(false);
    }
  }

  function validateRecoveryFields() {
    if (EMAIL_REGEX.test(email)) {
      console.log("Recovery Valid")
      setIsRecoveryActive(true);
    } else {
      console.log("Recovery Inactive")
      setIsRecoveryActive(false);
    }
  }
  useEffect(() => {
    if (isLoginWindow) {
      validateLoginFields();
    } else {
      validateRecoveryFields();
    }
  })

  async function onLoginFormSubmit(e) {
    e.preventDefault();
    if (isLoginActive) {
      await authUser(email, password);
      window.location.reload(false);
    }
  }

  function onForgotPassClick(e) {
    e.preventDefault();
    setIsLoginWindow(false);
    setIsRecoveryWindow(true);
  }

  function onReturnBtnClick(e) {
    e.preventDefault();
    setIsLoginWindow(true);
    setIsRecoveryWindow(false);
  }

  function onRecoverySubmitClick(e) {
    e.preventDefault();
    if (!isRecoveryActive) return;

    setIsRecoverySentWindow(true);
    setIsRecoveryWindow(false);
  }

  return (
    <div className="login_form">
      <div className="login_form_main">
        <div className="login_form_main_close_btn" onClick={(e) => props.closeWindow(e)}>
          <svg className="login_form_main_close_btn_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/></svg>
        </div>

        { isLoginWindow
          ?
        <div className="login_form_main_wrapper">
          <img src={authImg}/>
          <h2 className="login_form_main_wrapper_title">Авторизация</h2>
          <form className="login_form_main_wrapper_form" onSubmit={onLoginFormSubmit}>
            <input type="email" placeholder="Электронная почта" onChange={(e) => setEmail(e.target.value)}></input>
            <div className="login_form_main_wrapper_form_password_field_div">
              <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}></input>
              <button onClick={onForgotPassClick} className="forgot-pass">Забыли пароль?</button>
            </div>
            <button type="submit" className={isLoginActive ? "submit-btn" : "submit-btn is-inactive"}>Войти</button>
          </form>
          <hr />
          <a className="login_form_main_wrapper_singup_btn"href="http://localhost:8080/singup">Зарегестрироваться</a>
        </div>
        :
        isRecoveryWindow
        ?
        <>
          <div className="login_form_main_return_btn" onClick={onReturnBtnClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0002 6.99996V8.99996H4.00016L9.50016 14.5L8.08016 15.92L0.160156 7.99996L8.08016 0.0799561L9.50016 1.49996L4.00016 6.99996H16.0002Z" fill="#1B1B1B"/></svg>
          </div>
          <div className="login_form_main_restore_wrapper">
            <img src={recoveryImg} />
            <h2 className="login_form_main_restore_wrapper_title">Восстановление Пароля</h2>
            <p className="login_form_main_restore_wrapper_description">Мы отправим ссылку для восстановления пароля <br />на вашу электронную почту</p>
            <form className="login_form_main_wrapper_form">
              <input type="email" placeholder="Электронная почта" onChange={(e) => setEmail(e.target.value)}></input>
              <button type="submit" className={isRecoveryActive ? "submit-btn" : "submit-btn is-inactive"} onClick={onRecoverySubmitClick}>Отправить</button>
            </form>
          </div>
        </>
        :
        <div className="login_form_main_recovery_sent_wrapper">
          <img src={checkEmailImg} />
          <h2 className="login_form_main_recovery_sent_wrapper_title">Проверьте почту</h2>
          <p className="login_form_main_recovery_sent_wrapper_description">Мы отправили письмо на вашу почту, пройдите по ссылке,<br />которую мы отправили и измените пароль.</p>
         </div>
      }
      </div>
    </div>
  )
}

export default LoginForm;
