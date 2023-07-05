import axios from "axios";

const Api = axios.create({
    baseURL:  import.meta.env.VITE_APP_API_URL,
    auth: {
        username: import.meta.env.VITE_APP_API_USERNAME,
        password: import.meta.env.VITE_APP_API_KEY
    }
});

export default Api;