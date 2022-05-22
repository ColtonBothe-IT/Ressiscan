import React from 'react';
import './App.css';
import './home.css';

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
                <div className="img-box scan-box"></div>
                <span>Scan receipts using your phone’s camera.</span>
            </div>
            <div className="flex-items">
                <div className="img-box upload-box"></div>
                Or upload an image file of your receipt.
            </div>
            <div className="flex-items">
                <div className="img-box receiptsmanager-box"></div>
                Access all of your saved receipts in the Receipts Manager.
            </div>
            <div className="flex-items">
                <div className="img-box search-box"></div>
                Easily track all of your spending with itemized search features!
            </div>
        </div>
        </>
    );
}

export default Home;