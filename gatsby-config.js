/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBJ7M7bskbvK6lza0z28_bT3hWFNbupBqA",
          authDomain: "barbacoacalero98.firebaseapp.com",
          databaseURL: "https://barbacoacalero98.firebaseio.com",
          projectId: "barbacoacalero98",
          storageBucket: "barbacoacalero98.appspot.com",
          messagingSenderId: "198642931375",
          appId: "1:198642931375:web:fa621e3aa8b7a336f1665a",
          measurementId: "G-LWKC3L1WNB"
        }
      }
    }
  ],
}