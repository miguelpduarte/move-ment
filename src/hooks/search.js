import { useState } from "react";

const TIMEOUT_TO_SEARCH_MS = 200;
const MIN_LETTERS_TO_SEARCH = 2;

/**
 * React hook to use for searching an API with a certain timeout after inputting and a certain minimum number of characters
 * @param api_endpoint A function to hit an api endpoint. It should receive data as an argument and return data via a promise
 * @returns [search_results,search_query,setSearchQuery,error]
 */
export const useSearch = (api_endpoint) => {
    const [search_query, setSearchQuery] = useState("");
    const [search_results, setSearchResults] = useState(null);
    const [search_timeout_id, setSearchTimeoutId] = useState(null);
    const [error, setError] = useState(null);

    const updateSearchQuery = (new_search_query) => {
        clearTimeout(search_timeout_id);
        setSearchQuery(new_search_query);

        if (new_search_query && new_search_query.length > MIN_LETTERS_TO_SEARCH) {
            const timeout_id = setTimeout(() => executeSearch(new_search_query), TIMEOUT_TO_SEARCH_MS);
            setSearchTimeoutId(timeout_id);
        }
    };

    // This takes in an argument because the state was being passed as stale because the function is not being redefined
    // This is ok because the timeout is being cleared and reset, and the closure calling this function has the most recent state so it's fine
    const executeSearch = async (search_query) => {
        console.log("search fired after delay with query:", search_query);
        try {
            const data = await api_endpoint(search_query);
            setSearchResults(data);
        } catch(err) {
            setError(err);
        }
    };

    // Need to return search query due to showing in the input components
    return [search_results, search_query, updateSearchQuery, error];
};