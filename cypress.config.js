const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '827g74',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
