module.exports = {
  pluginOptions: {
    routerGen: {
      glob: ["src/views/*.+(ts|tsx)", "src/views/**/*.+(ts|tsx)"],
      root: "src/views",
      file: "src/router.ts"
    }
  }
}

