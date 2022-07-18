import axios from "axios"
import { getAuthorize } from "./get";

const axiosConfig = async () => {
    const token = await getAuthorize();
    const axiosConfigured = axios.create({
        baseURL: "https://api.spotify.com/v1",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return axiosConfigured;
}

export default axiosConfig;


