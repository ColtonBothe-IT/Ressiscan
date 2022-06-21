import React from 'react';
import './App.css';
import './home.css';

import sr from './images/scan-receipt.jpg';
import ui from './images/upload-image.jpg';
import ar from './images/access-receipts.jpg';
import sf from './images/search-features.jpg';


import Button from './components/ButtonComponent';




function Home() {
    return (
        <>
        <h1 className="heading">Ressiscan</h1>
        <div className="heading-desc">The place to store all of your receipts!</div>
        
        <Button 
            border="none"
            color="#DE2821"
            fontColor="#2C3121"
            fontSize='18px'
            height = "3.125rem"
            onClick={() =>
                        /* Make thie open up a popup that brings up camera window */ 
                        console.log("You clicked on the pink circle!")
                    }
            radius = "1em"
            width = "15rem"
            children = "Scan a Receipt Now!"
            margin= "2rem 0 0.625rem 0"
        />
        
        <Button 
            border="none"
            color="#6698B7"
            fontColor="#2C3121"
            fontSize='14px'
            height = "3.125rem"
            onClick={() => 
                        /* Make thie open up a popup that brings up upload file window */ 
                        window.location.href = "http://www.youtube.com"
                    }
            radius = "1em"
            width = "13rem"
            children = "Upload a Receipt Instead"
            margin= ".375rem 0 0 0"
        />

        
    
        

        <div className='flex-container'>
            <div className="flex-items">
                <div className="img-box scan-box">
                    <img className="desc-image" src={ sr } alt="Scanning a Receipt" />
                </div>
                <span>Scan receipts using your phone’s camera.</span>
            </div>
            <div className="flex-items">
                <div className="img-box upload-box">
                    <img className="desc-image" src={ ui } alt="Scanning a Receipt" />
                </div>
                <span>Or upload an image file of your receipt.</span>
            </div>
            <div className="flex-items">
                <div className="img-box receiptsmanager-box">
                    <img className="desc-image" src={ ar } alt="Scanning a Receipt" />
                </div>
                <span>Access all of your saved receipts in the Receipts Manager.</span>
            </div>
            <div className="flex-items">
                <div className="img-box search-box">
                    <img className="desc-image" src={ sf } alt="Scanning a Receipt" />
                </div>
                <span>Easily track all of your spending with itemized search features!</span>
            </div>
        </div>
        </>
    );
}

export default Home;