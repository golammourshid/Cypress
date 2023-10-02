const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://prportal.nidw.gov.bd",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
