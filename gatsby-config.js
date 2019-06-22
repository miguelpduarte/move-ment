module.exports = {
    siteMetadata: {
        title: "move-ment",
        description: "An alternative webapp front-end to http://move-me.mobi 's website and mobile app.",
        author: "@miguelpduarte",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        // {
        //     resolve: "gatsby-source-filesystem",
        //     options: {
        //         name: "images",
        //         path: `${__dirname}/src/images`,
        //     },
        // },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "move-ment",
                short_name: "move-ment",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                icon: "src/images/Bus_stop_symbol.png", // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: "use-credentials",
            },
        },


        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        "gatsby-plugin-offline",
    ],
};
