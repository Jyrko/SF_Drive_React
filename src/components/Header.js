import React, { useState } from 'react';

import logo from '~/assets/svg/Logo.svg';
import LoginForm from './LoginForm';
const Header = (props) => {
  const [loginFlag, setLoginFlag] = useState(false);

  function onLoginButtonCLick(e) {
      e.preventDefault();
      setLoginFlag(!loginFlag);
      console.log("login flag was triggered. Current value: " + loginFlag)
  }

  function closeLoginWindow(e) {
    setLoginFlag(false);
  }

  return (
    <header>
      <img src={logo}/>
      <nav id="navigation">
        <ul>
          <li><a href="http://localhost:8080/home" className="nav_default_link">Главная</a></li>
          <li><a href="http://localhost:8080/" className="nav_default_link">О нас</a></li>
          <li><a href="http://localhost:8080/" className="nav_default_link">Условия</a></li>
          <li><a href="http://localhost:8080/faq" className="nav_default_link">Частые вопросы</a></li>
          <button id="login_button" onClick={onLoginButtonCLick}>Войти</button>
        </ul>
      </nav>
      <div id="burger_menu_button"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"/></svg></div>
      {loginFlag
      ? <LoginForm closeWindow={closeLoginWindow} />
      : <></>}
    </header>
  );
}

export default Header;
