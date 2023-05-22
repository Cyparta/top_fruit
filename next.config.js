/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // target: "serverless",
  serverless: true,
  // Specify which pages to export
  generateStaticParams: async () => {
    const locales = ["de-DE"];
    const slugs = ["summer-dress-f"];

    const params = [];
    locales.forEach((locale) => {
      slugs.forEach((slug) => {
        params.push({
          params: {
            locale,
            slug,
          },
          locale,
          slug,
        });
      });
    });

    return params;
  },
  output: "export",

  // Set the output directory for the exported files
  // This isthe directory where the static HTML files will be generated
  // when you run the `npm run build && npm run export` command
  // Make sure this directory is not ignored by Git or other version control systems
  distDir: "out",
};

module.exports = nextConfig;
