import React, { useState, useEffect } from 'react';
import { ACCESS_TOKEN_KEY, NO_IMAGE_AVAILABLE, USER_ID_KEY, USER_FULLNAME_KEY } from "~/constants";
import { Link } from 'react-router-dom';

import LoginForm from '../LoginForm';
import Loading from '~/components/Loading';

import validateUser from '~/functions/validateUser';
import getUserImageById from '~/functions/getUserImageById';
import editImagePathToCurrentHost from '~/functions/additional/editImagePathToCurrentHost';

import logo from '~/assets/svg/Logo.svg';
import profileImage from '~/assets/img/rent_car_search_page/recommended_cars/owner.png';

const Header = (props) => {
  const username = sessionStorage.getItem(USER_FULLNAME_KEY);
  const [userImageUrl, setUserImageUrl] = useState(NO_IMAGE_AVAILABLE);

  const [loginFlag, setLoginFlag] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [validUser, setValidUser] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const isValidUser = await validateUser();
    const userImage = await getUserImageById(sessionStorage.getItem(USER_ID_KEY));
    console.log(userImage);
    setValidUser(isValidUser);
    setUserImageUrl(editImagePathToCurrentHost(userImage.profileImage));
    setLoading(false)
  }, [])

  function onLoginButtonCLick(e) {
      e.preventDefault();
      setLoginFlag(!loginFlag);
      console.log("login flag was triggered. Current value: " + loginFlag)
  }

  function closeLoginWindow(e) {
    setLoginFlag(false);
  }

  function burgerOnOpen(e) {
    e.preventDefault();
    setBurgerOpen(!burgerOpen)
  }

  const headerDesktop =
  <div>
    <img src={logo}/>
    <nav id="navigation">
      <ul>
        { validUser ?
          <>
         <li><a href="/authed" className="nav_default_link">Reservations</a></li>
         <li><a href="/authed/my-cars" className="nav_default_link">My Cars</a></li>
         <li><a href="/authed/messages" className="nav_default_link">Messages</a></li>
         <Link to="/authed/my-profile">
           <img className="profile_image" src={userImageUrl}/>
         </Link>
         </>
         :
         <>
         <li><a href="/" className="nav_default_link">About Us</a></li>
         <li><a href="/home" className="nav_default_link">Conditions</a></li>
         <li><a href="/faq" className="nav_default_link">FAQ</a></li>
         <button id="login_button" onClick={onLoginButtonCLick}>Login</button>
         </>

        }
      </ul>
    </nav>
    <div id="burger_menu_button" onClick={(e) => setBurgerOpen(!burgerOpen)}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"/></svg></div>
    {loginFlag
    ? <LoginForm closeWindow={closeLoginWindow} />
    : <></>}
  </div>;

  const headerMobile =
    <div id="mobile_navigation" className="is-mobile">
      <div className="mobile_navigation_logo_div">
        <img src={logo}/>
          <div className="close_btn" onClick={(e) => setBurgerOpen(false)}>
            <svg className="close_btn_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/></svg>
          </div>
      </div>
      {
        validUser ?
        <>
          <nav>
              <a href="/authed" className="mobile_navigation_nav_default_link">Reservations</a>
              <hr />
              <a href="/authed/my-cars" className="mobile_navigation_nav_default_link">My Cars</a>
              <hr />
              <a href="/authed/messages" className="mobile_navigation_nav_default_link">Messages</a>
          </nav>
          <Link to="authed/my-profile">
            <div className="profile-container">
              <img className="profile_image" src={userImageUrl}/>
              <p className="user-fullname">{username}</p>
            </div>
          </Link>
          </>

          :
          <>
          <nav>
              <a href="/" className="mobile_navigation_nav_default_link">About us</a>
              <hr />
              <a href="/home" className="mobile_navigation_nav_default_link">Conditions</a>
              <hr />
              <a href="/faq" className="mobile_navigation_nav_default_link">FAQ</a>
          </nav>
          <button id="login_button" onClick={onLoginButtonCLick}>Login</button>
          </>
      }
      {loginFlag
      ? <LoginForm closeWindow={closeLoginWindow} />
      : <></>}
    </div>;

  return (
    <Loading loading={loading}>
      <header>
        { headerDesktop }
        { burgerOpen && headerMobile }
      </header>
    </Loading>
  );
}

export default Header;
