import React from "react";

import './UploadFileModal.css';




function hideModal() {
    const targetModal = document.getElementById("uf-modal");
    const targetOverlay = document.getElementById("uf-overlay");

    targetModal.style.display = "none";
    targetOverlay.style.display = "none";

}



class UploadFileModal extends React.Component {
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
    }
     
    render() {
        return (
            <>
                <div id="uf-modal" style={{display: "none"}}>
                    <div className="closebutton-container">
                        <button className="x-button" onClick={() => { hideModal(); }} >X</button>
                    </div>
                    <div className="modal-content">
                        
                        <h3 className="title">Upload a File</h3>

                        
                        <div className="box">

                            <input type="file" onChange={this.fileSelectedHandler}/>

                        </div>


                        <div className="container">
                            <div className="button-container">
                                <button onClick={() => { hideModal(); }}>Cancel</button>
                                <button>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="overlay" style={{display: "none"}}></div>
            </>
        );
    }

  }


export default UploadFileModal;

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