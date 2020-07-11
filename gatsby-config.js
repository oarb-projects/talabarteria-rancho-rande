module.exports = {
  siteMetadata: {
    title: `Talabarteria RanchoGrande`,
    description: `La Talabarteria RanchoGrande es un negocio familiar, una tradición mexicana con más de 50 años`,
    author: `Oscar Rosete`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options:{
    //     path:`${__dirname}/src/pages`,
    //     name:'pages'
    //   }
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "talabarteria",
        // Url to query from
        url: "http://localhost:3000/graphql/endpoint",
      },
    },
    {
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
        connectionString:'mongodb+srv://talabarteriaadmin:Admin123@cluster0-z5xed.mongodb.net/talabarteria-db?retryWrites=true&w=majority',
        // Name of the database and collection where are books reside
        dbName: 'talabarteria-db',
        collection: ['categories','products'],
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-168745887-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
