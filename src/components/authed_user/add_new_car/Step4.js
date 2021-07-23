import React, { useState, useEffect, useRef } from 'react'

import FileUploader from '~/components/FileUploader/FileUploader';
import ContinueDiv from "~/components/ContinueDiv";

import { HOSTNAME, POST_HEADERS_FORMDATA, ACCESS_TOKEN_KEY} from '~/constants';

import "~/styles/authed_user/add_new_car/step3-4.scss"

export default function Step4(props) {
    const didMountRef = useRef(false);

  const [newCarInfo, setNewCarInfo] = useState([]);
  const updateUploadedFiles = (files) => {
    console.log(files);
    setNewCarInfo(files);
  };

  function sendCar(formedData) {
    fetch(`${HOSTNAME}/cars/add-car`, {
      method: "POST",
      body: formedData
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      sessionStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      parentCallback(newUserInfo.length ? true : false, 2);
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    if (didMountRef.current) {
      formAndSendCar();
    } else didMountRef.current = true;

  }, [props.currentCar]);

  function formAndSendCar() {
    const formedCar = new FormData();
    formedCar.append("name", currentCar[0].name);
    formedCar.append("email", currentCar[0].email);
    formedCar.append("password", currentCar[0].password);
    formedCar.append("birthday", currentCar[0].birthday);
    formedCar.append("passport", JSON.stringify(currentCar[0].passport));
    formedCar.append("license", JSON.stringify(currentCar[0].license));
    formedCar.append("profileImage", currentCar[0].profileImage);
    for (let i = 0; i < currentCar[0].documentPhotos.length; i++) {
      formedCar.append("documentPhotos", currentCar[0].documentPhotos[i]);
    }

    sendCar(formedCar);
  }

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
