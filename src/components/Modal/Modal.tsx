import React from "react";
import './modal.css';

interface Props {
    image: string;
}

const Modal: React.FC<Props> = ({
    image
}) => {
    
     
    return (
        <div id="modal" style={{display: "none"}}>
            <div className="modal-content">
                <button className="x-button">X</button>
                <h3 className="title">Would you like to keep this image?</h3>
                <div className="imagebutton-container">
                    <img className="confirm-image" src={image} alt=''/>
                    <div className="button-container">
                        <button>Cancel/Retake</button>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );

  }


export default Modal;

/*
    ---THIS IS THE CODE YOU INPUT ON THE PAGE WHERE YOU WANT THE MODAL TO SHOW UP---

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

    <Modal />

*/ 