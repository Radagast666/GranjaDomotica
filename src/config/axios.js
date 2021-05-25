import axios from "axios";

export const clienteAxios = axios.create({
  baseURL:'http://25.77.243.46:8080'
})