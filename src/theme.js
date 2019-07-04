import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const calcTheme = is_dark_mode_enabled => responsiveFontSizes(createMuiTheme({
    palette: {
        type: is_dark_mode_enabled ? "dark" : "light",
        primary: {
            main: "#00897b",
        },
        secondary: {
            main: "#388e3c",
        },
    },
}));

export default calcTheme;