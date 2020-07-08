import React, { Component } from 'react';
import { render } from 'react-dom';
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
  
  return (
    <div class="video" style={{position: "relative",top:"100px" ,left:"200px"}}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      
      />
      </div>
  )
}
  

export default Camera;