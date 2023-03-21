import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import notify from "devextreme/ui/notify";
import "devextreme/dist/css/dx.light.css";
//import "../Estilos/RecargaPersonalStyle.css";
import "../Estilos/RecargaPersonalStyle.css";

export default function RecargaPersonal() {
  const baseURL = "https://tusdapi.azurewebsites.net";
  let [transaccion, setTransaccion] = useState({
    tBancariaId: 0,
    userId: 1,
    tTransporteId: 0,
    fechaTransc: "2022-04-18T00:00:00",
    monto: 20,
    tercero: null,
    terceroId: null,
    tBancaria: null,
    tTransporte: null,
    terceroNavigation: null,
    user: null,
  });
  let [tarjetasTransporte, setTarjetasTransporte] = useState([]);
  let [tarjetasCredito, setTarjetasCredito] = useState([]);
  let [codigoTarjetaCred, setcodigoTarjetaCred] = useState(0);

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

  const handleTarjCred = (codigo) => {
    axios({
      method: "get",
      url: `${baseURL}/api/tarjetabancaria/given-username/${codigo}`,
    })
      .then((res) => {
        setTransaccion({ ...transaccion, tBancariaId: res.data.tBancariaId });
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: `${baseURL}/api/transaccion/1`,
      data: { ...transaccion },
    })
      .then((res) => {
        console.log(res);
        notify(
          {
            message: `Transaccion completada exitosamente`,
            width: "auto",
          },
          "success",
          4500
        );
      })
      .catch((error) => {
        console.log(error);
        notify(
          {
            message: error.message,
            width: "auto",
          },
          "error",
          4500
        );
      });
  };

  useEffect(() => {
    getTarjTransp(1);
    getTarjetasCredito(1);
  }, []);

  return (
    <>
      <div className="container">
        <form action="">
          <h1 className="pb-5 form-title">Recargas</h1>
          <p className="form-group">Seleccione tarjeta de transporte</p>
          {tarjetasTransporte.map((item, index) => (
            <div className="" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="tarjeta-transporte"
                id={"tt" + index}
              />
              <label
                className="form-check-label ms-4 text-truncate"
                style={{ width: 73 }}
                for={"tt" + index}
                onChange={(e) =>
                  setTransaccion({
                    ...transaccion,
                    tTransporteId: item.tTransporteId,
                  })
                }
              />
              <label class="form-check-label ms-4" for={"tt" + index}>
                {item.tTransporteId}
              </label>
            </div>
          ))}
          <br />
          <hr />
          <p className="form-group">Seleccione tarjeta de pago</p>
          {tarjetasCredito.map((item, index) => (
            <div className="" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="tarjeta-pago"
                id={"tp" + index}
                onChange={() => handleTarjCred(item.codigo)}
              />
              <label
                class="form-check-label ms-4 text-truncate"
                for={"tp" + index}
                style={{ width: 160 }}
              >
                {item.codigo}
              </label>
            </div>
          ))}
          <br />
          <hr />
          <label htmlFor="monto" className="form-group">
            Monto a recargar
          </label>
          <br />
          <input
            type="number"
            onChange={(e) =>
              setTransaccion({
                ...transaccion,
                monto: Number(e.target.value),
              })
            }
          />

          <br />
          <Link to="/recargas">
            <button
              type="submit"
              className="btn btn-fresh m-2"
              onClick={handleSubmit}
            >
              Recargar
            </button>
          </Link>
          <Link to="/recargas">
            <button type="reset" className="btn btn-not-fresh m-2">
              Cancelar
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
