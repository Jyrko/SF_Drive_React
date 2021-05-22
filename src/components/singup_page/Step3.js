import React from 'react';
import ContinueSingUp from './ContinueSingUp';

import frame from "~/assets/img/singup/step2/Frame.jpg";

const Step3 = (props) => {
  function callbackFunction(isValid) {
    props.parentCallback(isValid, 2);
  }

  return (
    <>
      <h2>Загрузите документы</h2>
      <p>Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон</p>
      <li>
        <img className="frame_image" src={frame}/>
      </li>
      <ContinueSingUp isValid="true" callback={callbackFunction}/>
    </>
  );
}

export default Step3;
