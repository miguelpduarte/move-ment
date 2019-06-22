import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: "#00897b",
            },
            secondary: {
                main: "#388e3c",
            },
        },
    }
);

const CustomThemeProvider = ({children}) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default CustomThemeProvider;