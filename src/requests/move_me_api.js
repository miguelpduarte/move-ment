// http://move-me.mobi/Find/SearchByStops?keyword=FEUP

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

    // eslint-disable-next-line no-undef
    const res = await fetch(`/api/move-me/Find/SearchByStops?keyword=${search_str}`, {
        method: "POST",
    });

    console.log("Debug response", res);

    if (res.ok) {
        const res_text = await res.text();
        console.log("Debug, text:", res_text);
        return stopListToStopsArray(res_text);
    } else {
        // Some error ocurred
        throw "Error in communication with move-me service!";
    }
};