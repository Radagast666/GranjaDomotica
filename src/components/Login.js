import { Formik, useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { clienteAxios } from "../config/axios";
import "../styles/auth.css";


export const Login = () => {
  const history = useHistory();
  const formik = useFormik({  
    initialValues:{
      usuario: '',
      password: ''
    },
    onSubmit: async values =>  {
      const { usuario, password } = values;
      try {
        const usuarioResponse = await (await clienteAxios.get(`/usuarios/${usuario}`)).data;
        if (!usuarioResponse){
          Swal.fire({
            icon: "error",
            title: "Error",
            text:"Usuario no valido"
          });
          return
        }
        if( usuarioResponse.password !== password){
          Swal.fire({
            icon: "error",
            title: "Error",
            text:"Contraseña incorrecta"
          });
          return;
        }
        history.push('/panel');
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <>
      <header>Granja Domotica</header>
      <div className="main">
        <form onSubmit={ formik.handleSubmit }>
          <h3 className="titulo">Login</h3>
          <input
            type="text"
            placeholder="Usuario"
            name="usuario"
            className="input"
            autoComplete="off"
            value={ formik.values.usuario }
            onChange={ formik.handleChange }
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input"
            value={ formik.values.password }
            onChange={ formik.handleChange }
          />

          <button type="submit" className="btn btn-primary btn-block">
            Iniciar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login