import React from 'react';
import Container from 'react-bootstrap/Container'


const text = {
    color:"rgba(0, 0, 0, 0.9)",
    textShadow: "2px 2px 5px red",
    textAlign:"center",
    fontFamily: "Tahoma",
    fontSize: "40px",
    padding: "10px 5px",
};

const Welcome = ({ active, payload, label }) => {

    return (
    <>
        <Container>
            <div style={text}>Welcome to the Blockchain Visualizer</div>
            <div style={text}>by Sam Vain</div>
        </Container>
    </>

    );
}


export default Welcome;