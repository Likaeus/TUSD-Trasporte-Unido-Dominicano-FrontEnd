import React, { useEffect, useState } from "react";
import "../tempStyles/tempPopUpMenu.css";
import BtnAtras from "./BtnAtras";
import RecargarTarjeta from "./RecargarTarjeta";
import "../Estilos/SideBarStyle.css";
import { Link } from "react-router-dom";

export default function PopUpMenu(props) {
  let [menuStyle, setMenuStyle] = useState({ visibility: "visible" });

  return (
    <div className="navBar" style={menuStyle}>
      <ul className="m-3">
        <Link to="/">
          <button
            onClick={() =>
              setMenuStyle({
                visibility:
                  menuStyle.visibility == "visible" ? "hidden" : "visible",
              })
            }
          >
            Atras
          </button>
          <div></div>
        </Link>
        <li className="mr-3">
          <Link to="/recargas">
            <a>Recargar</a>
          </Link>
        </li>
        <li>
          <Link to="/favoritos">
            <a>Favoritos</a>
          </Link>
        </li>
        <li>
          <a href="https://tusdmap.netlify.app/">Plan de viaje</a>
        </li>
        <li>
          <Link to="/tarjetas-credito">
            <a href="">Tarjetas de credito</a>
          </Link>
        </li>
        <li>
          <Link to="/tarjetas-transporte">
            <a href="">Tarjetas de transporte</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a href="">Historial transacciones</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a href="">Tarifas</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a href="">Horarios</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a href="">Mapas</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a href="">Alertas</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
