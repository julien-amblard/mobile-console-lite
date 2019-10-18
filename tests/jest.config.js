module.exports = {
	verbose: true,
	setupFiles: ['./jest.setup.js'],
	moduleNameMapper: {
		"\\.(css|less|scss|sss|styl)$": "<rootDir>/../node_modules/jest-css-modules",
		"@Components(.*)$": "<rootDir>/../src/components/$1",
	},
	testPathIgnorePatterns: [
		'<rootDir>/../node_modules/',
		'<rootDir>/../demo/',
		'<rootDir>/../dist/'
	],
};