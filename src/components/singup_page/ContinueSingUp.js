import React, {useEffect, useState} from 'react';
import { useStore } from 'react-redux'

const ContinueSingUp = (props) => {
  useEffect(() => {
    if (props.isValid) {

    }
  })

  function onClickSubmit(e) {
    e.preventDefault();
    console.log("Yo, bro!")
    if (props.isValid === "true") {
      console.log("Valid form")
      props.callback(true);
    } else {
      console.log("Invalid form")
    }
  }
  return (
    <div className="continue_div">
      <hr />
      <div className="continue_div_wrapper">
        { props.isValid === "true"?
        <button type="submit" onClick={onClickSubmit} form="step1" className="active">Продолжить</button>
        : <button type="submit" onClick={onClickSubmit} form="step1" className="notActive">Продолжить</button>
        }
      </div>
    </div>
  )
}

export default ContinueSingUp;
