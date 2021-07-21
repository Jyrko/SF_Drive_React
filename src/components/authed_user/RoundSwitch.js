import React from 'react';

import "~/styles/authed_user/round_switch.scss";

export default function RoundSwitch({ onChange }) {
  function onChangeHandler(e) {
    e.preventDefault();
    onChange(e)
  }

  return (
    <label className="switch">
      <input type="checkbox" onChange={onChangeHandler}/>
      <span className="slider round"></span>
    </label>
  )
}
