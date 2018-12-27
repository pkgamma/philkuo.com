module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats("html, liquid, njk, css, js, eot, ttf, woff, svg, jpg, gif, png, cur");
  eleventyConfig.addPassthroughCopy("_redirects");
};