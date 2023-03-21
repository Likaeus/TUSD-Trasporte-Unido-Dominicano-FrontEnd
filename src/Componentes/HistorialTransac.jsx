import React, { useEffect, useState } from "react";

export default function HistorialTransac() {
  const baseURL = "https://tusdapi.azurewebsites.net";
  let [transacciones, setTransacciones] = useState([]);

  const getTransacciones = (userId) => {
    axios({
      method: "get",
      url: `${baseURL}/api/transaccion/given-user/${userId}`,
    })
      .then((res) => {
        setTransacciones(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTransacciones(1);
  }, []);

  return (
    <div>
      <ul></ul>
    </div>
  );
}
