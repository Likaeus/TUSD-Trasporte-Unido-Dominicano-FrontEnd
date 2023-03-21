import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Estilos/RecargaTerceros.css";

export default function RecargaTerceros() {
  const baseURL = "https://tusdapi.azurewebsites.net";
  let [favoritos, setFavoritos] = useState([]);
  let [usuariosFavs, setUsuariosFavs] = useState([]);
  let [tarjetasCredito, setTarjetasCredito] = useState([]);
  let [transaccion, setTransaccion] = useState({
    tBancariaId: 0,
    userId: 1,
    tTransporteId: 0,
    fechaTransc: "2022-04-18T00:00:00",
    monto: 0,
    tercero: 1,
    terceroId: null,
    tBancaria: null,
    tTransporte: null,
    terceroNavigation: null,
    user: null,
  });

  const getFavs = (userId) => {
    let response;
    axios({
      method: "get",
      url: `${baseURL}/api/favorito/given-user/${userId}`,
    })
      .then((res) => {
        setFavoritos(res.data);
        response = res.data;
        response.map((item) =>
          axios({
            method: "get",
            url: `${baseURL}/api/usuario/${item.favoritoId}`,
          })
            .then((res2) => {
              setUsuariosFavs((favs) => [...favs, res2.data]);
            })
            .catch((error) => console.log(error))
        );
      })
      .catch((error) => console.log(error));
  };

  const getTarjetas = (userId) => {
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
    getFavs(1);
    getTarjetas(1);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="pb-5 form-title">Recargas a terceros</h1>
        <form action="">
          <p className="form-group">Seleccione usuario a recargar</p>
          {usuariosFavs.map((item, index) => (
            <div className="" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="usuario-favorito"
                id={"fav" + index}
              />
              <label
                class="form-check-label ms-4"
                for={"fav" + index}
                style={{ width: 150 }}
              >
                {item.username}
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
                id={"f2tp" + index}
              />
              <label
                class="form-check-label ms-4"
                for={"f2tp" + index}
                style={{ width: 250 }}
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
            <button type="submit" class="btn btn-fresh m-2">
              Recargar
            </button>
          </Link>
          <Link to="/recargas">
            <button type="reset" class="btn btn-not-fresh m-2">
              Cancelar
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
