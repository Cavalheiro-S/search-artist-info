export const handleServiceResponseSpotify = (response, callbackIfSuccess, callbackIfError) => {

    if(response.status === 200){
        console.log(response);
        callbackIfSuccess();
    }

    if(response.status === 401 || response.status === 403 || response.status === 429){
        callbackIfError();
    }
}