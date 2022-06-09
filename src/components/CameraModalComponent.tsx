import React from 'react';
import '../App.css';

interface Props {
    border: string;
}

const CameraModal: React.FC<Props> = ({
    border
}) => {
    return (
        <div className='modal-container' style={{
            border
        }}>
            <button className='close-button'>X</button>
            <div className='camera-window'></div>
            <button className='takephoto-button'>o</button>

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