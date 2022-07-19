import axiosConfig from "../api";
import getSearchQuery from "./query";

const getSearchArtist = async (artistName) => {
    try{
        const axiosConfigured = await axiosConfig();
        const searchQueryResponse = await getSearchQuery(artistName,"artist");
        const urlResultedSearchQuery = searchQueryResponse.data.artists.items[0].href;
        return axiosConfigured.get(urlResultedSearchQuery);
    }
    catch{
        return {
            data: {}
        }
    }
}

export default getSearchArtist;