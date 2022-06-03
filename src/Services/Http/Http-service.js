import { type } from "@testing-library/user-event/dist/type";
import axios from "axios"
const urlBase = process.env.REACT_APP_BASE_PATH

function objToQueryString(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

export const http = {
    get: (path, params) => {
        let url = urlBase+path
        /*
        if(typeof params == 'object' && Object.keys(params).length > 0){
            url = url+"?"+objToQueryString(params)
        }
        */
        return axios.get(url,{params})
    },
}