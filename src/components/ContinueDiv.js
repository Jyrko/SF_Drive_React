import React, {useEffect, useState} from 'react';
import { useStore } from 'react-redux';

import "~/styles/singup_page/confirmation.scss";

const ContinueDiv = (props) => {
  useEffect(() => {
    if (props.isValid) {

    }
  })

  function onClickSubmit(e) {
    e.preventDefault();
    if (props.parentCallback) {
      if (props.isValid === "true") {
        props.parentCallback(true);
      } else {
        console.log("Invalid form")
      }
    }
  }
  return (
    <div className="continue_div">
      <hr />
      <div className="continue_div_wrapper">
        { props.isValid === "true"?
        <button type="submit" onClick={onClickSubmit} form="step1" className="active">{props.buttonName}</button>
        : <button type="submit" onClick={onClickSubmit} form="step1" className="notActive">{props.buttonName}</button>
        }
      </div>
    </div>
  )
}

export default ContinueDiv;
