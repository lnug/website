const eleventySass = require("eleventy-sass");
const pluginHandlebars = require("@11ty/eleventy-plugin-handlebars");
const markdownIt = require("markdown-it");

const md = new markdownIt({
    html: true,
});

module.exports = function(eleventyConfig) {
    // Ensure passthrough copy paths are relative to the input directory
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/manifest.json");

    // Add plugins
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPlugin(pluginHandlebars);

    // Add filters
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    eleventyConfig.addFilter("talkdateformat", function(date) {
        return new Date(date).toLocaleString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });

    // Return configuration object
    return {
        dir: {
            input: "src",
            output: "docs"
        },
    templateFormats: ["html", "hbs", "liquid", "md"], // Add Handlebars and Liquid
    markdownTemplateEngine: "liquid", // Use Liquid for Markdown files
    htmlTemplateEngine: "liquid", // Process .html with Liquid (hbs handled by .hbs files)
        dataTemplateEngine: "liquid" // Use Liquid for data files
    };
};

