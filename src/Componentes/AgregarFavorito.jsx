import notify from "devextreme/ui/notify";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AgregarFavorito() {
  const baseURL = "https://tusdapi.azurewebsites.net";
  let [favorito, setFavorito] = useState({
    userId: 1,
    favoritoId: 0,
  });
  let [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `${baseURL}/api/usuario/given-username/${username}`,
    })
      .then((res) => {
        setFavorito({ ...favorito, favoritoId: res.data.userId });
        console.log("username: ", res.data);
      })
      .then(() => {
        axios({
          method: "post",
          url: `${baseURL}/api/favorito/${favorito.userId}/${favorito.favoritoId}`,
        })
          .then((res) => {
            console.log("favorito: ", res);
            notify(
              { message: "Operacion completada exitosamente" },
              "success",
              4500
            );
          })
          .catch((error) => {
            console.log(error);
            notify({ message: error.message }, "error", 4500);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container">
        <h1 className="form-title pb-5">
          Agregar favorito/s
        </h1>
        <form action="">
          <label className="form-title" htmlFor="agregarFav">Usuario</label> <br />
          <input
            type="text"
            name="agregarFav"
            id="agregarFav"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Link to="/favoritos">
            <button
              className="btn btn-fresh"
              onClick={(e) => handleSubmit(e)}
            >
              Agregar
            </button>
          </Link>
          <Link to="/favoritos">
            <button className="btn btn-not-fresh">Cancelar</button>
          </Link>
        </form>
      </div>
    </>
  );
}
