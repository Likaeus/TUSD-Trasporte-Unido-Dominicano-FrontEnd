import React, { useEffect, useState } from "react";
//import DataGrid from "devextreme-react/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../tempStyles/tempMenuPrincipal.css";
import navigationI from "../media/icons/navigation.svg";
// import servicioUsuario from "../Servicios/ServicioUsuario/ServicioUsuario";
import axios from "axios";
import "../Estilos/MenuPrincipalStyle.css";
import PopUpMenu from "./PopUpMenu";

export default function MenuPrincipal() {
  let tarjetasTransp = ["1028-6477", "6953-2012"];
  let usuariosFav = ["María Jimenez", "Carlos Garcia", "Virginia Caceres"];
  let [navBarStyles, setNavBarStyles] = useState({ visibility: "hidden" });
  let [showNavBar, setShowNavBar] = useState(false);
  let [user, setUser] = useState({});
  let [tarjTransp, setTarjTransp] = useState([]);
  let [favorito, setfavorito] = useState([]);

  //=============SERVICIO==================
  const baseURL = "https://tusdapi.azurewebsites.net";
  const getUser = (id) => {
    let response;
    axios({
      method: "get",
      url: `${baseURL}/api/usuario/${id}`,
    })
      .then((res) => {
        response = res.data;
        setUser(res.data);
        console.log(response);
      })
      .catch((error) => console.log(error));

    return response;
  };

  const getTarjTransp = (userId) => {
    let response;
    axios({
      method: "get",
      url: `${baseURL}/api/tarjetatransporte/given-user/${userId}`,
    })
      .then((res) => {
        response = res.data;
        setTarjTransp(res.data);
        console.log(response);
      })
      .catch((error) => console.log(error));

    return response;
  };

  const getFavoritos = (userId) => {
    let response;
    axios({
      method: "get",
      url: `${baseURL}/api/Favorito/Given-User/${userId}`,
    })
      .then((res) => {
        response = res.data;
        response.map((item) =>
          axios({
            method: "get",
            url: `${baseURL}/api/usuario/${item.favoritoId}`,
          })
            .then((res2) => {
              setfavorito((favs) => [...favs, res2.data]);
            })
            .catch((error) => console.log(error))
        );

        //setfavorito(response);
        console.log(favorito);
      })
      .catch((error) => console.log(error));

    return response;
  };
  //=========================================

  useEffect(() => {
    getUser(1);
    getTarjTransp(1);
    getFavoritos(1);
    //setfavorito(res);
    console.log(favorito);
  }, []);

  return (
    <div id="bgr">
      <a onClick={() => setShowNavBar(!showNavBar)}>
        <div className="container-fluid">
          <i class="bi bi-three-dots-vertical trepunt"></i>
        </div>
      </a>
      {showNavBar ? <PopUpMenu /> : null}

      <div className="m-5">
        <h1 className="mt-4">TUSD</h1>
      </div>

      <div className="m-6">
        <h2 className=" form-title mt-4">Bienvenido {user?.username}</h2>
      </div>

      <div className="tarjetas-transporte">
        <h3 className="mt-4">Tarjetas de transporte</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Codigo</th>
            </tr>
          </thead>
          <tbody>
            {tarjTransp?.map((item, index) => (
              <tr key={item.tTransporteId}>
                <th scope="row">{index + 1}</th>
                <td>{item.tTransporteId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tarjetas-transporte">
        <h3 className="mt-4">Usuarios favoritos</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Usuario</th>
            </tr>
          </thead>
          <tbody>
            {favorito?.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
