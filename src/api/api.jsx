import axios from "axios";

const token = import.meta.env.VITE_APP_API_KEY
const Api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default Api;