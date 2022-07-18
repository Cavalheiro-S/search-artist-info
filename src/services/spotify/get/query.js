import axiosConfig from "../api";

const getSearchQuery = async (queryValue, queryType) => {
    const axiosConfigured = await axiosConfig();
    const params = {
        q: queryValue,
        type: queryType
    }
    return axiosConfigured.get(`/search`, {params})
}
export default getSearchQuery