import { Tooltip } from "chart.js";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import IndicadoresHumedad from "./IndicadoresHumedad";

const AddRiego = (onAdd) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState();
  let history = useHistory();
  const data = [
    { name: 'Dia 1', uv: 65, pv: 56, ac : 56, da: 61 },
    { name: 'Dia 2', uv: 72, pv: 76, ac : 66, da: 70},
    { name: 'Dia 3', uv: 65, pv: 65,  ac : 61, da: 67},
    { name: 'Dia 4', uv: 56, pv: 63, ac : 72, da: 58 },
    { name: 'Dia 4', uv: 83, pv: 82, ac : 94, da: 87 },
    { name: 'Dia 4', uv: 84, pv: 73, ac : 84, da: 79 },
    { name: 'Dia 4', uv: 92, pv: 90, ac : 85, da: 90 },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Por favor agrega campos validos");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };



  return (
    <>
      <IndicadoresHumedad />
      <form className="add-form" onSubmit={onSubmit}>
        <div className="container">
          <h3>
            {" "}
            {""}{" "}
            <FaTimes
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => history.push("/panel")}
            ></FaTimes>
          </h3>

          <div class="form-group row">
            <label
              for="example-datetime-local-input"
              class="col-2 col-form-label"
            >
              Fecha y hora
            </label>
            <div class="col-10">
              <input
                class="form-control"
                type="datetime-local"
                value="2021-05-20T13:00:00"
                id="example-datetime-local-input"
              ></input>
            </div>
          </div>

          <div className="form-control from-control-check">
            <label>Recordatorio</label>
            <input
              type="checkbox"
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>

          <input
            type="submit"
            value="Guardar"
            className="btn btn-block"
          ></input>
        </div>
      </form>
      <h2>Historial de mediciones</h2>
      <LineChart
        width={650}
        height={650}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        <Line type="monotone" dataKey="ac" stroke="#fd5312" yAxisId={2} />
        <Line type="monotone" dataKey="da" stroke="#5321da" yAxisId={3} />
      </LineChart>
    </>
  );
};

export default AddRiego;
