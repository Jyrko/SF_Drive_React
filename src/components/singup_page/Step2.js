import React, {useRef, useState} from 'react';
import ContinueSingUp from './ContinueSingUp';

import frame from "~/assets/img/singup/step2/Frame.jpg";

const Step2 = ({parentCallback, addStep2}) => {
  const inputFile = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [file, setFile] = useState(null);
  const buttonStyle = {
    backgroundImage: `url(${file})`
  }

  function callbackFunction(isValid) {
    if (isValid) {
      addStep2({
        profileImage: profileImage
      })
    }

    parentCallback(isValid, 1);
  }

  function onButtonClick(e) {
    inputFile.current.click();
  }

  function handleFile(e) {
    const image = event.target.files[0];
    setProfileImage(image);
    setFile(URL.createObjectURL(image));
  }

  return (
    <>
      <h2>Upload Selfie</h2>
      <p>Look directly at the camera, without sunglasses or hats.</p>
      <div className="step2_div">
        <input ref={inputFile} type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" id="selfie" name="selfie" onChange={handleFile}/>
        <div className="step2_div_wrapper">
          <img src={file ? file : frame} className="selfie_img"/>
          <button className="frame_button" onClick={onButtonClick}/>
        </div>
      </div>
      <ContinueSingUp isValid={file ? "true" : "false"} callback={callbackFunction}/>
    </>
  );
}

export default Step2;
