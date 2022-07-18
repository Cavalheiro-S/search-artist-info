import axios from "axios";
import { Buffer } from "buffer";
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const getAuthorize = async () => {
    const URL = 'https://accounts.spotify.com/api/token';
    var config = {
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    const response = await axios.post(URL, null, config);
    return response.data.access_token;
}

export default getAuthorize;