import axios from 'axios';

export function getProvincies(key: string) {
    return axios.get(`https://api.rajaongkir.com/starter/province?key=${key}`, {
        headers: {

        }
    })
}