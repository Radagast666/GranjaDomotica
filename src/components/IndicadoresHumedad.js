import React, { useEffect, useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import '../styles/indicadorHumedad.css';
const IndicadoresHumedad = () => {

  const [zona1, setZona1] = useState(0);
  const [zona2, setZona2] = useState(0);
  const [zona3, setZona3] = useState(0);
  const [zona4, setZona4] = useState(0);

  const client = new W3CWebSocket('ws://localhost:8082/granja-sockets/humedad');
  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };

  useEffect(() => {  
    client.onmessage = (message) => {
      const datosJSON = JSON.parse(message.data);
      const zona = datosJSON.zona;
      const mensaje = datosJSON.mensaje;
      switch (zona) {
        case 0:
          setZona1(mensaje.humedad);
          break;
        case 1:
          setZona2(mensaje.humedad);
          break;
        case 2:
          setZona3(mensaje.humedad);
          break;
        case 3:
          setZona4(mensaje.humedad);
          break;
      
        default:
          break;
      }
    };
  }, [client])

  return (
    <>
    <h2>Medicion de zonas</h2>
    <div className='humedades'>
      <div classname='humedades-row'>
        <div>
          <p className='medicion'>{zona1}</p>
          <p className='zona'>Zona 1</p>
        </div>
        <div>
          <p className='medicion'>{zona3}</p>
          <p className='zona'>Zona 3</p>
        </div>
      </div>
      <div classname='humedades-row'>
         <div>
          <p className='medicion'>{zona2}</p>
          <p className='zona'>Zona 2</p>
        </div>    
        <div>
          <p className='medicion'>{zona4}</p>
          <p className='zona'>Zona 4</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default IndicadoresHumedad
