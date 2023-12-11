const { defineConfig } = require('@vue/cli-service')
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
