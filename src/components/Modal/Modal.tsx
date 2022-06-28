import React from "react";
import './modal.css';

interface Props {
    image: string;
}

function hideModal() {
    const targetModal = document.getElementById("modal");
    const targetOverlay = document.getElementById("overlay");

    targetModal.style.display = "none";
    targetOverlay.style.display = "none";

}
const Modal: React.FC<Props> = ({
    image
}) => {
    
     
    return (
        <div id="modal" style={{display: "none"}}>
            <div className="closebutton-container">
                    <button className="x-button" onClick={() => { hideModal(); }} >X</button>
                </div>
            <div className="modal-content">
                
                <h3 className="title">Would you like to keep this image?</h3>
                <div className="imagebutton-container">
                    <img className="confirm-image" src={image} alt=''/>
                    <div className="button-container">
                        <button onClick={() => { hideModal(); }}>Cancel/Retake</button>
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