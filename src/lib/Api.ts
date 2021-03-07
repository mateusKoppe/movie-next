import axios from "axios";
import CONFIG from "../config";

const Api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
})

Api.interceptors.request.use(config => ({
  ...config,
  params: {
    ...config.params,
    api_key: CONFIG.API_KEY
  }
}))

export default Api
