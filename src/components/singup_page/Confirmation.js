import React from 'react';
import {Link} from 'react-router-dom';

import "~/styles/singup_page/confirmation.scss";

import logo from '~/assets/svg/Logo.svg';
import confirmation from '~/assets/svg/singup_page/confirmation.svg';

function Confirmation({currentUser}) {
  return (
    <>
      <header>
        <img src={logo}/>
      </header>
      <section className="section_wrapper">
         <img src={confirmation} />
         <h2>Success!</h2>
         <p>You have successfully registered. Wait for verification
         documents and start using the service.</p>
         <Link to="/">
           <button id="return-main-page">Go to main page</button>
         </Link>
       </section>
    </>
  )
}

export default Confirmation;
