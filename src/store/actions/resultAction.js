import { UPDATE_LOADING, UPDATE_QUERY_RESULT } from "./actionTypes";

export const updateResult = value => ({
    type: UPDATE_QUERY_RESULT,
    queryFinded: value
})

export const updateLoading = value => ({
    type: UPDATE_LOADING,
    loading: value
})
