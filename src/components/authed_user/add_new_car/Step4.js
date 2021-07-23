import React, { useState } from 'react'

import FileUploader from '~/components/FileUploader/FileUploader';
import ContinueDiv from "~/components/ContinueDiv";

import "~/styles/authed_user/add_new_car/step3-4.scss"

export default function Step4(props) {
  const [newCarInfo, setNewCarInfo] = useState([]);
  const updateUploadedFiles = (files) => {
    console.log(files);
    setNewCarInfo(files);
  };

  function childsParentCallback(isContinued) {
    if (isContinued) {
      props.addCarStep4({
        documentPhotos: newCarInfo
      })
    }
    props.parentCallback(isContinued, 3);
  }

  return (
    <>
      <p className="uploader_description">СТС или ПТС автомобиля, полис ОСАГО, <br />полис КАСКО (если есть)</p>
      <FileUploader accept=".jpg,.png,.jpeg" multiple updateFilesCb={updateUploadedFiles}/>
      <ContinueDiv buttonName="Продолжить" isValid={ newCarInfo.length ? "true" : "false"} parentCallback={childsParentCallback} />
    </>
  )
}
