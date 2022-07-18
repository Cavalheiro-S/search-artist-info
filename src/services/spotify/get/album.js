import axiosConfig from "../api";

const getArtistAlbums = async (id) => {
    const axiosConfigured = await axiosConfig();
    const params = {
        limit: 50,
    }
    return axiosConfigured.get(`artists/${id}/albums`, {params});
}

export default getArtistAlbums;