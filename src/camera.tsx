import React, { useRef, /*useEffect,*/ useState } from 'react';
import { Camera } from "react-camera-pro";


import './App.css';
import './Camera.css'


// function ScannerCamera() {
//     //NOTE!! CAM NOT WORKING WHEN FILES ARE PUT UP ON HOSTING SITE. 
//     const videoRef = useRef(null);
//     const photoRef = useRef(null);

//     const [hasPhoto, setHasPhoto] = useState(false);

//     const getVideo = () => {
//         navigator.mediaDevices.getUserMedia({ video:
//              {  
//                 width: {max: 253.125}, 
//                 height: {max:450}, 
//                 facingMode: { exact: 'environment' } 
//             } 
//         })
//         .then(stream => {
//             let video = videoRef.current;
//             video.srcObject = stream;
//             video.play();
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }

//     useEffect(() => {
//         getVideo();
//     }, [videoRef])

//     function Print() {
//         console.log("yay!");
//     }

//     return (
//         <>

//         
//         <div >
//             
//                 <video ref={ videoRef }></video>
//             </div>
//             <button  onClick={Print}>o</button>
//             <div className={"result" + (hasPhoto ? 'hasPhoto' : '')}>
//                 {/* <canvas ref={ photoRef }></canvas>
//                 <button>CLOSE</button> */}
//             </div>
//         </div>

//         <div className='lowercontent-container'></div>

        
//         </>
//     );
// }

const ScannerCamera = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);

    return (
        <div>
            <h1>Camera</h1>
            
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
                        aspectRatio={9 / 16}
                    />
                </div>
                <button className='camera-button' onClick={() => setImage(camera.current.takePhoto())}>o</button>
            </div>

            <img src={image} alt=''/>
        </div>
    )


}

export default ScannerCamera;