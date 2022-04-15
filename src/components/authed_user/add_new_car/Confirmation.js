import React from 'react';
import {Link} from 'react-router-dom';

import "~/styles/singup_page/confirmation.scss";

import logo from '~/assets/svg/Logo.svg';
import confirmation from '~/assets/svg/authed/my_cars/registration_confirmation.svg';

export default function Confirmation() {
  return (
    <>
      <header>
        <img src={logo}/>
      </header>
      <section className="section_wrapper">
        <img src={confirmation} />
        <h2>Success!</h2>
         <p>The car has been added. Wait until the information you entered
         will be checked by moderators.</p>
         <Link to="/authenticated">
           <button id="return-main-page">Go to main page</button>
         </Link>
      </section>
    </>
  )
}
