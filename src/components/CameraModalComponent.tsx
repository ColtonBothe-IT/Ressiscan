import React from 'react';
import '../App.css';

interface Props {
    
}

const CameraModal: React.FC<Props> = ({
    
}) => {
    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <button className='close-button'>x</button>

                <div className='camera-window'></div>

                <button className='takephoto-button'>o</button>
            </div>
        </div>
        
    )
}

export default CameraModal;

/*
    to do: 
    make X close button make camera window. started!
    make camera ask for perms. 
    make camera button. 

    create a shadow on everything behind modal.
    after photo is taken will show small prev.
    of photo.
    can confirm or retake.
    if confirmed save to mongodb database 
    after OCR hav converted to pdf.
 */