module.exports = {
  plugins: [
    "postcss-nested",
    "postcss-flexbugs-fixes",
    "postcss-hover-media-feature",
    [
      "next/dist/compiled/postcss-preset-env",
      {
        stage: 3,
        autoprefixer:
          process.env.NODE_ENV === "development" ? false : undefined,
        features: {
          "custom-media-queries": true,
          "custom-properties": false,
        },
      },
    ],
  ],
};
