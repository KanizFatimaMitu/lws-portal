import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://lws-server.vercel.app/",
});

export default axiosInstance;
