import React, { useState } from 'react'

import FileUploader from '~/components/FileUploader/FileUploader';
import ContinueDiv from "~/components/ContinueDiv";

import "~/styles/authed_user/add_new_car/step3-4.scss"

export default function Step3(props) {
  const [newUserInfo, setNewUserInfo] = useState([]);
  const updateUploadedFiles = (files) => {
    console.log(files);
    setNewUserInfo(files);
  };

  function childsParentCallback(isContinued) {
    props.parentCallback(isContinued, 2);
  }

  return (
    <>
      <p className="uploader_description">Чем больше качественных фотографий вы загрузите, тем выше шанс того, что выберут ваш автомобиль.</p>
      <FileUploader accept=".jpg,.png,.jpeg" multiple updateFilesCb={updateUploadedFiles}/>
      <ContinueDiv buttonName="Продолжить" isValid={ newUserInfo.length ? "true" : "false"} parentCallback={childsParentCallback} />
    </>
  )
}
