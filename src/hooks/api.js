import { useState } from "react";

/**
 * React hook to use for sending requests to an API and receiving some state (loading, error, data).
 * It also provides a function in order to be called to refresh the data. This should be called in a useEffect hook.
 * It is not called here because that would result in a refresh loop which would go over react's render loop limit (kinda like stackoverflow exceptions, recursive updates)
 * Note: The caller of this hook is the one responsible for "refreshing" the data via calling 'hitApiEndpoint' with the necessary arguments for the given endpoint - they must ensure that no re-render loops are caused! (See the usage in StopSchedule.jsx for example)
 * @param api_endpoint A function to hit an api endpoint. It should receive data as an argument and return data via a promise
 * @returns [data,error,loading,hitApiEndpoint]
 */
export const useApiEndpoint = (api_endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // "" or null? Need to test

    const hitApiEndpoint = async (...args) => {
        // console.log("Hitting api endpoint");
        // console.log("data", data, "loading", loading, "error", error);
        setLoading(true);

        try {
            const new_data = await api_endpoint(...args);
            setData(new_data);
            setError("");
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    return [data, error, loading, hitApiEndpoint];
};