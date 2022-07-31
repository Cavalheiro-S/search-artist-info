const { useState,createContext } = require("react");

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
    const [queryFinded, setQueryFinded] = useState({ query: null, finded: false });
    const [loading, setLoading] = useState(false);

    const value = {
        queryFinded,
        setQueryFinded,
        loading,
        setLoading
    }

    return (
        <ResultContext.Provider value={value}>
            {children}
        </ResultContext.Provider>
    )
}