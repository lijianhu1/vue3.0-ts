module.exports = {
  devServer: {
    port: '8000',
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://39.108.226.88:7001',
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  }
};
