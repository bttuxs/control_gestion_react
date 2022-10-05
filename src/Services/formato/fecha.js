import moment from 'moment';

export const FormatoFecha = {
    formato : (data) => {
        const fecha = moment(data).format("DD/MM/YYYY HH:mm")
        return fecha
    }
}