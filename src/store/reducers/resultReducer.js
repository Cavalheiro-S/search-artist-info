const { UPDATE_LOADING, UPDATE_QUERY_RESULT } = require("store/actions/actionTypes")

const initialState = {
    queryFinded: {
        query: null,
        finded: false
    },
    loading: false
}

const ResultReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_LOADING:
            return ({
                ...state,
                loading: action.loading
            })

        case UPDATE_QUERY_RESULT:
            return ({
                ...state,
                queryFinded: {
                    query: action.queryFinded.query,
                    finded: action.queryFinded.finded
                }
            })

        default:
            return state
    }
}
export default ResultReducer