import { httpClient } from "./Http-service"
export const CatalogoService = {
    tipoDocumento: () => {
        const path = "tipoDocumento"
        return httpClient.get(path)
    },
    termino: () => {
        const path = "termino"
        return httpClient.get(path)
    }
}