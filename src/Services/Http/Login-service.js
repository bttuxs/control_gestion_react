import { httpClient } from "./Http-service"
export const LoginService = {
    login: (params) => {
        const path = "termino"
        return httpClient.get(path, params)
    }
}