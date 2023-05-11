import axios from "axios";


  const api = axios.create({
    baseURL:"https://api.github.com/users/szsouza"})

export default api