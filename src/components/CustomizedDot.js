import React from 'react';

const CustomizedDot = (props) => {

    const { cx, cy } = props;
    
    return (
        <svg x={cx - 10} y={cy - 10} width={20} height={20} viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <defs>
                <linearGradient x1="49.9733228%" y1="-0.0235524798%" x2="49.9733228%" y2="99.9898856%" id="linearGradient-1">
                    <stop stopColor="#F9AA4B" offset="0%"></stop>
                    <stop stopColor="#F7931A" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g>
                <path d="M252.171181,158.953845 C235.068666,227.562366 165.558445,269.267547 97.0483714,252.165422 C28.4382829,235.063298 -13.2678496,165.554665 3.83466519,97.0461553 C20.93718,28.4376335 90.3473861,-13.2675466 158.957475,3.83457763 C227.467548,20.8366894 269.273696,90.345323 252.171181,158.953845 L252.171181,158.953845 L252.171181,158.953845 Z" fill="url(#linearGradient-1)"></path>
                <path d="M188.944877,112.05 C191.444877,95.05 178.544877,85.85 160.744877,79.75 L166.544877,56.65 L152.544877,53.15 L146.944877,75.65 C143.244877,74.75 139.444877,73.85 135.644877,73.05 L141.244877,50.45 L127.244877,46.95 L121.544877,69.95 C118.444877,69.25 115.444877,68.55 112.544877,67.85 L112.544877,67.75 L93.1448775,62.95 L89.4448775,77.95 C89.4448775,77.95 99.8448775,80.35 99.6448775,80.45 C105.344877,81.85 106.344877,85.65 106.144877,88.65 L99.5448775,114.95 C99.9448775,115.05 100.444877,115.15 101.044877,115.45 C100.544877,115.35 100.044877,115.25 99.5448775,115.05 L90.3448775,151.85 C89.6448775,153.55 87.8448775,156.15 83.9448775,155.15 C84.0448775,155.35 73.7448775,152.65 73.7448775,152.65 L66.7448775,168.75 L85.0448775,173.35 C88.4448775,174.25 91.7448775,175.05 95.0448775,175.95 L89.2448775,199.25 L103.244877,202.75 L109.044877,179.65 C112.844877,180.65 116.644877,181.65 120.244877,182.55 L114.544877,205.55 L128.544877,209.05 L134.344877,185.75 C158.344877,190.25 176.344877,188.45 183.844877,166.75 C189.944877,149.35 183.544877,139.25 170.944877,132.65 C180.244877,130.55 187.144877,124.45 188.944877,112.05 L188.944877,112.05 L188.944877,112.05 Z M156.844877,157.05 C152.544877,174.45 123.144877,165.05 113.644877,162.65 L121.344877,131.75 C130.844877,134.15 161.444877,138.85 156.844877,157.05 L156.844877,157.05 Z M161.244877,111.75 C157.244877,127.65 132.844877,119.55 124.944877,117.55 L131.944877,89.55 C139.844877,91.55 165.344877,95.25 161.244877,111.75 L161.244877,111.75 Z" fill="#FFFFFF"></path>
            </g>
        </svg>
    )
}


export default CustomizedDot;