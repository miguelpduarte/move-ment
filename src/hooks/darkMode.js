import { useState } from "react";
import { isDarkModeEnabled, toggleDarkMode as toggleDarkModeLocalStorage } from "../utils/darkModeStateManager";

/**
 * React hook to use for querying and changing the state of the app's dark mode
 * @returns [is_dark_mode_enabled,toggleDarkMode]
 */
export const useDarkModeToggler = () => {
    const [is_dark_mode_enabled, setDarkMode] = useState(isDarkModeEnabled);

    const toggleDarkMode = () => {
        const new_dark_mode_status = toggleDarkModeLocalStorage();
        setDarkMode(new_dark_mode_status);
        // TODO: Switch to Redux or something simillar to be able to reload without need a full page reload
        window.location.reload(); // eslint-disable-line no-undef
    };

    return [is_dark_mode_enabled, toggleDarkMode];
};