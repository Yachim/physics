const basePath = ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  publicRuntimeConfig: {
    basePath
  }
};

export default nextConfig;
