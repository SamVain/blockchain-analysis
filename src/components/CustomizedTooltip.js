import React from 'react';
import BitcoinPng from '../imgs/bitcoin.png';

const containerStyle = {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "10px 5px",
    border: "2px solid rgba(0, 0, 0, 0.1)",
    opacity: "1"
};

const text = {
    color:"black"
};

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const CustomizedTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {

        return (
            <>
                <div style={containerStyle}>
                    <img src={BitcoinPng} alt="Bitcoin Price" height='20px' width='20px'/>
                    <div style={text}>{label}</div>
                    <div style={text}>{formatter.format(payload[0].value)}</div>
                </div>
            </>
        )
    }

    return null;
}


export default CustomizedTooltip;