import axios from "axios";
import { api } from "../urlConfig";

const axiosInstance =  axios.create({
    baseURL: api,
    headers:{
        "Content-Type" : "application/json"
    }
});

axiosInstance.interceptors.response.use((res) => {return res})

export default axiosInstance;