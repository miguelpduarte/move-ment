const stop_list_str_regex = /(.*?) - (.*) \[(.*_(.*))\]/; // eslint-disable-line no-useless-escape

/**
 * Converts the remotely received stop list string to a stops array with the following keys: provider, stop_name, stop_code, raw_string
 * @param stop_list_str The stop list string, as received from move-me's "api"
 * @returns Array of stops
 */
const stopListToStopsArray = (stop_list_str) => {
    // Input string is several entries split by ';' in the following format:
    // <Provider> - <Stop Name> [<Stop Code>]
    const raw_array = stop_list_str.split(";");
    return raw_array.slice(0, raw_array.length - 1).map(item => {
        const [raw_string, provider, stop_name, stop_id, stop_code] = stop_list_str_regex.exec(item);
        return {
            provider,
            stop_name,
            stop_code,
            stop_id,
            raw_string
        };
    });
};

/**
 * Makes a request to the api in order to fetch the stops for a certain query string
 * @param search_str The query string to search for stops
 * @returns The array of found stops with the following keys: provider, stop_name, stop_code, raw_string (empty if none found) - See stopListToStopsArray for format details
 * @throws Throws a string if there is an error in communicating with the service
 */
export const searchByStops = async (search_str) => {
    // For testing locally (netlify redirect does not work)
    // return stopListToStopsArray("STCP - Faculdade de Engenharia [STCP_FEUP1];STCP - Faculdade de Engenharia [STCP_FEUP2];VALPI - Porto (Feup) [VALPI_233];");

    try {
        // eslint-disable-next-line no-undef
        const res = await fetch(`/api/move-me/Find/SearchByStops?keyword=${search_str}`, {
            method: "POST",
        });
        
        if (res.ok) {
            const res_text = await res.text();
            return stopListToStopsArray(res_text);
        } else {
            // Some error ocurred
            throw "Error in communication with move-me service!";
        }
    } catch(err) {
        console.error("error in searchByStops", err);
        throw "Error searching for stops!";
    }
};

const SEARCH_STATUS_CHECK_QUERY = "feup";

/**
 * Checks the status of the searchByStops endpoint for the move-me service
 * @returns true if the service is working as expected, false otherwise
 */
export const checkSearchStatus = async () => {
    try {
        const result = await searchByStops(SEARCH_STATUS_CHECK_QUERY);
        // The result must be a non-empty array. If it is something else then the endpoint is not working as expected
        return result instanceof Array && result.length != 0;
    } catch(ignored) {
        // If any exception is caught, the endpoint is not working
        return false;
    }
};

/**
 * Converts the remotely received arrival object to a sane arrivals array with the following keys: line, direction, time
 * @param arrival_object The arrival object, as received from move-me's "api"
 * @returns Array of arrivals
 */
const arrivalObjectToArrivalsArray = (arrival_object) => {
    // Input is an array containing objects with properties 'Key' and 'Value', where 'Value' is [line, direction, time]
    return arrival_object.map(item => {
        const [line, direction, time] = item["Value"];
        return {
            line,
            direction,
            time
        };
    });
};

/**
 * Makes a request to the api in order to fetch the next arrivals for a certain stop
 * @param stop_id The id of the stop
 * @returns The array of next arrivals (empty if none found) - See arrivalObjectToArrivalsArray for format details
 * @throws Throws a string if there is an error in communicating with the service
 */
export const nextArrivals = async (stop_id, provider_name) => {
    try {
    // eslint-disable-next-line no-undef
        const res = await fetch(`/api/move-me/NextArrivals/GetScheds?providerName=${provider_name}&stopCode=${stop_id}`, {
            method: "POST",
        });

        // Mock data for localhost dev
        
        // const mock = JSON.parse(`[
        //     {
        //         "Key": 1,
        //         "Value": [
        //             "300",
        //             "H.S.João Urg-prt3",
        //             "1*"
        //         ]
        //     },
        //     {
        //         "Key": 2,
        //         "Value": [
        //             "204",
        //             "Foz      -    Prt2",
        //             "6*"
        //         ]
        //     },
        //     {
        //         "Key": 3,
        //         "Value": [
        //             "204",
        //             "Foz",
        //             "23"
        //         ]
        //     },
        //     {
        //         "Key": 4,
        //         "Value": [
        //             "300",
        //             "Hosp. S. João (Urgência)",
        //             "33"
        //         ]
        //     },
        //     {
        //         "Key": 5,
        //         "Value": [
        //             "204",
        //             "Foz      -    Prt2",
        //             "49*"
        //         ]
        //     }
        // ]`);

        // /* eslint-disable no-unreachable */
        // return arrivalObjectToArrivalsArray(mock);

        if (res.ok && res.headers.get("Content-Type").includes("application/json")) {
            const res_json = await res.json();
            return arrivalObjectToArrivalsArray(res_json);
        } else {
        // Some error ocurred
            throw "Error in communication with move-me service!";
        }
    } catch(err) {
        console.error("error in nextArrivals", err);
        throw "Error getting next arrivals!";
    }
};

const NEXT_ARRIVALS_STATUS_CHECK_DATA = Object.freeze({stop_id: "STCP_GCRT1", provider_name: "STCP"});

/**
 * Checks the status of the nextArrivals endpoint for the move-me service
 * @returns true if the service is working as expected, false otherwise
 */
export const checkNextArrivalsStatus = async () => {
    try {
        const result = await nextArrivals(NEXT_ARRIVALS_STATUS_CHECK_DATA.stop_id, NEXT_ARRIVALS_STATUS_CHECK_DATA.provider_name);
        // The result must be a non-empty array. If it is something else then the endpoint is not working as expected
        return result instanceof Array && result.length != 0;

        // TODO: Make this resillient to there not being next arrivals for the selected test stop (considering testing for null only, an empty array would be a good result, just meaning no next arrivals)
    } catch(ignored) {
        // If any exception is caught, the endpoint is not working
        return false;
    }
};

/**
 * Calculates the logo src for a certain provider, by name. Extracted for modularity
 * @param provider_name The name of the provider
 * @returns The source of the provider's logo
 */
export const getProviderLogoSrc = (provider_name) => `/api/move-me-logos/20150915_${provider_name}.png`;