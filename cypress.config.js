const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://www.bsntecnologia.com.br/TesteQA.html', 
    viewportWidth: 1920,
    viewportHeight: 1080,

  },
});
