const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://www.automationpractice.pl/', //Przekierowanie na wybraną stronę
		redirectionLimit: 3, //Ile może wykonać przekierowań
		retries: {
			runMode: 1,
			openMode: 1,
		}, //Ile razy może powturzyć test po trafieniu na jakiś błąd
		watchForFileChanges: true,
		chromeWebSecurity: false,
		viewportWidth: 1920,
		viewportHeight: 1080,
		waitForAnimations: true,
		testIsolation: false,
		theme: 'dark',
	},
})
