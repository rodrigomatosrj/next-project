/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["de", "fr", "en"],
    defaultLocale: "de",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "lib/styles")],
  },
};

module.exports = nextConfig;
