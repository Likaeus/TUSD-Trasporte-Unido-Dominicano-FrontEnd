import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnAtras from "./BtnAtras";
import axios from "axios";
import "../Estilos/TarjetaCredito.css";

export default function TarjetasCredito() {
  const baseURL = "https://tusdapi.azurewebsites.net";
  let [tarjetasCredito, setTarjetasCredito] = useState([]);

  const getTarjetasCredito = (userId) => {
    axios({
      method: "get",
      url: `${baseURL}/api/tarjetabancaria/${userId}`,
    })
      .then((res) => {
        setTarjetasCredito(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTarjetasCredito(1);
  }, []);

  return (
    <div>
      <p className="form-title">Tarjetas registradas</p>
      <ul className="p-1">
        {tarjetasCredito.map((item, index) => (
          <li className="contenedor m-5" key={item.codigo}>
            <p>{item.cardHolder}</p>
            <p>{item.codigo}</p>
            <p>{item.tipoTarjeta}</p>
          </li>
        ))}
      </ul>

      <Link to="/agregar-tarjeta-credito">
        <button className="btn btn-fresh m-3">
          Agregar tarjeta de credito
        </button>
      </Link>

      <Link to="/">
        <BtnAtras />
      </Link>
    </div>
  );
}
