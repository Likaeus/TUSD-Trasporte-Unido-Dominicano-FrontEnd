import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecargaPersonal from "./RecargaPersonal";
import RecargaTerceros from "./RecargaTerceros";
import BtnAtras from "./BtnAtras";
import "../Estilos/RecargarTarjeta.css";

export default function RecargarTarjeta() {
  let [showRecargaPersonal, setShowRecargaPersonal] = useState(false);
  let [showRecargaTerceros, setShowRecargaTerceros] = useState(false);

  return (
    <>
      <div className="container mt-4">
        <h1 className="pb-3 form-title"> Menu de recargas </h1>
        <div className="btn">
          <Link to="/recargas-personal">
            <button
              className="button btn btn-master text-truncate"
              onClick={() => setShowRecargaPersonal(!showRecargaPersonal)}
            >
              Recarga personal
            </button>
          </Link>
        </div>

        <div className="btn">
          <Link to="/recargas-terceros">
            <div className="btn">
              <button
                className="button btn btn-master"
                onClick={() => setShowRecargaTerceros(!showRecargaTerceros)}
              >
                Recarga a otro
              </button>
            </div>
          </Link>
        </div>
        <div className="button">
          <Link to="/">
            <BtnAtras />
          </Link>
        </div>
      </div>
    </>
  );
}
