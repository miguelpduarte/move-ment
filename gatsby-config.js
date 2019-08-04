module.exports = {
    siteMetadata: {
        title: "move-ment",
        description: "An alternative webapp front-end to http://move-me.mobi 's website and mobile app.",
        author: "@miguelpduarte",
    },
    plugins: [
        // See: https://github.com/hupe1980/gatsby-plugin-material-ui/
        "gatsby-plugin-material-ui",
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
                background_color: "#00897b",
                theme_color: "#00897b",
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

        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                // Setting either the tracking id for prod or for beta (Dev) websites
                trackingId: process.env.NODE_ENV === "production" ? "UA-137730755-3" : "UA-137730755-4",
                head: true,
                anonymize: true,
                respectDNT: true,
                pageTransitionDelay: 0,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        "gatsby-plugin-offline",
    ],
};
