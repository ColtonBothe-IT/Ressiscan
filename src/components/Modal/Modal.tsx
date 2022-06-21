import React from "react";


export default class Modal extends React.Component {
  render() {
    
    return (
        <div id="modal" style={{display: "none"}}>
            <div className="modal-content">
                <div className="button-container">
                    <img src={image} alt=''/>
                    <button>Cancel/Retake</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );

  }
}

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