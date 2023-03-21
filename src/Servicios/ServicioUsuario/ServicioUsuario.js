import axios from "axios";

class ServicioUsuario {
  baseURL = "https://tusdapi.azurewebsites.net";

  BuscarUsuarios() {}

  // BuscarUsuarioPorID(id) {
  //   let response;

  //   axios({
  //     method: "get",
  //     url: `${this.baseURL}/api/usuario/${id}`,
  //   })
  //     .then((res) => {
  //       response = res.data;
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));

  //   return response;
  // }
}

const servicioUsuario = new ServicioUsuario();
export default servicioUsuario;
