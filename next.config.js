module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/2048-in-react",
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;;
