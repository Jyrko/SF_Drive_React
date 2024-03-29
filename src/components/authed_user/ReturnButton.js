import React from 'react';

import "~/styles/authed_user/additional/return_button.scss";
export default function returnButton({onClick}) {
  function onClickHandler(e) {
    onClick(e);
  }

  return (
    <div className="return_to_home_div" onClick={onClickHandler}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0002 7.00008V9.00008H4.00016L9.50016 14.5001L8.08016 15.9201L0.160156 8.00008L8.08016 0.0800781L9.50016 1.50008L4.00016 7.00008H16.0002Z" fill="#61A199"/>
      </svg>
      <span className="return_to_home_div_title">Return</span>
    </div>
  )
}
