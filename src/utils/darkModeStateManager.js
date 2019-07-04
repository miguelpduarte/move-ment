const DARKMODE_KEY_LOCALSTORAGE = "using_dark_mode?";

/// Note: Have to use 'typeof window !== 'undefined' &&' before every localStorage usage because of gatsby optimizations, see https://github.com/gatsbyjs/gatsby/issues/14480

const writeDarkModeStateToLocalStorage = (dark_mode) => {
    // eslint-disable-next-line no-undef
    typeof window !== "undefined" && localStorage.setItem(DARKMODE_KEY_LOCALSTORAGE, JSON.stringify(dark_mode));
};

/**
 * Checks if the dark mode is enabled in the local storage
 * @returns true if dark mode is enabled, false otherwise
 */
export const isDarkModeEnabled = () => {
    return JSON.parse(typeof window !== "undefined" && localStorage.getItem(DARKMODE_KEY_LOCALSTORAGE)) || false; // eslint-disable-line no-undef    
};

/**
 * Toggles the dark mode state in local storage
 * @returns The new state of the dark mode
 */
export const toggleDarkMode = () => {
    const new_dark_mode_status = !isDarkModeEnabled();
    writeDarkModeStateToLocalStorage(new_dark_mode_status);
    return new_dark_mode_status;
};