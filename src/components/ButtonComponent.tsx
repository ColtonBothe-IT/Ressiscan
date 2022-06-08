import React from 'react';
import '../App.css';

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    fontColor: string;
    fontSize: string;
    height: string;
    onClick: () => void;
    radius: string;
    width: string;
    margin: string;
    //font-family and font-weight to add
}

const Button: React.FC<Props> = ({
    border,
    color,
    children,
    fontColor,
    fontSize,
    height,
    onClick, 
    radius,
    width,
    margin
}) => {
return(

    <button 
        onClick={ onClick } 
        style={{ 
            
            backgroundColor: color,
            border,
            borderRadius: radius,
            color: fontColor,
            fontSize: fontSize,
            height,
            width,
            margin
        
        }}
    >
    {children}
    </button>
    );
}

export default Button;