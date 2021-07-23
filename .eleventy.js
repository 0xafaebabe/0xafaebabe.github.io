const now = String(Date.now())
const yaml = require("js-yaml");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
 
  eleventyConfig.addWatchTarget('./_tmp/style.css')
 
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './styles/styles.css' })
 
  eleventyConfig.addShortcode('version', function () {
    return now
  })

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  })

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (
        process.env.ELEVENTY_PRODUCTION &&
        outputPath &&
        outputPath.endsWith('.html')
      ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
        return minified
      }
      return content
  })

  eleventyConfig.addPassthroughCopy("images")

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts",
    }
  }
}
