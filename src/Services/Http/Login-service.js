import axios from "axios"

const urlBase = process.env.REACT_APP_BASE_PATH
export const http = {
    get: () => {
        return axios.get(urlBase, {data:"union", type:"text"})
    }
}