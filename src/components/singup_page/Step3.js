import React, { useState, useEffect, useRef} from 'react';

import FileUploader from '~/components/FileUploader/FileUploader';
import ContinueSingUp from './ContinueSingUp';

import frame from "~/assets/img/singup/step2/Frame.jpg";

import { HOSTNAME, POST_HEADERS_FORMDATA, ACCESS_TOKEN_KEY} from '../../constants';

const Step3 = ({parentCallback, addStep3, currentUser}) => {
  const didMountRef = useRef(false);

  const [newUserInfo, setNewUserInfo] = useState([]);
  const updateUploadedFiles = (files) => {
    console.log(files);
    setNewUserInfo(files);
  };

  function sendUser(formedData) {
    fetch(`${HOSTNAME}/auth/register`, {
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

  function formAndSendUser() {
    const formedUser = new FormData();
    formedUser.append("name", currentUser[0].name);
    formedUser.append("email", currentUser[0].email);
    formedUser.append("password", currentUser[0].password);
    formedUser.append("birthday", currentUser[0].birthday);
    formedUser.append("passport", JSON.stringify(currentUser[0].passport));
    formedUser.append("license", JSON.stringify(currentUser[0].license));
    formedUser.append("profileImage", currentUser[0].profileImage);
    for (let i = 0; i < currentUser[0].documentPhotos.length; i++) {
      formedUser.append("documentPhotos", currentUser[0].documentPhotos[i]);
    }

    sendUser(formedUser);
  }

  useEffect(() => {
    if (didMountRef.current) {
      formAndSendUser();
    } else didMountRef.current = true;

  }, [currentUser]);

  function callbackFunction(isValid) {
    if (isValid) {
      addStep3({
        documentPhotos: newUserInfo
      })
    }
  }

  return (
    <>
      <h2>Загрузите документы</h2>
      <p>Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон</p>
      <FileUploader accept=".jpg,.png,.jpeg" multiple updateFilesCb={updateUploadedFiles}/>
      <ContinueSingUp isValid={ newUserInfo.length ? "true" : "false"} isFinal="true" callback={callbackFunction}/>
    </>
  );
}

export default Step3;
