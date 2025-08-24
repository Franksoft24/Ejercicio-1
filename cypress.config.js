const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    chromeWebSecurity: false, // <--- Este codigo deshabilita CORS y otras funciones de seguridad web
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
