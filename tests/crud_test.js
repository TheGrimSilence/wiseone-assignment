Feature('crud');

Scenario('test something', (I) => {
	// Tap the login button
	I.click('Login');
	// Fill the Username
	I.fillField('Username', 'Luke');
	I.fillField('Password', 'Skywalker');
});
