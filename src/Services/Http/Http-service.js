import axios from "axios"
const urlBase = process.env.REACT_APP_BASE_PATH

export const httpClient = {
    get: (path, params) => {
        let url = urlBase+path
        return axios.get(url,{params})
    },
    post: (path, params) => {
      let url = urlBase+path
      return axios.post(url,params)
    },
    delete: (path, params) => {
      let url = urlBase+path
      return axios.delete(url,{params})
    },
    put: (path, params) => {
      let url = urlBase+path
      return axios.put(url,{params})
    },
}