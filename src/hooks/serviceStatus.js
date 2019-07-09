import { useState, useEffect } from "react";

/**
 * React hook to use for checking the status of a certain service's endpoint.
 * @param endpoint The function representing the endpoint to check the status for. Must take no arguments and return a boolean (possibly via a promise)
 * @param endpoint_name The name of the endpoint, used for returning the result in the correct way for ServiceStatusList and ServiceStatusListItem
 * @returns [endpoint_status,loading]
 */
export const useEndpointStatus = (endpoint, endpoint_name) => {
    const [loading, setLoading] = useState(true);
    const [endpoint_status, setEndpointStatus] = useState(null);

    useEffect(() => {
        // Effect callbacks are synchronous to prevent race conditions.
        // Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching (react-hooks/exhaustive-deps)

        const checkEndpointStatus = async () => {
            setLoading(true);
            try {
                const status = await endpoint();
                setEndpointStatus(status);
            } catch(ignored) {
                setEndpointStatus(false);
            }
            setLoading(false);
        };

        checkEndpointStatus();
    }, [endpoint]);

    return [{name: endpoint_name, available: endpoint_status}, loading];
};