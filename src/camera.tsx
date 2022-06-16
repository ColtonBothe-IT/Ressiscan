import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import './Camera.css'


function Camera() {

    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 253.125, height: 450 } })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getVideo();
    }, [videoRef])

    function Print() {
        console.log("yay!");
    }

    return (
        <>

        <h1>Camera</h1>
        <div className='camera-container'>
            <div className='camera-box'>
                <video ref={ videoRef }></video>
            </div>
            <button className='camera-button' onClick={Print}>o</button>
            <div className={"result" + (hasPhoto ? 'hasPhoto' : '')}>
                {/* <canvas ref={ photoRef }></canvas>
                <button>CLOSE</button> */}
            </div>
        </div>

        <div className='lowercontent-container'></div>

        
        </>
    );
}

export default Camera;