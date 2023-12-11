import axios from "axios";

const clienteAxios = axios.create({
    baseURL: process.env.VUE_APP_API_BOOKS_URL,
    headers: {
        'Accept': 'application/json',  // 'application' estaba mal escrito
        'X-Requested-With' : 'XMLHttpRequest',
        "Content-Type": "multipart/form-data"

    },
    withCredentials: true
});

export default clienteAxios;
