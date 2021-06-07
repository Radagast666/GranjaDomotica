import Button from "./Button";
import index from "../styles/index.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import Swal from "sweetalert2";

const Alimento = () => {
  //const formik = useFormik=({
  //initialValues:{
  //compuerta : 'cerrada'
  //},
  //onClick: async values => {
  //const { compuerta } = values;
  // }

  //})
  const client = new W3CWebSocket(
    "ws://localhost:8082/granja-sockets/compostador"
  );
  client.onopen = () => {
    console.log("WebSocket Client Connected");
  };
  const mensaje = {
    action: "guardar",
    id_remitente: 1000,
    id_destinatario: 4000,
    mensaje: {
      estado: "",
    },
    fecha: Date.now().toString(),
  };

  const cerrarCompuerta = () => {
    mensaje.mensaje.estado = "cerrado";
    alert('compuerta cerrada');
    client.send(JSON.stringify(mensaje));
  };
  const abrirCompuerta = () => {
    mensaje.mensaje.estado = "abierto";
    alert('compuerta abierta');
    client.send(JSON.stringify(mensaje));
  };

  let history = useHistory();

  return (
    <Router>
      <Route
        path="/alimento"
        exact
        render={(props) => (
          <div className="container">
            <h3>
              {" "}
              {""}{" "}
              <FaTimes
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => history.push("/panel")}
              ></FaTimes>
            </h3>

            <div className="div">
              <header>
                <Button
                  color="black"
                  text="Abrir compuerta"
                  action={() => abrirCompuerta()}
                ></Button>

                <Button
                  color="black"
                  text="Cerrar compuerta"
                  action={() => cerrarCompuerta()}
                ></Button>
              </header>
            </div>
          </div>
        )}
      />
    </Router>
  );
};

export default Alimento;
