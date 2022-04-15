import React from 'react';
import {Link} from 'react-router-dom';

import "~/styles/singup_page/confirmation.scss";

function SuccessPage({description, image, linkTo}) {
  return (
    <>
      <section className="section_wrapper">
        <img src={image} />
        <h2>Success!</h2>
        <p>{description}</p>
        <Link to={linkTo}>
          <button id="return-main-page">Go to main page</button>
        </Link>
      </section>
    </>
  )
}

export default SuccessPage;
