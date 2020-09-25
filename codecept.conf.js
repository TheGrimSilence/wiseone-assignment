const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
	tests: './tests/*_test.js',
	output: './output',
	helpers: {
		Puppeteer: {
			url: 'http://cafetownsend-angular-rails.herokuapp.com/login',
			show: true,
			windowSize: '1200x900',
			waitForNavigation: 'networkidle0',
		},
	},
	include: {
		I: './steps_file.js',
	},
	bootstrap: null,
	mocha: {},
	name: 'assignment',
	plugins: {
		retryFailedStep: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
	},
};
