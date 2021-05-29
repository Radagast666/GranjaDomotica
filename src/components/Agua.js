import React, { useEffect, useState } from "react";
import index from "../styles/index.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { clienteAxios } from "../config/axios";

const Agua = () => {
  //const formik = useFormik=({
  //initialValues:{
  //ph : '6.4'
  //},
  //onClick: async values => {
  //const {ph} = values;
  //  alert('el ph ha subido')
  // }

  //})

  let history = useHistory();
  const [ph, setPh] = useState(0);
  const client = new W3CWebSocket('ws://localhost:8082/granja-sockets/ph');
  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  
  useEffect(() => {
    client.onmessage = (message) => {
      const datosJSON = JSON.parse(message.data);
      setPh(datosJSON.mensaje.ph);
    }
  }, [client])

  return (
    <Router>
      <Route
        path="/agua"
        exact
        render={(props) => (
          <div className="container">
            <h1>ph actual</h1>
            <p>{ph}</p>
            <h3>
              {" "}
              {""}{" "}
              <FaTimes
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => history.push("/panel")}
              ></FaTimes>
            </h3>

            <div className="div">
              <nav>
                <header>
                  <Button
                    class="fa fa-arrow-circle-o-up"
                    aria-hidden="true"
                    color="black"
                    text="Aumentar ph"></Button>

                  <Button color="black" text="Disminuir ph"></Button>
                </header>
              </nav>
            </div>
          </div>
        )}
      />
    </Router>
  );
};

export default Agua;
