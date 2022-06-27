import React, { useRef, /*useEffect,*/ useState } from 'react';
import { Camera } from "react-camera-pro";

import Modal from './components/Modal/Modal'

import './App.css';
import './Camera.css'



function showModal() {
    const targetDiv = document.getElementById("modal");
    console.log("success!")
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else if (targetDiv.style.display === "none") {
        targetDiv.style.display = "block";
      } else {
        targetDiv.style.display = "block";
      }
}

const ScannerCamera = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);

    return (
        <div>
            <Modal image={image}/>
            <h1 className='cam-title'>Camera</h1>
            
            <div className='camera-container'>
                <div className='camera-box'>
                    <Camera ref={camera} 
                        errorMessages={{
                            noCameraAccessible: 'No Camera Accessible!',
                            permissionDenied: 'Permission denied. Please refresh and give camera permission.',
                            switchCamera: 'It is not possible to switch camera to different one because there is only one video device accessible.',
                            canvas: 'Canvas is not supported.'
                            }}
                        facingMode='environment'
                        aspectRatio={ 9/16 }
                    />
                </div>
                <button className='camera-button' onClick={() => { 
                    setImage(camera.current.takePhoto());
                    showModal();
                }}>o</button>
            </div>
            
        </div>
    )


}

export default ScannerCamera;