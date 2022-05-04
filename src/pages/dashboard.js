import React from 'react'
import Container from 'react-bootstrap/Container'
import BtcGraph from '../components/BtcGraph'

function Dashboard() {
    return (
        <Container>
            <div>
                <BtcGraph />
            </div>
        </Container>
    );
};

export default Dashboard;
