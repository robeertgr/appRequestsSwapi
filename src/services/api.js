import axios from 'axios'

const api = axios.create({
  baseURL: 'https://swapi.dev/'
})

export default api