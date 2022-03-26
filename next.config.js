const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['m.media-amazon.com', 'cdn.pixabay.com', 'ia.media-imdb.com'],
  },
};
