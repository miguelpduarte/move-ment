import { useState } from "react";
import { addToFavorites, isInFavorites, removeFromFavorites } from "../utils/favoriteStateManager";

/**
 * React hook to use for querying and changing the favorite state of a certain stop.
 * @param stop_id The id of the stop
 * @returns [favorited,toggleFavoriteState]
 */
export const useFavoriteStop = (stop_id, stop_code, provider) => {
    const [favorited, setFavorited] = useState(() => isInFavorites(stop_id));

    const toggleFavoriteState = () => {
        // let snackbar_message = "";
        if (!favorited) {
            // Adding to favorites, need custom name
            const custom_stop_name = prompt(`Enter the custom name for this stop (${stop_id})`); // eslint-disable-line no-undef
            if (!custom_stop_name) {
                // No input or cancelled the prompt
                return;
            }
            addToFavorites(stop_id, stop_code, custom_stop_name, provider);
        } else {
            removeFromFavorites(stop_id);
        }
        // TODO: Dispatch success snackbar with set message here
        setFavorited(fav => !fav);
    };

    return [favorited,toggleFavoriteState];
};