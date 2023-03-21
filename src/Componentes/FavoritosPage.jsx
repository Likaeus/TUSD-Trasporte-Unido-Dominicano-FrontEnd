import React from "react";
import BtnAtras from "./BtnAtras";
import { Link } from "react-router-dom";
import "../Estilos/FavoritosPageStyles.css"

export default function FavoritosPage() {
  return (
    <div className="container">
      <p className="form-title">Usuarios favoritos</p>
      <ul className="p-1">
        <li className="contenedor m-5">Juan Martinez</li>
        <li className="contenedor m-5">Pedro Casanova</li>
        <li className="contenedor m-5">Maria Montero</li>
      </ul>

      <Link to="/agregar-favorito">
        <button className="btn btn-fresh m-4">Agregar favorito</button>
      </Link>

      <Link to="/">
        <BtnAtras />
      </Link>
    </div>
  );
}
