import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:9090',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default {
  /* ======= RESOURCE AUTHENTICATION ======== */
  autenticar(credentials) {
    return apiClient.post('/auth/signin', credentials)
  },
  establecerJWTtoken(userData) {
    return apiClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userData.token}`;
  },

  /* ========== RESOURCE TIPO CAMBIO ========== */
  convertir(data) {
    return apiClient.get('/tipocambio/v1/convierte?origen=' + data.origen + "&destino=" + data.destino + "&monto=" + data.monto);
  },
  updateTipoCambio() {
    return apiClient.get('/users/')
  }

}