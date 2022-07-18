import axiosConfig from "../api";

const getTopTracksFromArtist = async (id) => {
    const axiosConfigured = await axiosConfig();
    const params = {
        market: "ES"
    }
    return axiosConfigured.get(`artists/${id}/top-tracks`, {params});
}

export default getTopTracksFromArtist;