const path = require("path")
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/search/)) {
    createPage({
      path: "/search",
      matchPath: "/search/:query",
      component: path.resolve("src/pages/search.js"),
    })
  }

  if (page.path.match(/^\/movie/)) {
    createPage({
      path: "/movie",
      matchPath: "/movie/:id",
      component: path.resolve("src/pages/movie.js"),
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: "preact/compat",
        react$: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom$": "preact/compat",
      },
    },
  })
}
