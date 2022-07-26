const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/globals.scss";',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        ç: path.resolve(__dirname, './src/components'),
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
});
