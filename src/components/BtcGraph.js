
import React, { useState, useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CustomizedDot from './CustomizedDot'
import CustomizedTooltip from './CustomizedTooltip'

function BtcGraph() {


  const interval = useRef(1000);
  const [btcData, setBtc] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString()); 

  const fetchBtc = async () => {
 
      await fetch('https://localhost:44388/api/mongodb/getbtcdata', {

            method: 'GET',
            headers: {}
      })
      .then(response => response.json())
      .then(data => {

          setBtc(data);

      })
      .catch(err => console.log("err:", err))        
  }

  useEffect(() => {

    const timeout = setTimeout(() => { 

      interval.current = 30000;    

      fetchBtc();

      setTime(new Date().toLocaleTimeString());      

    }, interval.current );

    return () => { clearTimeout(timeout);}

  }, [time]);



  return (
    <>
      <div style={Header}>Bitcoin price (USD)</div>
      <LineChart
        width={1200}
        height={800}
        data={btcData}
        margin={{
          top: 20,
          right: 50,
          left: 5,
          bottom: 125
        }}>
          
        <CartesianGrid 
          strokeDasharray="3 3"
          />

        <XAxis 
          dataKey="timestamp" 
          angle={-45} 
          textAnchor="end"
          />
        
        <YAxis 
          type="number" 
          domain={['auto', 'auto']} 
          />
        
        <Tooltip  
          content={<CustomizedTooltip />}
          />
        
        <Legend 
          layout="vetical" 
          verticalAlign="top" 
          align="right" 
          />
      
        <Line 
          type="monotone" 
          dataKey="usd" 
          stroke="#F2A900" 
          strokeWidth={3} 
          isAnimationActive={false}
          dot={{r: 0}}
          activeDot={<CustomizedDot/>}
          />

      </LineChart>
    </>
  )}

  const Header = {
    padding: "10px 5px",
    textAlign: "left",
    color: "black",
    fontSize: "22px"
   }
    
  export default BtcGraph;