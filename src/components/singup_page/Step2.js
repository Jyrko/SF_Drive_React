import React, {useRef, useState} from 'react';
import ContinueSingUp from './ContinueSingUp';

import frame from "~/assets/img/singup/step2/Frame.jpg";

const Step2 = (props) => {
  const inputFile = useRef(null);
  const [file, setFile] = useState(null);
  const buttonStyle = {
    backgroundImage: `url(${file})`
  }

  function callbackFunction(isValid) {
    props.parentCallback(isValid, 1);
  }

  function onButtonClick(e) {
    inputFile.current.click();
  }

  function handleFile(e) {
    const image = event.target.files[0];
    setFile(URL.createObjectURL(image));
  }

  return (
    <>
      <h2>Зашрузите Селфи</h2>
      <p>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</p>
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
