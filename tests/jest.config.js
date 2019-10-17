module.exports = {
	verbose: true,
	setupFiles: ['./jest.setup.js'],
	moduleNameMapper: {
		"\\.(css|less|scss|sss|styl)$": "<rootDir>/../node_modules/jest-css-modules"
	},
	testPathIgnorePatterns: [
		'<rootDir>/../node_modules/',
		'<rootDir>/../demo/',
		'<rootDir>/../dist/'
	],
};