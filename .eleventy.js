// const sass = require("sass");
const eleventySass = require("eleventy-sass");

// Add above your Eleventy config
const markdownIt = require("markdown-it");

// Add within your config module
const md = new markdownIt({
    html: true,
});

module.exports = function(eleventyConfig) {

    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy({"src/img": "img"});

    eleventyConfig.addPassthroughCopy({"src/manifest.json": "manifest.json"});
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addShortcode("talkdateformat", function(date){
        return new Date(date).toLocaleString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    })

    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
};
