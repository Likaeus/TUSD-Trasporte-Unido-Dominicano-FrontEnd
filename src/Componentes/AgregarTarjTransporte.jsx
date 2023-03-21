import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AgregarTarjTransporte() {
  const baseURL = "https://tusdapi.azurewebsites.net";

  let [tarjetaTransp, setTarjetaTransp] = useState({
    userId: 1,
    tTransporteId: 0,
    montoActual: null,
    user: null,
  });

  const handleSubmit = (e) => {
    // e.preventDefault();

    axios({
      method: "post",
      url: `${baseURL}/api/TarjetaTransporte/1/${tarjetaTransp.tTransporteId}`,
      // data: { ...tarjetaTransp },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className = "container">
      <form action="">
        <label className="form-title pb-4" htmlFor="tarjetaTransp">Codigo de la tarjeta</label> <br />
        <input
          type="number"
          max={999999}
          id="tarjetaTransp"
          onChange={(e) =>
            setTarjetaTransp({
              ...tarjetaTransp,
              tTransporteId: e.target.value,
            })
          }
        />
        <br />
        <Link to="/tarjetas-transporte">
          <button
            type="submit"
            class="btn btn-fresh m-2"
            onClick={(e) => handleSubmit(e)}
          >
            Agregar
          </button>
        </Link>
        <Link to="/tarjetas-transporte">
          <button type="reset" class="btn btn-not-fresh m-2">
            Cancelar
          </button>
        </Link>
      </form>
    </div>
  );
}
