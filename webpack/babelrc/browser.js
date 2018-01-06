module.exports = {
  "plugins": [
    "transform-runtime",
    "transform-class-properties",
    "transform-object-rest-spread",
  ],
  presets: [
    [
      'env',
      {
        targets: { browsers: ['> 5%', 'last 2 versions'] },
        modules: false,
      }
    ],
    'react',
  ],
}
