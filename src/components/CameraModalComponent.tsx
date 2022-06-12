import React from 'react';
import '../App.css';

interface Props {
    backgroundColor: string;
    border: string;
    color: string;
    fontSize: string;
    fontWeight: string;

    height: string;
    width: string;
    margin: string;
    padding: string;

    display: string;
    position: any;

    onClick: () => void;
}

const CameraModal: React.FC<Props> = ({
    backgroundColor,
    border,
    color,
    fontSize,
    fontWeight,
    height,
    width,
    margin,
    padding,
    display,
    position,
    onClick
}) => {
    return (
        <div className='modal-container' style={{
            backgroundColor,
            border,
            display,
            position,
            height,
            width,
            margin,
            padding //done?
        }}>
            <div className='modal-content' style={{
                backgroundColor,
                width,
                margin,
                padding,
                position //done?
            }}>
                <button className='close-button' 
                onClick={
                    onClick
                } 
                style={{
                    color,
                    fontSize,
                    fontWeight
                }}>x</button>

                <div className='camera-window' 
                style={{
                    backgroundColor,
                    border, //black border? thin? not rounded off
                    fontSize: fontSize,
                    width,
                    height,
                    padding,
                    margin
                }}></div>

                <button className='takephoto-button' 
                onClick={
                    onClick
                }
                style={{
                    color,
                    fontSize,
                    fontWeight
                }}>o</button>
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