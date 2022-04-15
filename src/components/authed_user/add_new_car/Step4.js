import React, { useState, useEffect, useRef } from 'react'

import FileUploader from '~/components/FileUploader/FileUploader';
import ContinueDiv from "~/components/ContinueDiv";

import { HOSTNAME, POST_HEADERS_AUTHED_FORMDATA} from '~/constants';

import "~/styles/authed_user/add_new_car/step3-4.scss"

export default function Step4(props) {
    const didMountRef = useRef(false);

  const [newCarInfo, setNewCarInfo] = useState([]);
  const updateUploadedFiles = (files) => {
    console.log(files);
    setNewCarInfo(files);
  };

  async function sendCar(formedData) {
    await fetch(`${HOSTNAME}/cars/add-car`, {
      method: "POST",
      headers: POST_HEADERS_AUTHED_FORMDATA,
      body: formedData
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      props.parentCallback(newCarInfo.length ? true : false, 3);
    })
    .catch(error => console.log(error));
  }

  useEffect(async () => {
    if (didMountRef.current) {
      await formAndSendCar();
    } else didMountRef.current = true;

  }, [props.currentCar]);

  async function formAndSendCar() {
    const formedCar = new FormData();
    console.log(props.currentCar);
    formedCar.append("specs", JSON.stringify(props.currentCar[0].specs));
    formedCar.append("rentInfo", JSON.stringify(props.currentCar[0].rentInfo));
    formedCar.append("insurance", JSON.stringify(props.currentCar[0].insurance));
    formedCar.append("options", JSON.stringify(props.currentCar[0].options));
    formedCar.append("services", JSON.stringify(props.currentCar[0].services));
    // for (let i = 0; i < props.currentCar[0].carPhotos.length; i++) {
    //   formedCar.append("carPhotos", props.currentCar[0].carPhotos);
    // }
    for (let i = 0; i < props.currentCar[0].carPhotos.length; i++) {
      formedCar.append("documentPhotos", props.currentCar[0].carPhotos[i]);
    }

    await sendCar(formedCar);
  }

  function childsParentCallback(isContinued) {
    if (isContinued) {
      props.addCarStep4({
        documentPhotos: newCarInfo
      })
    }
  }

  return (
    <>
      <p className="uploader_description">STS or PTS of the car, OSAGO policy, <br /> CASCO policy (if any)</p>
      <FileUploader accept=".jpg,.png,.jpeg" multiple updateFilesCb={updateUploadedFiles}/>
      <ContinueDiv buttonName="Continue" isValid={ newCarInfo.length ? "true" : "false"} parentCallback={childsParentCallback} />
    </>
  )
}
