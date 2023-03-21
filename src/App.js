import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MenuPrincipal from "./Componentes/MenuPrincipal";
import PopUpMenu from "./Componentes/PopUpMenu";
import RecargarTarjeta from "./Componentes/RecargarTarjeta";
import RecargaPersonal from "./Componentes/RecargaPersonal";
import RecargaTerceros from "./Componentes/RecargaTerceros";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FavoritosPage from "./Componentes/FavoritosPage";
import AgregarFavorito from "./Componentes/AgregarFavorito";
import TarjetasCredito from "./Componentes/TarjetasCredito";
import AgregarTarjCredito from "./Componentes/AgregarTarjCredito";
import TarjetasTransporte from "./Componentes/TarjetasTransporte";
import AgregarTarjTransporte from "./Componentes/AgregarTarjTransporte";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MenuPrincipal />}></Route>
          <Route exact path="/recargas" element={<RecargarTarjeta />}></Route>
          <Route
            exact
            path="/recargas-personal"
            element={<RecargaPersonal />}
          ></Route>
          <Route
            exact
            path="/recargas-terceros"
            element={<RecargaTerceros />}
          ></Route>
          <Route exact path="/favoritos" element={<FavoritosPage />}></Route>
          <Route
            exact
            path="/agregar-favorito"
            element={<AgregarFavorito />}
          ></Route>
          <Route
            exact
            path="/tarjetas-credito"
            element={<TarjetasCredito />}
          ></Route>
          <Route
            exact
            path="/agregar-tarjeta-credito"
            element={<AgregarTarjCredito />}
          ></Route>
          <Route
            exact
            path="/tarjetas-transporte"
            element={<TarjetasTransporte />}
          ></Route>
          <Route
            exact
            path="/agregar-tarjeta-transporte"
            element={<AgregarTarjTransporte />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
