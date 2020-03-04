module.exports = {
  siteMetadata: {
    title: `Gatsby Weather App`
  },
  plugins: [
    {
      resolve: "gatsby-source-openweathermap",
      options: {
        apikey: "094235b9520689510a5f74b2781146b1",
        location: "Chicago",
        units: "imperial",
        type: "weather"
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`
      }
    },

    {
      resolve: "gatsby-source-darksky",
      options: {
        key: "624ec0fe63cb635ec67a00224c10793a",
        latitude: "43.09",
        longitude: "-84.99",
        exclude: ["minutely"]
      }
    }
  ]
};
