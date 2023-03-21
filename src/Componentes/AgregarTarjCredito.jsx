import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Estilos/AgregarTarjetaCreditoStyle.css"

export default function AgregarTarjCredito() {
  const baseURL = "https://tusdapi.azurewebsites.net";

  let [tarjetaCredito, setTarjetaCredito] = useState({
    tBancariaId: Math.floor(Math.random() * 100000) + 1,
    userId: 1,
    codigo: "",
    cvv: "",
    cardHolder: "",
    expDate: "",
    tipoTarjeta: Math.random() % 2 == 0 ? "debito" : "credito",
  });

  const handleSubmit = (e) => {
    // e.preventDefault();

    axios({
      method: "post",
      url: `${baseURL}/api/tarjetabancaria/1`,
      data: { ...tarjetaCredito },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="container">
      <form action="">
      <label className="form-title">
            Agregar tarjeta de pago
          </label>
        <div className="spacing">
          <label className="form-group form-check-label pb-1" for="tt1">
            Nombre en la tarjeta
          </label>
          <br />
          <input
            className=""
            type="text"
            id="tt1"
            onChange={(e) =>
              setTarjetaCredito({
                ...tarjetaCredito,
                cardHolder: e.target.value,
              })
            }
          />
        </div>
        <hr />
        <div className="spacing">
          <label className="form-group form-check-label pb-1" for="tt2">
            Codigo
          </label>
          <br />
          <input
            class=""
            type="number"
            id="tt2"
            onChange={(e) =>
              setTarjetaCredito({
                ...tarjetaCredito,
                codigo: e.target.value,
              })
            }
          />
        </div>
        <hr />
        <div class="spacing">
          <label className="form-group form-check-label pb-1" for="tt3">
            CVV
          </label>
          <br />
          <input
            class=""
            type="text"
            id="tt3"
            onChange={(e) =>
              setTarjetaCredito({
                ...tarjetaCredito,
                cvv: e.target.value,
              })
            }
          />
        </div>
        <hr />
        <div className="spacing">
          <label className="form-group form-check-label pb-1" for="tp1">
            Fecha de expiracion
          </label>
          <br />
          <input
            className=""
            type="date"
            id="tp1"
            onChange={(e) =>
              setTarjetaCredito({
                ...tarjetaCredito,
                expDate: e.target.value,
              })
            }
          />
        </div>
        <hr />

        <br />
        <Link to="/tarjetas-credito">
          <button
            type="submit"
            class="btn btn-fresh m-2"
            onClick={(e) => handleSubmit(e)}
          >
            Recargar
          </button>
        </Link>
        <Link to="/tarjetas-credito">
          <button type="reset" class="btn btn-not-fresh m-2">
            Cancelar
          </button>
        </Link>
      </form>

          </div>
    </div>
  );
}
