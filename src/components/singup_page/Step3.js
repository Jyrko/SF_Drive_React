import React, { useState } from 'react';

import FileUploader from './FileUploader';
import ContinueSingUp from './ContinueSingUp';


import frame from "~/assets/img/singup/step2/Frame.jpg";

const Step3 = (props) => {
  function callbackFunction(isValid) {
    props.parentCallback(isValid, 2);
  }

  const [newUserInfo, setNewUserInfo] = useState({profileImages: []});
  const updateUploadedFiles = (files) => setNewUserInfo({ ...newUserInfo, profileImages: files });

  return (
    <>
      <h2>Загрузите документы</h2>
      <p>Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон</p>
      <FileUploader accept=".jpg,.png,.jpeg" multiple updateFilesCb={updateUploadedFiles}/>
      <ContinueSingUp isValid={ newUserInfo.profileImages.length ? "true" : "false"} callback={callbackFunction}/>
    </>
  );
}

export default Step3;
