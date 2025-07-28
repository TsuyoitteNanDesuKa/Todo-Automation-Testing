const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Frontend server address
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      return config;
    },
  },
});
