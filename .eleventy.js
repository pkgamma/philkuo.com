module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats("md, html, liquid, njk, css, js, eot, ttf, woff, svg, jpg, jpeg, gif, png, cur");
  eleventyConfig.addPassthroughCopy("_redirects");
};