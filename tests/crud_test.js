Feature('crud');

Scenario('can log in', (I) => {
	I.amOnPage('/');
	// Tap the login button
	I.click('Login');
	// Fill the Username
	I.fillField('Username', 'Luke');
	I.fillField('Password', 'Skywalker');
});
