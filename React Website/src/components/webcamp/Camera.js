import React, { Component } from 'react';
import '../../css/style.css'
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
import ReactFileSystem from 'react-file-system';

const Camera = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc,setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  // <div class="video" style={{position: "relative",top:"100px" ,left:"200px"}}>

  return (
    <div class="video" >
      <Webcam 
      className="modelcam"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      
      />
      </div>
  )
}
  

export default Camera;