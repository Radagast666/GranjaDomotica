import React from "react";
import "../styles/auth.css";
import  { clienteAxios } from "../config/axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

export const Register = () => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      numero_telefonico: "",
      usuario: "",
      password: "",
    },
    onSubmit: async usuario => {
      try {
        
        const usuarioResponse = await clienteAxios.post('/usuarios/', usuario);
        if( usuarioResponse.data.id_usuario ){
          Swal.fire({
            icon: "success",
            title: "Registrado",
            text: "Usuario registrado con éxito"
          });
          formik.handleReset();
        }
        history.push('/login');
      } catch (error) {
        console.error(error)
      }
    }
  });

  return (
    <>
      <header>Granja Domotica</header>
      <div className="main">
        <form
          onSubmit={ formik.handleSubmit }
        >
          <h3 className="titulo">Registrar</h3>
          <input
            type="text"
            placeholder="Nombre (s)"
            name="nombre"
            className="input"
            autoComplete="off"
            value={ formik.values.nombre }
            onChange={ formik.handleChange }
          />

          <input
            type="text"
            placeholder="Apellido Paterno"
            name="apellido_paterno"
            className="input"
            autoComplete="off"
            value={ formik.values.apellido_paterno }
            onChange={ formik.handleChange }
          />

          <input
            type="text"
            placeholder="Apellido Materno"
            name="apellido_materno"
            className="input"
            autoComplete="off"
            value={ formik.values.apellido_materno }
            onChange={ formik.handleChange }
          />

          <input
            type="text"
            placeholder="Número Telefónico"
            name="numero_telefonico"
            className="input"
            autoComplete="off"
            values={ formik.values.numero_telefonico }
            onChange={ formik.handleChange }
          />

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
            placeholder="Contraseña"
            name="password"
            className="input"
            value={ formik.values.password }
            onChange={ formik.handleChange }
          />

          <button type="submit" className="btn btn-primary btn-block">
            Registar
          </button>
        </form>
      </div>
    </>
  );
};
export default Register