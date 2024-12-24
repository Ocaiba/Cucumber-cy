import createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { defineConfig } from "cypress";

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
  await addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));
  return config;
}

export default defineConfig({
  e2e: {
    // specPattern: "**/*.feature",
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents,
  },
});
