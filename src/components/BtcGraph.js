
import React, { useState, useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BtcGraph() {


  const interval = useRef(1000);
  const [btcData, setBtc] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString()); 

  const fetchBtc = async () => {
 
      await fetch('https://localhost:44334/api/bitcoin/getbtcdata', {

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
          strokeDasharray="3 3"/>

        <XAxis 
          dataKey="timestamp" 
          angle={-45} 
          textAnchor="end"/>
        
        <YAxis 
          type="number" 
          domain={['auto', 'auto']} />
        
        <Tooltip />
        
        <Legend 
          layout="vetical" 
          verticalAlign="top" 
          align="right" />
      
        <Line 
          type="monotone" 
          dataKey="btc" 
          stroke="#F2A900" 
          strokeWidth={3} 
          dot={{r:0}}/>

      </LineChart>
    </>
  )}

  const Header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "black",
    fontSize: "22px"
   }
    
  export default BtcGraph;