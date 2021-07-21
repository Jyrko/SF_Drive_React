import React, {useState, useRef, useEffect} from 'react';

import "~/styles/file_uploader.scss";
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 30000000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);


const FileUploader = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const [files, setFiles] = useState({});
  const fileInput = useRef(null);
  const fileUploadArea = useRef(null);

  const dGridTemp = {
    gridTemplateColumns: "1fr 1fr"
  }
  const oGridTemp = {
    gridTemplateColumns: "1fr"
  }

  const handleDrag = (e) => {
    console.log("dragover");
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragIn = (e) => {
    console.log("dragenter");
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragOut = (e) => {
    console.log("dragleave");
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("drop");
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log(e.dataTransfer.files);
      let updatedFiles = addNewFiles(e.dataTransfer.files);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
    console.log(files);
  }

  useEffect(() => {
    let div = fileUploadArea.current;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);

    return () => {
      div.removeEventListener('dragenter', handleDragIn)
      div.removeEventListener('dragleave', handleDragOut)
      div.removeEventListener('dragover', handleDrag)
      div.removeEventListener('drop', handleDrop)
    }
  }, []);

  const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      console.log(file.size);
      if (file.size <= maxFileSizeInBytes) {
        console.log(file);
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const handleUploadBtnClick = () => {
    fileInput.current.click();
  };

  const handleNewFileUpload = (e) => {
   const { files: newFiles } = e.target;
   if (newFiles.length) {
     let updatedFiles = addNewFiles(newFiles);
     setFiles(updatedFiles);
     callUpdateFilesCb(updatedFiles);
   }
  };


  return (
    <>
      <section style={Object.keys(files).length ? dGridTemp : oGridTemp} className="uploader_preview">

          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <section key={fileName}>
                <div>
                  {isImageFile && (
                    <div className="document-div">
                      <img src={URL.createObjectURL(file)} className="document-preview-img" alt={`file preview ${index}`}/>
                      <div className="document-div_description">
                        <span className="document-div_description_filename">{file.name}</span>
                        <br/>
                        <span className="document-div_description_size">{convertBytesToKB(file.size)} KB</span>
                      </div>
                    </div>
                  )}
                  <div>
                  </div>
                </div>

              </section>
            )
          })}

        <section className="file-uploader">
          <label>{label}</label>
          <div ref={fileUploadArea} className="file-uploader_wrapper">
            <button className="uploader" onClick={handleUploadBtnClick}></button>
            <p id="choose-file">Перетащите или <span>выберите {otherProps.multiple ? "файлы" : "файл"}</span></p>
            <p id="file-restrictions">JPG или PNG, не более 30 мб</p>
          </div>
          <input type="file" ref={fileInput} title="" onChange={handleNewFileUpload} value="" {...otherProps}/>
        </section>
      </section>
    </>
  )
}

export default FileUploader;
