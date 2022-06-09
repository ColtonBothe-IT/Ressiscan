import React from 'react';
import '../App.css';

interface Props {
    border: string;
}

const Popup: React.FC<Props> = ({
    border
}) => {
    return (
        <div className='popup-container' style={{
            border
        }}>
            <div></div>
        </div>
        
    )
}

export default Popup;

/*
    to do: 
    make X close button make camera window.
    make camera ask for perms. 
    make camera button. 

    after photo is taken will show small prev.
    of photo.
    can confirm or retake.
    if confirmed save to mongodb database 
    after OCR hav converted to pdf.
 */