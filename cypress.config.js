const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x1x8k4',
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

