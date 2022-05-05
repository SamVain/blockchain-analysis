import React, {useState, useRef, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button} from 'react-bootstrap';

const LiveView = (props) => {

  const ws = useRef(null);

  const endPoint = useRef('wss://ws.blockchain.info/inv');
  const converterEndpoint = useRef('https://localhost:44334/api/bitcoin/getbtcvalue');
  const interval = useRef(500);
  
  const [gotbtc, setGotBtc] = useState(false);
  const [btc, setBtc] = useState(0);
  const [hashes, setHashes] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());  


  
  const format_time = (unix_timestamp) => {
    return new Date(unix_timestamp * 1e3).toLocaleTimeString();
  }



  const getValuesIn = (data) => {
    var total = 0
    data.forEach(element => {
      total += element.prev_out.value;      
    });
    return total;
  }



  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });



  const getBTC = async () => {
    await fetch(converterEndpoint.current, { method: 'GET', headers: {} })
    .then ( response => { return response.json(); })
    .then ( data => { setBtc(data); })
    .catch ( err => console.log("err:", err));
  }



  useEffect(() => {
    if(gotbtc) {
      ws.current = new WebSocket(endPoint.current);
      ws.current.onopen = () => {
        ws.current.send(JSON.stringify( {"op": "unconfirmed_sub"} ));
      };
      const wsCurrent = ws.current;
      return () => {
        wsCurrent.close();
      };
    }
  }, [gotbtc]);



  useEffect(() => {
    if (!ws.current) return;
    console.log("dataReceived");
    ws.current.onmessage = evt => {
      const eventData = JSON.parse(evt.data);
      if (eventData.op === 'utx') {
        var transactionData = {
          Hash: eventData.x.hash,
          Time: format_time(eventData.x.time),
          ValueIn: (getValuesIn(eventData.x.inputs) / 1e8).toFixed(8),
          ValueOut : formatter.format((getValuesIn(eventData.x.inputs) / 1e8) * btc)
        }
        const ar = hashes;
        ar.unshift(transactionData);
        setHashes(ar.slice(0, 20))
      }
    };
  });



  useEffect(() => {

    const timeout = setTimeout( async () => { 
      interval.current = 30000;    
      await getBTC(); 
      setTime(new Date().toLocaleTimeString());
      setGotBtc(true);
    }, interval.current );
    return () => { clearTimeout(timeout);}
  }, [time]);



  return (
    <Container> 
      <Row>
        <Col className="conversion py-3" >1 BTC = {formatter.format(btc)}</Col>
      </Row>
      <div className="table-responsive">
        <table className="table align-middle table-striped table-hover">
          <thead>
            <tr>
              <th style={{width:"50%"}} scope="col">#</th>
              <th style={{width:"15%"}} scope="col">Time</th>
              <th style={{width:"15%"}} scope="col">Bitcoin <i class="cc coin-name" title="bitcoin"></i> </th>
              <th scope="col">Value $</th>
            </tr>
          </thead>
          <tbody>
          {hashes.map( items=>
            <tr key={items.Hash} style={stylingObject.monospace}> 
              <td>{items.Hash}</td> 
              <td>{items.Time}</td>
              <td>{items.ValueIn}</td> 
              <td>{items.ValueOut}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div> 
    </Container>
  )
}

var stylingObject = {
  monospace: {
    fontFamily: "Courier"
  }
}


export default LiveView;