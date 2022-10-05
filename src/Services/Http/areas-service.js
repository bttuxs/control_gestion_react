import { httpClient } from "./Http-service"
const PathService = "areas/"
export const AreasService = {
    listAreas: () => {
        const path = ""
        return httpClient.get(PathService+path)
    },
    crear: (params) => {
        const path = "crear"
        return httpClient.post(PathService+path, params)
    },
    subAreas: (idArea) => {
        const path = "subareas"
        const params = {idAreaPadre: idArea}
        return httpClient.post(PathService+path, params)        
    }
}