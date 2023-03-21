import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnAtras from "./BtnAtras";
import axios from "axios";
import "../Estilos/TarjetasTransporteStyles.css"

export default function TarjetasTransporte() {
  const baseURL = "https://tusdapi.azurewebsites.net";
  let [tarjetasTransporte, setTarjetasTransporte] = useState([]);

  const getTarjTransp = (userId) => {
    axios({
      method: "get",
      url: `${baseURL}/api/tarjetatransporte/given-user/${userId}`,
    })
      .then((res) => {
        setTarjetasTransporte(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTarjTransp(1);
  }, []);

  return (
    <div>
      <p className="form-title">Tarjetas de transporte registradas</p>
      <ul className="p-1">
        {tarjetasTransporte.map((item, index) => (
          <li className="contenedor m-5" key={item.tTransporteId}>
            <p>{item.tTransporteId}</p>
          </li>
        ))}
      </ul>

      <Link to="/agregar-tarjeta-transporte">
        <button className="btn btn-fresh m-3">Agregar tarjeta de transporte</button>
      </Link>

      <Link to="/">
        <BtnAtras />
      </Link>
    </div>
  );
}
