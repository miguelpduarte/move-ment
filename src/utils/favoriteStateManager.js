const FAVORITE_KEY_LOCALSTORAGE = "favorite_stops";

/// Note: Have to use 'typeof window !== 'undefined' &&' before every localStorage usage because of gatsby optimizations, see https://github.com/gatsbyjs/gatsby/issues/14480

const saveFavoritesToLocalStorage = (favorites) => {
    // eslint-disable-next-line no-undef
    typeof window !== "undefined" && localStorage.setItem(FAVORITE_KEY_LOCALSTORAGE, JSON.stringify(favorites));
};

/// Schema for favorites (example for STCP's FEUP2):
/**
 * {
 *   stop_id, (STCP_FEUP2)
 *   stop_code, (FEUP2)
 *   stop_name, (customizable, user-given name - the key is this one because this way it is possible to reuse components)
 *   provider (STCP)
 * }
 */

/**
 * Adds a new stop to the user's favorites
 * @param {String} stop_id The id of the stop, as per the API structure
 * @param {String} stop_code The code of the stop, as per the API structure
 * @param {String} stop_name The name of the stop, customizable user-given name
 * @param {String} provider The provider for the stop, as per the API structure
 */
export const addToFavorites = (stop_id, stop_code, stop_name, provider) => {
    saveFavoritesToLocalStorage([...getFavorites(), {stop_id, stop_code, stop_name, provider}]);
};

/**
 * Tests if a certain stop is favorited or not (via its id)
 * @param {String} stop_id The id of the stop to test for belonging in the favorites list
 */
export const isInFavorites = (stop_id) => {
    return !!getFavorites().find((favorite) => favorite.stop_id == stop_id);
};

/**
 * Removes a stop from the user's favorites
 * @param {String} stop_id The id of the stop to remove from the favorites
 */
export const removeFromFavorites = (stop_id) => {
    saveFavoritesToLocalStorage(getFavorites().filter(favorite => favorite.stop_id != stop_id));
};

export const getFavorites = () => {
    // The default value returned is an empty array to not break anything, for when the local storage key has not been set yet with any value
    return JSON.parse(typeof window !== "undefined" && localStorage.getItem(FAVORITE_KEY_LOCALSTORAGE)) || []; // eslint-disable-line no-undef
};